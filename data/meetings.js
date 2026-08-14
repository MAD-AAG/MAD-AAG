/**
 * ============================================================
 *  MAD-AAG — MEETINGS DATA
 *  ✏️  Add a new meeting by copying the template at the bottom
 *      and filling in the details. The most recent meeting
 *      (highest year) is automatically shown as "next/current."
 * ============================================================
 */

window.MEETINGS = [

  /* ══════════════════════════════════════════════════════════
     2026 MEETING  ← Update this block each year
  ══════════════════════════════════════════════════════════ */
  {
    year:     2026,
    title:    "MAD-AAG Annual Meeting '26",
    theme:    "Geography at the Crossroads: People, Place, Policy",
    status:   "upcoming",
    date:     "November 20, 2026",
    dateISO:  "2026-11-20",
    location: "Harford Community College, Bel Air, MD",
    venue:    "",
    host:     "",
    cfpLink:  "",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `The Middle Atlantic Division Annual Meeting brings together
      geographers from across Maryland, Northern Virginia, and Washington, DC
      for a full day of paper sessions, keynote lectures, and collegial exchange.
      We welcome contributions from all geographic subdisciplines and career
      stages, including students from high school to graduate level.`,
    schedule: [
      { time: "8:00 AM",  event: "Registration" },
      { time: "9:00 AM",  event: "Opening Remarks & Keynote" },
      { time: "12:00 PM", event: "Lunch & Networking" },
      { time: "4:00 PM",  event: "GeoBowl" }
    ],
    photos: [],
    highlights: [],
    awards: []
  },

  /* ══════════════════════════════════════════════════════════
     2025 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2025,
    title:    "MAD-AAG Annual Meeting '25",
    theme:    "From Appalachia to the Atlantic",
    status:   "past",
    date:     "November 21, 2025",
    dateISO:  "2025-11-21",
    location: "Anne Arundel Community College, Arnold, MD",
    venue:    "",
    host:     "",
    cfpLink:  "https://www.aag.org/events/from-appalachia-to-the-atlantic-mad-2025/",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `MAD 2025 explored the rich geographic diversity stretching from
      the Appalachian highlands to the Atlantic coastal plain — examining how
      landscape, culture, economy, and policy intersect across this storied corridor.`,
    schedule: [
      { time: "8:00 AM",  event: "Registration" },
      { time: "9:00 AM",  event: "Opening & Paper Session A" },
      { time: "10:45 AM", event: "Keynote I" },
      { time: "12:00 PM", event: "Lunch & Keynote II" },
      { time: "1:45 PM",  event: "Paper Sessions B" },
      { time: "3:30 PM",  event: "Geography Bowl" }
    ],
    photos: [
      { src: "2025_general_01.jpg", caption: "Session presenters",    placeholder: false, tall: true  },
      { src: "2025_general_02.jpg", caption: "Kent State reunion",     placeholder: false, tall: false },
      { src: "2025_general_03.jpg", caption: "Meeting highlights",     placeholder: false, tall: false },
      { src: "2025_general_04.jpg", caption: "Attendees",              placeholder: false, tall: false },
      { src: "2025_general_05.jpg", caption: "Paper session A",        placeholder: false, tall: false },
      { src: "2025_bowl_01.jpg",    caption: "Geography Bowl",         placeholder: false, tall: false },
      { src: "2025_bowl_02.jpg",    caption: "Bowl competitors",       placeholder: false, tall: false },
      { src: "2025_bowl_03.jpg",    caption: "Bowl action",            placeholder: false, tall: false }
    ],
    highlights: [
      "Record attendance from across the tri-state region.",
      "Keynotes exploring how to build the next generation of geographers.",
      "Spoiler team won the regional geography bowl."
    ],
    awards: [
      { award: "AAG Council Award (Graduate) — Tied", recipient: "Maxwell Gundling",  institution: "Salisbury University" },
      { award: "AAG Council Award (Graduate) — Tied", recipient: "Haijun Li",          institution: "University of Maryland, College Park" },
      { award: "MAGMA Award",                          recipient: "Maya Clark",          institution: "Towson University" }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     2024 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2024,
    title:    "MAD-AAG Annual Meeting '24",
    theme:    "Geography Matters",
    status:   "past",
    date:     "November 22, 2024",
    dateISO:  "2024-11-22",
    location: "University of Maryland, Baltimore County (UMBC), Catonsville, MD",
    venue:    "",
    host:     "",
    cfpLink:  "https://www.aag.org/events/geography-matters-2024-middle-atlantic-division-aag-annual-meeting/",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `The 2024 meeting centered on geography's relevance and impact
      across policy, education, and community — affirming that where we are
      shapes who we are and what we can become.`,
    schedule: [],
    photos: [
      { src: "2024_general_01.jpg", caption: "Meeting overview",       placeholder: false, tall: true  },
      { src: "2024_general_02.jpg", caption: "Presentations",          placeholder: false, tall: false },
      { src: "2024_general_03.jpg", caption: "Attendees",              placeholder: false, tall: false },
      { src: "2024_general_04.jpg", caption: "Discussions",            placeholder: false, tall: false },
      { src: "2024_bowl_01.jpg",    caption: "Geography Bowl",         placeholder: false, tall: false },
      { src: "2024_bowl_02.jpg",    caption: "Bowl competitors",       placeholder: false, tall: false },
      { src: "2024_bowl_03.jpg",    caption: "Bowl action",            placeholder: false, tall: false },
      { src: "2024_bowl_04.jpg",    caption: "Bowl team",              placeholder: false, tall: false }
    ],
    highlights: [],
    awards: []
  },

  /* ══════════════════════════════════════════════════════════
     2023 MEETING (with Pennsylvania Geographic Society)
  ══════════════════════════════════════════════════════════ */
  {
    year:     2023,
    title:    "MAD-AAG Annual Meeting '23 — Joint with Pennsylvania Geographic Society",
    theme:    "",
    status:   "past",
    date:     "November 3, 2023",
    dateISO:  "2023-11-03",
    location: "Salisbury University, Salisbury, MD",
    venue:    "",
    host:     "",
    cfpLink:  "",
    regLink:  "",
    programLink: "https://thepgs.org/2023-Annual-Meeting",
    keynote:  "",
    description: `A joint meeting with the Pennsylvania Geographic Society held
      at Salisbury University, bringing together geographers from across the region.`,
    schedule: [],
    photos: [
      { src: "2023_bowl_01.jpg", caption: "Geography Bowl",          placeholder: false, tall: true  },
      { src: "2023_bowl_02.jpg", caption: "Bowl teams",              placeholder: false, tall: false },
      { src: "2023_bowl_03.jpg", caption: "Competitors",             placeholder: false, tall: false },
      { src: "2023_bowl_04.jpg", caption: "Bowl action",             placeholder: false, tall: false },
      { src: "2023_bowl_05.jpg", caption: "Bowl presentations",      placeholder: false, tall: false },
      { src: "2023_bowl_06.jpg", caption: "Bowl highlights",         placeholder: false, tall: false }
    ],
    highlights: [],
    awards: []
  },

  /* ══════════════════════════════════════════════════════════
     2022 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2022,
    title:    "MAD-AAG Annual Meeting '22",
    theme:    "Re-Imagining the Post: Resilience, Recovery, Reinvention",
    status:   "past",
    date:     "October 21–22, 2022",
    dateISO:  "2022-10-21",
    location: "Maryland Historical Trust, Crownsville, MD",
    venue:    "",
    host:     "",
    cfpLink:  "https://www.aag.org/events/mad-2022-re-imagining-the-post-resilience-recovery-reinvention/",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `Post-pandemic geography took center stage as MAD members explored
      themes of urban resilience, community recovery, and reinventing geographic
      practice in a changed world.`,
    schedule: [],
    photos: [],
    highlights: [],
    awards: []
  },

  /* ══════════════════════════════════════════════════════════
     2019 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2019,
    title:    "MAD-AAG Annual Meeting '19",
    theme:    "",
    status:   "past",
    date:     "2019",
    dateISO:  "2019-01-01",
    location: "Mid-Atlantic Region",
    venue:    "",
    host:     "",
    cfpLink:  "",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `The 2019 annual meeting of the Middle Atlantic Division brought
      together geographers for a day of paper sessions, networking, and the
      annual Geography Bowl competition.`,
    schedule: [],
    photos: [
      { src: "2019_general_01.jpg", caption: "Meeting session",        placeholder: false, tall: true  },
      { src: "2019_general_02.jpg", caption: "Presenters",             placeholder: false, tall: false },
      { src: "2019_general_03.jpg", caption: "Attendees",              placeholder: false, tall: false },
      { src: "2019_general_04.jpg", caption: "Group discussion",       placeholder: false, tall: false },
      { src: "2019_general_05.jpg", caption: "Paper session",          placeholder: false, tall: false },
      { src: "2019_general_06.jpg", caption: "Networking",             placeholder: false, tall: false },
      { src: "2019_general_07.jpg", caption: "Presentations",          placeholder: false, tall: false },
      { src: "2019_general_08.jpg", caption: "Meeting highlights",     placeholder: false, tall: false }
    ],
    highlights: [],
    awards: []
  },

  /* ══════════════════════════════════════════════════════════
     2016 MEETING (Geography Bowl photos)
  ══════════════════════════════════════════════════════════ */
  {
    year:     2016,
    title:    "MAD-AAG Annual Meeting '16",
    theme:    "",
    status:   "past",
    date:     "2016",
    dateISO:  "2016-01-01",
    location: "Mid-Atlantic Region",
    venue:    "",
    host:     "",
    cfpLink:  "",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `The 2016 annual meeting featured the Geography Bowl competition
      among undergraduate and graduate students from across the region.`,
    schedule: [],
    photos: [
      { src: "2016_bowl_01.jpg", caption: "Geography Bowl 2016",    placeholder: false, tall: true  },
      { src: "2016_bowl_02.jpg", caption: "Bowl competitors",       placeholder: false, tall: false },
      { src: "2016_bowl_03.jpg", caption: "Bowl action",            placeholder: false, tall: false },
      { src: "2016_bowl_04.jpg", caption: "Bowl participants",      placeholder: false, tall: false }
    ],
    highlights: [],
    awards: []
  }


  /* ══════════════════════════════════════════════════════════
     AAG 2026 GEOGRAPHY BOWL (AAG Annual Meeting)
     Note: This is the national AAG GeoBowl, separate from
     the MAD annual meeting.
  ══════════════════════════════════════════════════════════ */
  {
    year:     "aag2026",
    title:    "AAG 2026 Geography Bowl",
    theme:    "MAD Team at the AAG Annual Meeting",
    status:   "past",
    date:     "2026",
    dateISO:  "2026-01-01",
    location: "AAG Annual Meeting",
    venue:    "", host: "", cfpLink: "", regLink: "", programLink: "", keynote: "",
    description: `MAD students represented the region at the national AAG Geography Bowl competition.`,
    schedule: [],
    photos: [
      { src: "aag2026_bowl_01.jpg", caption: "AAG GeoBowl 2026",  placeholder: false, tall: true  },
      { src: "aag2026_bowl_02.jpg", caption: "MAD team",          placeholder: false, tall: false },
      { src: "aag2026_bowl_03.jpg", caption: "Bowl action",        placeholder: false, tall: false },
      { src: "aag2026_bowl_04.jpg", caption: "Competitors",        placeholder: false, tall: false },
      { src: "aag2026_bowl_05.jpg", caption: "Competition",        placeholder: false, tall: false },
      { src: "aag2026_bowl_06.jpg", caption: "Bowl highlights",    placeholder: false, tall: false },
      { src: "aag2026_bowl_07.jpg", caption: "Team celebration",   placeholder: false, tall: false }
    ],
    highlights: [], awards: []
  },

  /* ══════════════════════════════════════════════════════════
     AAG 2025 GEOGRAPHY BOWL (AAG Annual Meeting)
  ══════════════════════════════════════════════════════════ */
  {
    year:     "aag2025",
    title:    "AAG 2025 Geography Bowl",
    theme:    "MAD Team at the AAG Annual Meeting",
    status:   "past",
    date:     "2025",
    dateISO:  "2025-01-01",
    location: "AAG Annual Meeting",
    venue:    "", host: "", cfpLink: "", regLink: "", programLink: "", keynote: "",
    description: `MAD students represented the region at the national AAG Geography Bowl competition.`,
    schedule: [],
    photos: [
      { src: "aag2025_bowl_01.jpg", caption: "AAG GeoBowl 2025",  placeholder: false, tall: true  },
      { src: "aag2025_bowl_02.jpg", caption: "MAD team",          placeholder: false, tall: false },
      { src: "aag2025_bowl_03.jpg", caption: "Bowl action",        placeholder: false, tall: false },
      { src: "aag2025_bowl_04.jpg", caption: "Competitors",        placeholder: false, tall: false },
      { src: "aag2025_bowl_05.jpg", caption: "Competition",        placeholder: false, tall: false },
      { src: "aag2025_bowl_06.jpg", caption: "Bowl highlights",    placeholder: false, tall: false }
    ],
    highlights: [], awards: []
  },

  /* ══════════════════════════════════════════════════════════
     📋  TEMPLATE — Copy & paste above to add a new meeting
  ══════════════════════════════════════════════════════════
  {
    year:     2027,
    title:    "MAD-AAG Annual Meeting '27",
    theme:    "Your Theme Here",
    status:   "upcoming",
    date:     "Fall 2027 — Date TBA",
    dateISO:  "",
    location: "TBA",
    venue:    "",
    host:     "",
    cfpLink:  "",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `Description of the meeting theme and goals.`,
    schedule: [
      { time: "8:00 AM", event: "Registration" },
      { time: "9:00 AM", event: "Keynote" }
    ],
    photos: [
      { src: "2027_general_01.jpg", caption: "Caption", placeholder: false, tall: true },
      { src: "",                     caption: "Caption", placeholder: true,  tall: false }
    ],
    highlights: ["Highlight 1", "Highlight 2"],
    awards: [
      { award: "Best Student Paper", recipient: "Name", institution: "University" }
    ]
  },
  ══════════════════════════════════════════════════════════ */

]; /* END window.MEETINGS */
