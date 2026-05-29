// ============================================================
// PORTLAND TRIP — DATA MODULE
// All localStorage read/write operations in one place.
// Keys:
//   portland_responses_jessica  — Jessica's survey answers
//   portland_responses_libby    — Libby's survey answers
//   portland_admin_pin          — Sarah's hashed PIN
//   portland_custom_questions   — Sarah's custom questions
//   portland_agenda_text        — Generated agenda text
// ============================================================
const DATA = (() => {
  const KEYS = {
    jessica: 'portland_responses_jessica',
    libby:   'portland_responses_libby',
    pin:     'portland_admin_pin',
    custom:  'portland_custom_questions',
    agenda:  'portland_agenda_text'
  };

  // ── Answers ─────────────────────────────────────────────────
  function getAnswers(user) {
    try { return JSON.parse(localStorage.getItem(KEYS[user]) || '{}'); }
    catch { return {}; }
  }
  function saveAnswer(user, questionId, value) {
    const answers = getAnswers(user);
    answers[questionId] = value;
    localStorage.setItem(KEYS[user], JSON.stringify(answers));
  }
  function getAnswer(user, questionId) {
    return getAnswers(user)[questionId];
  }

  // ── Week completion ─────────────────────────────────────────
  function isWeekComplete(user, week) {
    const answers = getAnswers(user);
    const qs = QUESTIONS.find(w => w.week === week);
    if (!qs) return false;
    const required = qs.questions.filter(q => q.type !== 'text');
    return required.every(q =>
      answers[q.id] !== undefined &&
      answers[q.id] !== null &&
      answers[q.id] !== ''
    );
  }
  function completedWeeks(user) {
    return QUESTIONS.filter(w => isWeekComplete(user, w.week)).map(w => w.week);
  }

  // ── Month-based unlock: on the 1st of a month, ALL weeks
  //    with a sendDate in that calendar month become available.
  //    This lets respondents answer the whole month in one sitting.
  function isWeekUnlocked(week) {
    const wData = QUESTIONS.find(w => w.week === week);
    if (!wData) return false;
    const sendDate  = new Date(wData.sendDate);
    const now       = new Date();
    // Unlock on the 1st of the sendDate's month
    const unlockOn  = new Date(sendDate.getFullYear(), sendDate.getMonth(), 1);
    return now >= unlockOn;
  }

  // ── "In the running" places — only where BOTH said yes ──────
  function getInRunningPlaces() {
    const allPlaces = {};
    ['jessica', 'libby'].forEach(user => {
      const answers = getAnswers(user);
      QUESTIONS.forEach(week => {
        week.questions.forEach(q => {
          if (q.type === 'yesno_place' && q.place) {
            const val = answers[q.id];
            if (!allPlaces[q.place]) {
              allPlaces[q.place] = { yes: 0, no: 0, unanswered: 0 };
            }
            if (val === 'yes')     allPlaces[q.place].yes++;
            else if (val === 'no') allPlaces[q.place].no++;
            else                   allPlaces[q.place].unanswered++;
          }
        });
      });
    });
    // Only show places where BOTH people voted yes
    return Object.entries(allPlaces)
      .filter(([, v]) => v.yes === 2)
      .sort((a, b) => b[1].yes - a[1].yes)
      .map(([place, votes]) => ({ place, ...votes }));
  }

  // ── PIN ─────────────────────────────────────────────────────
  function getPin()        { return localStorage.getItem(KEYS.pin); }
  function setPin(pin)     { localStorage.setItem(KEYS.pin, pin); }
  function checkPin(input) { return input === localStorage.getItem(KEYS.pin); }

  // ── Custom questions ────────────────────────────────────────
  function getCustomQuestions() {
    try { return JSON.parse(localStorage.getItem(KEYS.custom) || '[]'); }
    catch { return []; }
  }
  function saveCustomQuestions(list) {
    localStorage.setItem(KEYS.custom, JSON.stringify(list));
  }

  // ── Agenda ──────────────────────────────────────────────────
  function getAgenda()      { return localStorage.getItem(KEYS.agenda) || ''; }
  function saveAgenda(text) { localStorage.setItem(KEYS.agenda, text); }

  // ── Export for Google Sheets ────────────────────────────────
  function generateExport() {
    const rows = [['Week', 'Theme', 'Question', 'Jessica', 'Libby']];
    QUESTIONS.forEach(week => {
      week.questions.forEach(q => {
        const jVal = getAnswer('jessica', q.id);
        const lVal = getAnswer('libby',   q.id);
        const jStr = Array.isArray(jVal) ? jVal.join(', ') : (jVal || '');
        const lStr = Array.isArray(lVal) ? lVal.join(', ') : (lVal || '');
        rows.push([`Week ${week.week}`, week.theme, q.text.substring(0, 80), jStr, lStr]);
      });
    });
    return rows.map(r => r.join('\t')).join('
');
  }

  // ── Build agenda prompt ─────────────────────────────────────
  function buildAgendaPrompt() {
    const jAnswers  = getAnswers('jessica');
    const lAnswers  = getAnswers('libby');
    const inRunning = getInRunningPlaces();
    const custom    = getCustomQuestions();

    let prompt = `You are building a personalized 5-day Portland, Oregon trip itinerary for Sarah and two guests: Jessica and Libby (old friends from their Cengage days). The trip runs September 14-19, 2026 (Sun-Fri, arriving Sept 14, departing Sept 19). Sarah lives in Portland — no hotel needed.

Based on their survey answers, generate a detailed day-by-day itinerary.

Format it as:
DAY 1 — SUNDAY, SEPTEMBER 14: [Theme Title]
[Morning] ...
[Afternoon] ...
[Evening] ...
...and so on for Days 1-5 (Sept 14-18). Day 6 (Sept 19) is departure — give a brief send-off note.

Include specific restaurant recommendations, timing suggestions, and insider tips. Mention fun facts where relevant (e.g. Timberline Lodge = The Shining exterior, Astoria = The Goonies).

SURVEY RESULTS:
Places BOTH guests want to go:
${inRunning.map(p => `- ${p.place}`).join('
')}

Accessibility / personal notes (from Week 0 check-in):
Jessica: ${jAnswers['w0q1'] || 'No notes provided'}
Libby: ${lAnswers['w0q1'] || 'No notes provided'}

Jessica's answers:
${QUESTIONS.map(week =>
  week.questions.map(q => {
    const val = jAnswers[q.id];
    if (!val && val !== 0) return null;
    const display = Array.isArray(val) ? val.join(', ') : val;
    return `[Week ${week.week} - ${week.theme}] ${q.text.substring(0, 60)}... => ${display}`;
  }).filter(Boolean).join('
')
).join('
')}

Libby's answers:
${QUESTIONS.map(week =>
  week.questions.map(q => {
    const val = lAnswers[q.id];
    if (!val && val !== 0) return null;
    const display = Array.isArray(val) ? val.join(', ') : val;
    return `[Week ${week.week} - ${week.theme}] ${q.text.substring(0, 60)}... => ${display}`;
  }).filter(Boolean).join('
')
).join('
')}

${custom.length > 0 ? 'Custom questions:
' + custom.map(c => '- ' + c.text + ': Jessica=' + (c.jessica||'?') + ', Libby=' + (c.libby||'?')).join('
') : ''}

Key context:
- Sept 14 is Sunday (Portland Saturday Market runs weekdays too at PSU)
- Sept 15 is Monday
- Saturday Market & PSU Farmers Market: Saturdays & Sundays through late October
- Darcelle XV Sunday drag brunch is all ages; evening shows may be 21+
- Prioritize places where BOTH said yes
- Build in breathing room — respect any pacing preferences
- Note and accommodate any accessibility needs or dietary restrictions from the Week 0 answers
- Make it feel like a thoughtful friend who knows Portland wrote it

Generate a detailed, warm, practical itinerary with real restaurant names and specific tips.`;

    return prompt;
  }

  // ── Reset ────────────────────────────────────────────────────
  function resetAll() {
    Object.values(KEYS).forEach(k => localStorage.removeItem(k));
  }

  return {
    getAnswers, saveAnswer, getAnswer,
    isWeekComplete, completedWeeks, isWeekUnlocked,
    getInRunningPlaces,
    getPin, setPin, checkPin,
    getCustomQuestions, saveCustomQuestions,
    getAgenda, saveAgenda,
    generateExport, buildAgendaPrompt,
    resetAll
  };
})();
