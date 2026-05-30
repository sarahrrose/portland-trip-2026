// ============================================================
// PORTLAND TRIP — DATA MODULE
// ============================================================
const DATA = (() => {
  const KEYS = {
    jessica: 'portland_responses_jessica',
    libby:   'portland_responses_libby',
    pin:     'portland_admin_pin',
    custom:  'portland_custom_questions',
    agenda:  'portland_agenda_text'
  };

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

  function isWeekComplete(user, week) {
    const answers = getAnswers(user);
    const qs = QUESTIONS.find(w => w.week === week);
    if (!qs) return false;
    const required = qs.questions.filter(q => q.type !== 'text');
    return required.every(q => answers[q.id] !== undefined && answers[q.id] !== null && answers[q.id] !== '');
  }
  function completedWeeks(user) {
    return QUESTIONS.filter(w => isWeekComplete(user, w.week)).map(w => w.week);
  }

  // Progression-based unlock: Week 0 always open.
// Each subsequent week unlocks only after the previous week is completed.
function isWeekUnlocked(week, user) {
if (week === 0) return true;
const sorted = QUESTIONS.map(w => w.week).sort((a, b) => a - b);
const idx = sorted.indexOf(week);
if (idx <= 0) return true;
const prevWeek = sorted[idx - 1];
return isWeekComplete(user || '', prevWeek);
}

function getInRunningPlaces() {
    const allPlaces = {};
    ['jessica', 'libby'].forEach(user => {
      const answers = getAnswers(user);
      QUESTIONS.forEach(week => {
        week.questions.forEach(q => {
          if (q.type === 'yesno_place' && q.place) {
            const val = answers[q.id];
            if (!allPlaces[q.place]) allPlaces[q.place] = { yes: 0, no: 0, unanswered: 0 };
            if (val === 'yes')     allPlaces[q.place].yes++;
            else if (val === 'no') allPlaces[q.place].no++;
            else                   allPlaces[q.place].unanswered++;
          }
        });
      });
    });
    return Object.entries(allPlaces)
      .filter(([, v]) => v.yes === 2)
      .sort((a, b) => b[1].yes - a[1].yes)
      .map(([place, votes]) => ({ place, ...votes }));
  }

  function getPin()        { return localStorage.getItem(KEYS.pin); }
  function setPin(pin)     { localStorage.setItem(KEYS.pin, pin); }
  function checkPin(input) { return input === localStorage.getItem(KEYS.pin); }

  function getCustomQuestions() {
    try { return JSON.parse(localStorage.getItem(KEYS.custom) || '[]'); }
    catch { return []; }
  }
  function saveCustomQuestions(list) { localStorage.setItem(KEYS.custom, JSON.stringify(list)); }

  function getAgenda()      { return localStorage.getItem(KEYS.agenda) || ''; }
  function saveAgenda(text) { localStorage.setItem(KEYS.agenda, text); }

  function generateExport() {
    const TAB = String.fromCharCode(9);
    const NL  = String.fromCharCode(10);
    const rows = [['Week', 'Theme', 'Question', 'Jessica', 'Libby']];
    QUESTIONS.forEach(week => {
      week.questions.forEach(q => {
        const jVal = getAnswer('jessica', q.id);
        const lVal = getAnswer('libby',   q.id);
        const jStr = Array.isArray(jVal) ? jVal.join(', ') : (jVal || '');
        const lStr = Array.isArray(lVal) ? lVal.join(', ') : (lVal || '');
        rows.push(['Week ' + week.week, week.theme, q.text.substring(0, 80), jStr, lStr]);
      });
    });
    return rows.map(r => r.join(TAB)).join(NL);
  }

  function buildAgendaPrompt() {
    const jAnswers  = getAnswers('jessica');
    const lAnswers  = getAnswers('libby');
    const inRunning = getInRunningPlaces();
    const custom    = getCustomQuestions();
    const NL = String.fromCharCode(10);

    const jLines = [];
    const lLines = [];
    QUESTIONS.forEach(week => {
      week.questions.forEach(q => {
        const jv = jAnswers[q.id];
        if (jv || jv === 0) {
          const d = Array.isArray(jv) ? jv.join(', ') : String(jv);
          jLines.push('[Week ' + week.week + ' - ' + week.theme + '] ' + q.text.substring(0, 60) + '... => ' + d);
        }
        const lv = lAnswers[q.id];
        if (lv || lv === 0) {
          const d = Array.isArray(lv) ? lv.join(', ') : String(lv);
          lLines.push('[Week ' + week.week + ' - ' + week.theme + '] ' + q.text.substring(0, 60) + '... => ' + d);
        }
      });
    });

    const placesText = inRunning.map(p => '- ' + p.place).join(NL);
    const jText = jLines.join(NL);
    const lText = lLines.join(NL);
    const customText = custom.length > 0
      ? ('Custom questions:' + NL + custom.map(c => '- ' + c.text + ': Jessica=' + (c.jessica || '?') + ', Libby=' + (c.libby || '?')).join(NL))
      : '';

    const parts = [
      'You are building a personalized 5-day Portland, Oregon trip itinerary for Sarah and two guests: Jessica and Libby. The trip runs September 14-19, 2026. Sarah lives in Portland — no hotel needed.',
      '',
      'Generate a detailed day-by-day itinerary formatted as:',
      'DAY 1 — SUNDAY, SEPTEMBER 14: [Theme]',
      '[Morning] ... [Afternoon] ... [Evening] ...',
      '...for Days 1-5 (Sept 14-18). Day 6 (Sept 19) = departure send-off.',
      '',
      'Include specific restaurants, timing, insider tips. Fun facts where relevant.',
      '',
      'SURVEY RESULTS:',
      'Places BOTH guests want to go:',
      placesText,
      '',
      'Accessibility / personal notes (Week 0):',
      'Jessica: ' + (jAnswers['w0q1'] || 'No notes'),
      'Libby: '   + (lAnswers['w0q1'] || 'No notes'),
      '',
      "Jessica's answers:",
      jText,
      '',
      "Libby's answers:",
      lText,
      '',
      customText,
      '',
      'Key context:',
      '- Sept 14 is Sunday; Saturday Market & PSU Farmers Market run Sat/Sun through Oct.',
      '- Darcelle XV Sunday brunch = all ages; evening shows may be 21+.',
      '- Prioritize places BOTH said yes to.',
      '- Respect pacing preferences and accommodate any accessibility/dietary needs.',
      '- Make it feel like a thoughtful friend who knows Portland wrote it.'
    ];
    return parts.join(NL);
  }

  function resetAll() { Object.values(KEYS).forEach(k => localStorage.removeItem(k)); }

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
