// ============================================================
// PORTLAND TRIP SURVEY — QUESTION BANK
// 11 weeks of progressive questions, front-loading big travel
// decisions so driving/distance preferences are known early.
// ============================================================

const QUESTIONS = [

  // ── WEEK 1 ── Big Adventures & Travel Appetite ────────────
  {
    week: 1,
    theme: "The Big Adventures",
    sendDate: "2026-06-01",
    intro: "Let's start with the big stuff — the Pacific Northwest has some legendary spots within a few hours of Portland. No pressure, just gut reactions!",
    questions: [
      {
        id: "w1q1",
        type: "scale",
        text: "How do you feel about road trips during a vacation? (1 = I'd rather stay close to the city, 5 = I love a good drive to somewhere epic)",
        scale: { min: 1, max: 5, labels: ["Stay in the city", "Love a long drive"] }
      },
      {
        id: "w1q2",
        type: "yesno_place",
        text: "Multnomah Falls is one of the tallest waterfalls in the US — about 30 min from Portland with a short hike to the viewpoint. Does that sound like your kind of thing?",
        place: "Multnomah Falls"
      },
      {
        id: "w1q3",
        type: "yesno_place",
        text: "Timberline Lodge on Mt. Hood is about 1.5 hours away — it's the hotel from The Shining (exterior shots). Incredible mountain views, great food, magical vibes. Worth a day trip?",
        place: "Timberline Lodge"
      },
      {
        id: "w1q4",
        type: "yesno_place",
        text: "Astoria is about 2 hours away on the Oregon Coast — The Goonies was filmed here, plus there's a giant column you can climb and incredible Victorian architecture. Day trip material?",
        place: "Astoria"
      },
      {
        id: "w1q5",
        type: "yesno_place",
        text: "The Oregon Coast (Cannon Beach, Haystack Rock) is 1.5–2 hours away. Dramatic scenery, tide pools, and great food. Interested?",
        place: "Oregon Coast / Cannon Beach"
      },
      {
        id: "w1q6",
        type: "yesno_place",
        text: "Hood River is about an hour east — windsurfing capital of the world, amazing fruit stands, local breweries, and stunning gorge views. Day trip?",
        place: "Hood River"
      },
      {
        id: "w1q7",
        type: "yesno_place",
        text: "Willamette Valley wine country is about 45 min away — rolling vineyards, world-class Pinot Noir, gorgeous tasting rooms. Worth an afternoon?",
        place: "Willamette Valley Wine Country"
      }
    ]
  },

  // ── WEEK 2 ── Portland's Personality ─────────────────────
  {
    week: 2,
    theme: "Portland's Personality",
    sendDate: "2026-06-08",
    intro: "Portland has a very specific vibe — weird, artsy, foodie, outdoorsy. Let's figure out which flavors you want most.",
    questions: [
      {
        id: "w2q1",
        type: "yesno_place",
        text: "Powell's City of Books takes up an entire city block — it's the world's largest independent bookstore. Must-do?",
        place: "Powell's City of Books"
      },
      {
        id: "w2q2",
        type: "yesno_place",
        text: "The Freakybuttrue Peculiarium is Portland's museum of oddities — alien autopsy, shrunken heads, carnival weirdness. Total Tim Burton energy. In?",
        place: "Freakybuttrue Peculiarium"
      },
      {
        id: "w2q3",
        type: "yesno_place",
        text: "McMenamins Kennedy School is a real elementary school turned bar/brewery/movie theater/hotel. Free to wander, murals everywhere, all ages. Interested?",
        place: "McMenamins Kennedy School"
      },
      {
        id: "w2q4",
        type: "yesno_place",
        text: "Cathedral Park sits under the St. Johns Bridge — the gothic arches are straight out of a Tim Burton film. Perfect for a picnic at sunset. Yes?",
        place: "Cathedral Park"
      },
      {
        id: "w2q5",
        type: "yesno_place",
        text: "Voodoo Doughnut is a Portland rite of passage — get the Voodoo Doll with the pretzel stake. Worth the tourist trap experience?",
        place: "Voodoo Doughnut"
      },
      {
        id: "w2q6",
        type: "yesno_place",
        text: "Portland Saturday Market is a huge outdoor handmade market along the waterfront — local art, crafts, food pods. Good afternoon activity?",
        place: "Portland Saturday Market"
      },
      {
        id: "w2q7",
        type: "scale",
        text: "How much time do you want to spend exploring neighborhoods on foot vs. hitting specific landmarks?",
        scale: { min: 1, max: 5, labels: ["Landmarks only", "Love wandering neighborhoods"] }
      }
    ]
  },

  // ── WEEK 3 ── Food Preferences ────────────────────────────
  {
    week: 3,
    theme: "Food & Restaurants",
    sendDate: "2026-06-15",
    intro: "Portland has an incredible food scene. Let's figure out what you're craving.",
    questions: [
      {
        id: "w3q1",
        type: "multiselect",
        text: "Which food vibes are you most into? (Select all that apply)",
        options: ["Fine dining / tasting menu", "Trendy farm-to-table", "Food trucks & carts", "International / ethnic cuisine", "Classic American / comfort food", "Seafood & Pacific Northwest", "Vegan & plant-based", "Brunch spots"]
      },
      {
        id: "w3q2",
        type: "yesno_place",
        text: "Salt & Straw is Portland's famous artisan ice cream shop with unusual flavors (honey lavender, bone marrow bourbon, etc). Worth a stop?",
        place: "Salt & Straw"
      },
      {
        id: "w3q3",
        type: "yesno_place",
        text: "Pine State Biscuits is legendary for massive Southern-style biscuit sandwiches. A Portland brunch institution. In?",
        place: "Pine State Biscuits"
      },
      {
        id: "w3q4",
        type: "scale",
        text: "How adventurous are you with food? (1 = stick to familiar favorites, 5 = the weirder the better)",
        scale: { min: 1, max: 5, labels: ["Familiar favorites", "The weirder the better"] }
      },
      {
        id: "w3q5",
        type: "yesno",
        text: "Would you want to do a food cart pod crawl? (Portland has famous covered cart pods — you go booth to booth)"
      },
      {
        id: "w3q6",
        type: "yesno",
        text: "Is a nice group dinner (sit-down, maybe nicer restaurant) something we should plan at least one evening?"
      }
    ]
  },

  // ── WEEK 4 ── Drinks & Evening Vibes ─────────────────────
  {
    week: 4,
    theme: "Drinks & Evening Vibes",
    sendDate: "2026-06-22",
    intro: "Portland nights can go many directions — dive bars, craft cocktails, live music, cozy coffee, or something totally unexpected.",
    questions: [
      {
        id: "w4q1",
        type: "yesno_place",
        text: "Darcelle XV is Portland's legendary drag venue — the only drag club on the National Register of Historic Places (open since 1967). Sunday brunch is all ages. Friday/Saturday shows may be 21+. Interested?",
        place: "Darcelle XV Showplace"
      },
      {
        id: "w4q2",
        type: "yesno_place",
        text: "Rimsky-Korsakoffee House is a candlelit Victorian café open 7pm–midnight with 'haunted' bathroom surprises and classical music. Deeply weird and wonderful. In?",
        place: "Rimsky-Korsakoffee House"
      },
      {
        id: "w4q3",
        type: "multiselect",
        text: "What evening vibes appeal most? (Select all that apply)",
        options: ["Craft cocktail bar", "Oregon craft beer / brewery", "Wine bar", "Live music", "Karaoke", "Quiet coffee or dessert spot", "Drag show / entertainment", "Dancing"]
      },
      {
        id: "w4q4",
        type: "scale",
        text: "How late do you like to stay out on vacation nights? (1 = early to bed, 5 = last call every night)",
        scale: { min: 1, max: 5, labels: ["Early bird", "Last call every night"] }
      },
      {
        id: "w4q5",
        type: "yesno",
        text: "Would you want a dedicated 'Portland bar crawl' night — hopping between a few different spots?"
      }
    ]
  },

  // ── WEEK 5 ── Getting Outside ─────────────────────────────
  {
    week: 5,
    theme: "Getting Outside",
    sendDate: "2026-06-29",
    intro: "Portland has insane access to nature. How much green do you want mixed in?",
    questions: [
      {
        id: "w5q1",
        type: "scale",
        text: "How much outdoor / nature time do you want in the trip? (1 = I'm here for the city, 5 = I want to be in trees every day)",
        scale: { min: 1, max: 5, labels: ["All city", "Nature every day"] }
      },
      {
        id: "w5q2",
        type: "yesno_place",
        text: "Forest Park is one of the largest urban forests in the US — miles of trails right inside the city. Short hike appeal?",
        place: "Forest Park"
      },
      {
        id: "w5q3",
        type: "yesno_place",
        text: "Portland Japanese Garden in Washington Park is consistently rated one of the most authentic outside Japan. Peaceful and stunning. Interested?",
        place: "Portland Japanese Garden"
      },
      {
        id: "w5q4",
        type: "yesno_place",
        text: "Washington Park also has the International Rose Test Garden — free, beautiful, peak bloom in July/August. Worth a stroll?",
        place: "International Rose Test Garden"
      },
      {
        id: "w5q5",
        type: "multiselect",
        text: "What outdoor activities sound appealing? (Select all that apply)",
        options: ["Easy scenic walks / paved paths", "Moderate hiking (some elevation)", "Waterfall hikes", "Kayaking or paddleboarding", "Biking", "Beach / tide pools", "Picnicking in a park", "None — keep it urban"]
      }
    ]
  },

  // ── WEEK 6 ── Culture & Unique Experiences ───────────────
  {
    week: 6,
    theme: "Culture & Unique Experiences",
    sendDate: "2026-07-06",
    intro: "Portland has some genuinely one-of-a-kind experiences. Let's see which ones land.",
    questions: [
      {
        id: "w6q1",
        type: "yesno_place",
        text: "Alberta Arts District — galleries, murals, street art, eclectic shops. Best on foot. Last Thursday outdoor art walk is July 30. Worth an evening?",
        place: "Alberta Arts District"
      },
      {
        id: "w6q2",
        type: "yesno_place",
        text: "Shanghai Tunnels tour — underground network allegedly used for 'shanghaiing' sailors in Old Town Portland. Creepy history, guided tour. In?",
        place: "Shanghai Tunnels"
      },
      {
        id: "w6q3",
        type: "yesno_place",
        text: "Portland Art Museum is the oldest art museum on the West Coast. Big collection, rotating exhibitions. Interested?",
        place: "Portland Art Museum"
      },
      {
        id: "w6q4",
        type: "yesno",
        text: "Would you want to hit a live performance — comedy, theater, burlesque, or a concert — if timing works out?"
      },
      {
        id: "w6q5",
        type: "yesno_place",
        text: "Pearl District First Thursday gallery walk — galleries open late, free, very artsy crowd. August 6 would line up perfectly.",
        place: "Pearl District Gallery Walk"
      }
    ]
  },

  // ── WEEK 7 ── Shopping & Markets ─────────────────────────
  {
    week: 7,
    theme: "Shopping & Markets",
    sendDate: "2026-07-13",
    intro: "Portland has great independent shopping — from vintage to local designers to weird one-of-a-kind shops.",
    questions: [
      {
        id: "w7q1",
        type: "scale",
        text: "How much shopping do you want built into the trip? (1 = zero shopping, 5 = I need a whole day for it)",
        scale: { min: 1, max: 5, labels: ["No shopping", "Full shopping day"] }
      },
      {
        id: "w7q2",
        type: "multiselect",
        text: "What kinds of shopping interest you? (Select all that apply)",
        options: ["Vintage & thrift", "Local designers / indie boutiques", "Art & handmade goods", "Books", "Records / music", "Home goods & design", "Souvenirs", "Outdoor gear (REI, etc)", "Not interested in shopping"]
      },
      {
        id: "w7q3",
        type: "yesno_place",
        text: "Mississippi Ave is a strip of independent shops, great restaurants, and vintage stores in a walkable neighborhood. Worth an afternoon?",
        place: "Mississippi Avenue"
      },
      {
        id: "w7q4",
        type: "yesno",
        text: "Would you want to set aside time specifically for vintage or thrift shopping?"
      }
    ]
  },

  // ── WEEK 8 ── Rest & Pace ─────────────────────────────────
  {
    week: 8,
    theme: "Rest & Pacing",
    sendDate: "2026-07-20",
    intro: "Every good trip needs some breathing room. Let's talk pace.",
    questions: [
      {
        id: "w8q1",
        type: "scale",
        text: "What's your ideal daily schedule? (1 = loose and spontaneous, 5 = packed itinerary from morning to night)",
        scale: { min: 1, max: 5, labels: ["Loose & spontaneous", "Every hour planned"] }
      },
      {
        id: "w8q2",
        type: "scale",
        text: "How important is having a low-key afternoon or morning built into at least one day?",
        scale: { min: 1, max: 5, labels: ["Not important", "Very important"] }
      },
      {
        id: "w8q3",
        type: "multiselect",
        text: "What does 'relaxing' look like for you on a trip? (Select all that apply)",
        options: ["Coffee shop with a book", "Walk with no destination", "Nap / chill at the house", "Spa or massage", "Sit in a park", "Movie / TV", "Nothing — I don't relax on vacation"]
      },
      {
        id: "w8q4",
        type: "yesno",
        text: "Would you want a totally unscheduled 'free morning' or 'free afternoon' built into the itinerary?"
      }
    ]
  },

  // ── WEEK 9 ── Day Trip Deep Dive ─────────────────────────
  {
    week: 9,
    theme: "Day Trip Deep Dive",
    sendDate: "2026-07-27",
    intro: "Based on your earlier answers, let's narrow down which day trip (if any) makes the final cut.",
    questions: [
      {
        id: "w9q1",
        type: "multiplechoice",
        text: "If we do ONE day trip outside Portland, which would you most want to do?",
        options: ["Multnomah Falls + Columbia River Gorge (30 min)", "Timberline Lodge on Mt. Hood — The Shining hotel! (1.5 hr)", "Astoria — Goonies + Victorian charm (2 hr)", "Oregon Coast / Cannon Beach (1.5–2 hr)", "Hood River + gorge breweries (1 hr)", "Willamette Valley wine country (45 min)", "No day trip — keep it in Portland"]
      },
      {
        id: "w9q2",
        type: "yesno",
        text: "Would you be open to a SECOND shorter day trip if timing works out?"
      },
      {
        id: "w9q3",
        type: "scale",
        text: "How early are you willing to start on a day trip day? (1 = 9am or later, 5 = I'll leave at 7am to beat crowds)",
        scale: { min: 1, max: 5, labels: ["Slow morning start", "Early riser"] }
      }
    ]
  },

  // ── WEEK 10 ── Final Food Votes ───────────────────────────
  {
    week: 10,
    theme: "Final Food Votes",
    sendDate: "2026-08-03",
    intro: "Almost there! A few final food decisions to lock in the best meals.",
    questions: [
      {
        id: "w10q1",
        type: "yesno",
        text: "Should we do a nicer 'celebration dinner' at a Portland restaurant that would require a reservation?"
      },
      {
        id: "w10q2",
        type: "yesno",
        text: "Would you want a dedicated brunch out at least one morning (vs. eating at the house)?"
      },
      {
        id: "w10q3",
        type: "yesno",
        text: "Are there any foods you can't eat or strongly dislike that I should know about when planning meals? (Free text below)"
      },
      {
        id: "w10q4",
        type: "text",
        text: "Any food restrictions, allergies, or strong dislikes? (Leave blank if none)"
      },
      {
        id: "w10q5",
        type: "multiplechoice",
        text: "What's your priority for most meals — speed/casual or experience/sit-down?",
        options: ["Speed — I'd rather spend time doing stuff", "Experience — meals are part of the trip", "Mix of both"]
      }
    ]
  },

  // ── WEEK 11 ── Last Calls & Wildcards ────────────────────
  {
    week: 11,
    theme: "Last Calls & Wildcards",
    sendDate: "2026-08-10",
    intro: "Final survey! Anything that didn't come up yet, and a few last wildcards.",
    questions: [
      {
        id: "w11q1",
        type: "scale",
        text: "Overall, how are you feeling about the trip? (1 = nervous/lots of unknowns, 5 = SO EXCITED, can't wait)",
        scale: { min: 1, max: 5, labels: ["Nervous", "Can't wait!"] }
      },
      {
        id: "w11q2",
        type: "yesno",
        text: "Is there anything you're hoping to do that you haven't seen mentioned yet? (Free text below)"
      },
      {
        id: "w11q3",
        type: "text",
        text: "Any wildcard requests, bucket list items, or things you're really hoping for?"
      },
      {
        id: "w11q4",
        type: "multiplechoice",
        text: "What would make this trip a 10 out of 10 for you?",
        options: ["Hitting the big landmarks", "Amazing food and drinks", "Spontaneous adventures", "Quality time together without rushing", "Seeing the weird and unexpected side of Portland", "Getting out into nature", "All of the above"]
      },
      {
        id: "w11q5",
        type: "text",
        text: "Anything else Sarah should know before she finalizes the itinerary?"
      }
    ]
  }

];
