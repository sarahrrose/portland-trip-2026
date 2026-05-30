// ============================================================
// PORTLAND TRIP SURVEY — QUESTION BANK
// Week 0: pre-trip personal check-in (unlocks immediately)
// Weeks 1–11: progressive questions about the trip
// All questions use 1–5 scale for tracker analysis
// ============================================================
const QUESTIONS = [

// ── WEEK 0 ── Pre-Trip Check-In ─────────────────────────────
{
  week: 0,
  theme: "A Little About You",
  sendDate: "2026-05-01",
  intro: "Before we dive into Portland planning, I want to make sure I'm thoughtful about what'll make this trip great for YOU specifically.",
  questions: [
    {
      id: "w0q1",
      type: "text",
      text: "Has anything changed in your life since our Cengage days that may affect your trip? Mobility issues, food allergies, dietary needs, or anything else I should be mindful of when interacting and planning with you?"
    }
  ]
},

// ── WEEK 1 ── Big Adventures & Travel Appetite ──────────────
{
  week: 1,
  theme: "The Big Adventures",
  sendDate: "2026-06-01",
  intro: "Let's start with the big stuff — the Pacific Northwest has some legendary spots within a few hours of Portland. No pressure, just gut reactions!",
  questions: [
    { id: "w1q1", type: "scale", text: "How do you feel about road trips during a vacation? (1 = I'd rather stay close to the city, 5 = I love a good drive to somewhere epic)", scale: { min: 1, max: 5, labels: ["Stay in the city", "Love a long drive"] } },
    { id: "w1q2", type: "scale", text: "Multnomah Falls is one of the tallest waterfalls in the US — about 30 min from Portland with a short hike to the viewpoint. How excited are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Multnomah Falls", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Multnomah_Falls" },
    { id: "w1q3", type: "scale", text: "Timberline Lodge on Mt. Hood is about 1.5 hours away — the hotel used for exterior shots in The Shining. Incredible mountain views, great food, magical vibes. Worth a day trip?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Timberline Lodge", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Timberline_Lodge" },
    { id: "w1q4", type: "scale", text: "Astoria is about 2 hours away on the Oregon Coast — The Goonies was filmed here, plus there's a giant column you can climb and incredible Victorian architecture. Day trip material?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Astoria", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Astoria,_Oregon" },
    { id: "w1q5", type: "scale", text: "The Oregon Coast (Cannon Beach, Haystack Rock) is 1.5-2 hours away. Dramatic scenery, tide pools, and great food. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Oregon Coast / Cannon Beach", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Haystack_Rock" },
    { id: "w1q6", type: "scale", text: "Hood River is about an hour east — windsurfing capital of the world, amazing fruit stands, local breweries, and stunning gorge views. Day trip?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Hood River", image: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Hood_River,_Oregon" },
    { id: "w1q7", type: "scale", text: "Willamette Valley wine country is about 45 min away — rolling vineyards, world-class Pinot Noir, gorgeous tasting rooms. Worth an afternoon?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Willamette Valley Wine Country", image: "https://images.unsplash.com/photo-1559519531-9a24f4ae6df6?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Willamette_Valley_AVA" }
  ]
},

// ── WEEK 2 ── Portland's Personality ────────────────────────
{
  week: 2,
  theme: "Portland's Personality",
  sendDate: "2026-06-08",
  intro: "Portland has a very specific vibe — weird, artsy, foodie, outdoorsy. Let's figure out which flavors you want most.",
  questions: [
    { id: "w2q1", type: "scale", text: "Powell's City of Books takes up an entire city block — it's the world's largest independent bookstore. How excited are you to visit?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Powell's City of Books", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Powell%27s_Books" },
    { id: "w2q2", type: "scale", text: "The Freakybuttrue Peculiarium is Portland's museum of oddities — alien autopsy, shrunken heads, carnival weirdness. Total Tim Burton energy. How into it are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Freakybuttrue Peculiarium", image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Freakybuttrue_Peculiarium" },
    { id: "w2q3", type: "scale", text: "McMenamins Kennedy School is a real elementary school turned brewery/movie theater/hotel. Free to wander, murals everywhere. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "McMenamins Kennedy School", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=280&h=180&fit=crop&q=80", imageLink: "https://www.mcmenamins.com/kennedy-school" },
    { id: "w2q4", type: "scale", text: "Cathedral Park sits under the St. Johns Bridge — the gothic arches are straight out of a Tim Burton film. Perfect for a picnic at sunset. How appealing?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Cathedral Park", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Cathedral_Park_(Portland,_Oregon)" },
    { id: "w2q5", type: "scale", text: "Voodoo Doughnut is a Portland rite of passage — get the Voodoo Doll with the pretzel stake. Worth the tourist trap experience?", scale: { min: 1, max: 5, labels: ["Hard pass", "Absolutely!"] }, place: "Voodoo Doughnut", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=280&h=180&fit=crop&q=80", imageLink: "https://www.voodoodoughnut.com" },
    { id: "w2q6", type: "scale", text: "Portland Saturday Market & PSU Farmers Market — handmade art, crafts, food pods, and farm-fresh goodies. Both run Saturdays. How excited are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Saturday Market & PSU Farmers Market", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=280&h=180&fit=crop&q=80", imageLink: "https://www.portlandsaturdaymarket.com" },
    { id: "w2q7", type: "scale", text: "How much time do you want to spend exploring neighborhoods on foot vs. hitting specific landmarks?", scale: { min: 1, max: 5, labels: ["Landmarks only", "Love wandering neighborhoods"] } }
  ]
},

// ── WEEK 3 ── Food Preferences ───────────────────────────────
{
  week: 3,
  theme: "Food & Restaurants",
  sendDate: "2026-06-15",
  intro: "Portland has an incredible food scene. Let's figure out what you're craving.",
  questions: [
    { id: "w3q1a", type: "scale", text: "How interested are you in fine dining / tasting menu experiences?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w3q1b", type: "scale", text: "How interested are you in food trucks & cart pods?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w3q1c", type: "scale", text: "How interested are you in international / ethnic cuisine?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w3q1d", type: "scale", text: "How interested are you in seafood & Pacific Northwest cuisine?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w3q1e", type: "scale", text: "How interested are you in vegan & plant-based options?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w3q2", type: "scale", text: "Salt & Straw is Portland's famous artisan ice cream shop with unusual flavors (honey lavender, bone marrow bourbon, etc). Worth a stop?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Salt & Straw", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=280&h=180&fit=crop&q=80", imageLink: "https://saltandstraw.com" },
    { id: "w3q3", type: "scale", text: "Pine State Biscuits is legendary for massive Southern-style biscuit sandwiches. A Portland brunch institution. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Pine State Biscuits", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=280&h=180&fit=crop&q=80", imageLink: "https://www.pinestatebiscuits.com" },
    { id: "w3q4", type: "scale", text: "How adventurous are you with food? (1 = stick to familiar favorites, 5 = the weirder the better)", scale: { min: 1, max: 5, labels: ["Familiar favorites", "The weirder the better"] } },
    { id: "w3q5", type: "scale", text: "How much do you want to do a food cart pod crawl? (Portland has famous covered cart pods — you go booth to booth)", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w3q6", type: "scale", text: "How important is it to have at least one nice sit-down group dinner at a good restaurant?", scale: { min: 1, max: 5, labels: ["Not important", "Very important"] } }
  ]
},

// ── WEEK 4 ── Drinks & Evening Vibes ────────────────────────
{
  week: 4,
  theme: "Drinks & Evening Vibes",
  sendDate: "2026-06-22",
  intro: "Portland nights can go many directions — craft cocktails, live music, cozy coffee, or something totally unexpected.",
  questions: [
    { id: "w4q1", type: "scale", text: "Darcelle XV is Portland's legendary drag venue — the only drag club on the National Register of Historic Places (open since 1967). Friday and Saturday shows. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Darcelle XV Showplace", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Darcelle_XV_Showplace" },
    { id: "w4q2", type: "scale", text: "Rimsky-Korsakoffee House is a candlelit Victorian cafe open 7pm-midnight with haunted bathroom surprises and classical music. Deeply weird and wonderful. How into it are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Rimsky-Korsakoffee House", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Rimsky-Korsakoffee_House" },
    { id: "w4q3a", type: "scale", text: "How interested are you in craft cocktail bars?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w4q3b", type: "scale", text: "How interested are you in Oregon craft breweries?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w4q3c", type: "scale", text: "How interested are you in wine bars?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w4q3d", type: "scale", text: "How interested are you in live music venues?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w4q3e", type: "scale", text: "How interested are you in karaoke?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w4q3f", type: "scale", text: "How interested are you in a quiet coffee or dessert spot?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w4q4", type: "scale", text: "How late do you like to stay out on vacation nights? (1 = early to bed, 5 = last call every night)", scale: { min: 1, max: 5, labels: ["Early bird", "Last call every night"] } },
    { id: "w4q5", type: "scale", text: "Would you want a dedicated evening hopping between Portland breweries or wine bars — a casual tasting night?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] } }
  ]
},

// ── WEEK 5 ── Getting Outside ────────────────────────────────
{
  week: 5,
  theme: "Getting Outside",
  sendDate: "2026-06-29",
  intro: "Portland has insane access to nature. How much green do you want mixed in?",
  questions: [
    { id: "w5q1", type: "scale", text: "How much outdoor / nature time do you want in the trip? (1 = I'm here for the city, 5 = I want to be in trees every day)", scale: { min: 1, max: 5, labels: ["All city", "Nature every day"] } },
    { id: "w5q2", type: "scale", text: "Forest Park is one of the largest urban forests in the US — miles of trails right inside the city. How interested are you in a short hike?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Forest Park", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Forest_Park_(Portland,_Oregon)" },
    { id: "w5q3", type: "scale", text: "Portland Japanese Garden in Washington Park is consistently rated one of the most authentic outside Japan. Peaceful and stunning. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Portland Japanese Garden", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=280&h=180&fit=crop&q=80", imageLink: "https://japanesegarden.org" },
    { id: "w5q4", type: "scale", text: "Washington Park also has the International Rose Test Garden — free, beautiful, peak bloom in July/August. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "International Rose Test Garden", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/International_Rose_Test_Garden" },
    { id: "w5q5a", type: "scale", text: "How interested are you in easy scenic walks / paved paths?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w5q5b", type: "scale", text: "How interested are you in moderate hiking (some elevation)?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w5q5c", type: "scale", text: "How interested are you in waterfall hikes?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w5q5d", type: "scale", text: "How interested are you in kayaking or paddleboarding?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w5q5e", type: "scale", text: "How interested are you in biking around Portland?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w5q5f", type: "scale", text: "How interested are you in beach / tide pool exploring?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } }
  ]
},

// ── WEEK 6 ── Culture & Unique Experiences ──────────────────
{
  week: 6,
  theme: "Culture & Unique Experiences",
  sendDate: "2026-07-06",
  intro: "Portland has some genuinely one-of-a-kind experiences. Let's see which ones land.",
  questions: [
    { id: "w6q1", type: "scale", text: "Alberta Arts District — galleries, murals, street art, eclectic shops. Best on foot. Last Thursday outdoor art walk is July 30. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Alberta Arts District", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Alberta_Arts_District" },
    { id: "w6q2", type: "scale", text: "Shanghai Tunnels tour — underground network allegedly used for shanghaiing sailors in Old Town Portland. Creepy history, guided tour. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Shanghai Tunnels", image: "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Portland_Underground" },
    { id: "w6q3", type: "scale", text: "Portland Art Museum is the oldest art museum on the West Coast. Big collection, rotating exhibitions. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Portland Art Museum", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=280&h=180&fit=crop&q=80", imageLink: "https://portlandartmuseum.org" },
    { id: "w6q4", type: "scale", text: "How interested are you in catching a live performance — comedy, theater, burlesque, or a concert — if timing works out?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] } },
    { id: "w6q5", type: "scale", text: "Pearl District First Thursday gallery walk — galleries open late, free, very artsy crowd. August 6 would line up perfectly. How interested are you?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Pearl District Gallery Walk", image: "https://images.unsplash.com/photo-1524429656589-6633a470097c?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Pearl_District,_Portland,_Oregon" }
  ]
},

// ── WEEK 7 ── Shopping & Markets ────────────────────────────
{
  week: 7,
  theme: "Shopping & Markets",
  sendDate: "2026-07-13",
  intro: "Portland has great independent shopping — from vintage to local design to artisan goods.",
  questions: [
    { id: "w7q1", type: "scale", text: "How much shopping do you want built into the trip? (1 = none, 5 = a dedicated shopping day)", scale: { min: 1, max: 5, labels: ["No shopping", "Dedicated shopping day"] } },
    { id: "w7q2a", type: "scale", text: "How interested are you in vintage and thrift stores?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w7q2b", type: "scale", text: "How interested are you in local boutiques and indie designers?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w7q2c", type: "scale", text: "How interested are you in outdoor gear and adventure shops?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w7q2d", type: "scale", text: "How interested are you in artisan food and specialty grocery shops?", scale: { min: 1, max: 5, labels: ["Not for me", "Yes please!"] } },
    { id: "w7q3", type: "scale", text: "Mississippi Ave is a strip of independent shops, cafes, and restaurants in North Portland. How interested are you in spending time there?", scale: { min: 1, max: 5, labels: ["Not for me", "Absolutely!"] }, place: "Mississippi Ave", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=280&h=180&fit=crop&q=80", imageLink: "https://en.wikipedia.org/wiki/Mississippi_Avenue_(Portland)" },
    { id: "w7q4", type: "scale", text: "How important is it to set aside specific time for souvenir / gift shopping?", scale: { min: 1, max: 5, labels: ["Not important", "Very important"] } }
  ]
},

// ── WEEK 8 ── Rest & Pace ────────────────────────────────────
{
  week: 8,
  theme: "Rest & Pacing",
  sendDate: "2026-07-20",
  intro: "Every good trip needs some breathing room. Let's talk pace.",
  questions: [
    { id: "w8q1", type: "scale", text: "What's your ideal daily schedule? (1 = slow mornings, leisurely pace; 5 = packed itinerary, maximize every hour)", scale: { min: 1, max: 5, labels: ["Slow & leisurely", "Pack it in!"] } },
    { id: "w8q2", type: "scale", text: "How important is having a low-key afternoon or free time built into most days?", scale: { min: 1, max: 5, labels: ["Not important", "Very important"] } },
    { id: "w8q3a", type: "scale", text: "How appealing is a slow morning with coffee and a good book?", scale: { min: 1, max: 5, labels: ["Not my thing", "Love it!"] } },
    { id: "w8q3b", type: "scale", text: "How appealing is a nap or pool time in the afternoon?", scale: { min: 1, max: 5, labels: ["Not my thing", "Love it!"] } },
    { id: "w8q3c", type: "scale", text: "How appealing is wandering without a plan for a few hours?", scale: { min: 1, max: 5, labels: ["Not my thing", "Love it!"] } },
    { id: "w8q4", type: "scale", text: "Would you want a totally unscheduled free day to do whatever you feel like?", scale: { min: 1, max: 5, labels: ["Prefer structure", "Absolutely yes!"] } }
  ]
},

// ── WEEK 9 ── Day Trip Deep Dive ─────────────────────────────
{
  week: 9,
  theme: "Day Trip Deep Dive",
  sendDate: "2026-07-27",
  intro: "Based on your earlier answers, let's narrow down which day trip (if any) you're most excited about.",
  questions: [
    { id: "w9q1", type: "scale", text: "If we do ONE day trip outside Portland, which appeals most? Rate Multnomah Falls / Columbia River Gorge (1 = not this one, 5 = this is my top pick)", scale: { min: 1, max: 5, labels: ["Not this one", "Top pick!"] } },
    { id: "w9q2", type: "scale", text: "Rate Timberline Lodge on Mt. Hood as your ONE day trip (1 = not this one, 5 = this is my top pick)", scale: { min: 1, max: 5, labels: ["Not this one", "Top pick!"] } },
    { id: "w9q3", type: "scale", text: "Rate Oregon Coast / Cannon Beach as your ONE day trip (1 = not this one, 5 = this is my top pick)", scale: { min: 1, max: 5, labels: ["Not this one", "Top pick!"] } },
    { id: "w9q4", type: "scale", text: "Rate Willamette Valley wine country as your ONE day trip (1 = not this one, 5 = this is my top pick)", scale: { min: 1, max: 5, labels: ["Not this one", "Top pick!"] } },
    { id: "w9q5", type: "scale", text: "How early are you willing to start on a day trip day? (1 = I need a slow morning, 5 = I'll be in the car at 7am)", scale: { min: 1, max: 5, labels: ["Need a slow start", "Up at dawn!"] } }
  ]
},

// ── WEEK 10 ── Final Food Votes ──────────────────────────────
{
  week: 10,
  theme: "Final Food Votes",
  sendDate: "2026-08-03",
  intro: "Almost there! A few final food decisions to lock in the best meals.",
  questions: [
    { id: "w10q1", type: "scale", text: "How much do you want a nicer celebration dinner one evening (think great ambiance, special meal)?", scale: { min: 1, max: 5, labels: ["Not important", "Very important"] } },
    { id: "w10q2", type: "scale", text: "How important is it to have a dedicated brunch out at a great spot on one of the mornings?", scale: { min: 1, max: 5, labels: ["Not important", "Very important"] } },
    { id: "w10q3", type: "scale", text: "How concerned are you about accommodating food restrictions or allergies during the trip?", scale: { min: 1, max: 5, labels: ["No concerns", "Very important to plan for"] } },
    { id: "w10q4", type: "text", text: "Any food restrictions, allergies, or strong dislikes we absolutely need to plan around?" },
    { id: "w10q5a", type: "scale", text: "Priority for most meals: How important is food quality / cuisine?", scale: { min: 1, max: 5, labels: ["Not a priority", "Top priority"] } },
    { id: "w10q5b", type: "scale", text: "Priority for most meals: How important is atmosphere / vibe?", scale: { min: 1, max: 5, labels: ["Not a priority", "Top priority"] } },
    { id: "w10q5c", type: "scale", text: "Priority for most meals: How important is price / value?", scale: { min: 1, max: 5, labels: ["Not a priority", "Top priority"] } }
  ]
},

// ── WEEK 11 ── Last Calls & Wildcards ───────────────────────
{
  week: 11,
  theme: "Last Calls & Wildcards",
  sendDate: "2026-08-10",
  intro: "Final survey! Anything that didn't come up yet, and a few last wildcard questions.",
  questions: [
    { id: "w11q1", type: "scale", text: "Overall, how are you feeling about the trip? (1 = a little nervous / lots of unknowns, 5 = SO EXCITED, can't wait)", scale: { min: 1, max: 5, labels: ["A little nervous", "SO EXCITED!"] } },
    { id: "w11q2", type: "scale", text: "Is there anything you're hoping to do that hasn't come up in the surveys yet? How important is it to you? (Add a note below)", scale: { min: 1, max: 5, labels: ["Just a nice-to-have", "Very important to me"] } },
    { id: "w11q3", type: "text", text: "Any wildcard requests, bucket list items, or things you'd love to do that we haven't covered?" },
    { id: "w11q4a", type: "scale", text: "What would make this trip perfect for you — quality time / deep conversations?", scale: { min: 1, max: 5, labels: ["Not a priority", "Top priority"] } },
    { id: "w11q4b", type: "scale", text: "What would make this trip perfect for you — lots of new experiences / adventure?", scale: { min: 1, max: 5, labels: ["Not a priority", "Top priority"] } },
    { id: "w11q4c", type: "scale", text: "What would make this trip perfect for you — total relaxation / recharging?", scale: { min: 1, max: 5, labels: ["Not a priority", "Top priority"] } },
    { id: "w11q5", type: "text", text: "Anything else Sarah should know before finalizing the itinerary?" }
  ]
}

];
