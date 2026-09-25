/**
 * MAD-AAG MEETINGS DATA
 * Edit this file to update meeting info, schedules, photos, and awards.
 * Add a new meeting by copying the template comment at the bottom.
 */

window.MEETINGS = [

  /* ----- 2026 MEETING (UPCOMING) ----- */
  {
    year:        2026,
    title:       "MAD-AAG Annual Meeting '26",
    theme:       "Connect. Collaborate. Shape Our World.",
    status:      "upcoming",
    date:        "November 20, 2026",
    dateISO:     "2026-11-20",
    location:    "Harford Community College, Bel Air, MD",
    venue:       "401 Thomas Run Road, Bel Air, MD 21015",
    host:        "Harford Community College",
    cfpLink:     "",
    regLink:     "https://www.aag.org/events/middle-atlantic-regional-division-2026/",
    programLink: "",
    keynote:     "Morning keynote: Jen Chadwick-Moore. Afternoon keynote: William \"Bill\" Moseley.",
    description: "Registration is now open for the 2026 Middle Atlantic Division of the American Association of Geographers Annual Meeting. Join MAD-AAG on Friday, November 20, 2026, at Harford Community College in Bel Air, Maryland, for a one-day regional meeting bringing together students, faculty, educators, GIS professionals, and geography stakeholders across the Middle Atlantic region.",
    schedule: [
      { time: "8:00 AM",  event: "Registration" },
      { time: "9:00 AM",  event: "Opening Remarks & Keynote" },
      { time: "12:00 PM", event: "Lunch & Networking" },
      { time: "4:00 PM",  event: "GeoBowl" }
    ],
    photos: [
      { src: "", caption: "",    placeholder: false, tall: false },
      { src: "", caption: "",    placeholder: false, tall: false },
      { src: "", caption: "",    placeholder: false, tall: false },
      { src: "", caption: "",    placeholder: false, tall: false },
      { src: "", caption: "",    placeholder: false, tall: false },
      { src: "", caption: "",    placeholder: false, tall: false },
      { src: "", caption: "",    placeholder: false, tall: false }
    ],
    highlights: [],
    awards:     []
  },

  /* ----- 2025 MEETING ----- */
  {
    year:        2025,
    title:       "MAD-AAG Annual Meeting '25",
    theme:       "From Appalachia to the Atlantic",
    status:      "past",
    date:        "November 21, 2025",
    dateISO:     "2025-11-21",
    location:    "Anne Arundel Community College, Arnold, MD",
    venue:       "",
    host:        "",
    cfpLink:     "https://www.aag.org/events/from-appalachia-to-the-atlantic-mad-2025/",
    regLink:     "",
    programLink: "",
    keynote:     "",
    description: "Two keynotes were provided. Todd Heinrich (Towson University) discussed strategies to build future geographers through K-12 curriculum improvements. Gary Langham (AAG Executive Director) addressed challenges in geography, including budget cuts, research shifts, and opportunities for resilience and innovation.",
    schedule: [
      { time: "8:00 AM",  event: "Registration" },
      { time: "9:00 AM",  event: "Opening & Paper Session A" },
      { time: "10:45 AM", event: "Keynote I" },
      { time: "12:00 PM", event: "Lunch & Keynote II" },
      { time: "1:45 PM",  event: "Paper Sessions B" },
      { time: "3:30 PM",  event: "Geography Bowl" }
    ],
    photos: [
      { src: "2025_general_01.jpg",  caption: "Session presenters",   placeholder: false, tall: true  },
      { src: "2025_general_02.jpg",  caption: "Kent State reunion",    placeholder: false, tall: false },
      { src: "2025_general_03.jpg",  caption: "Meeting highlights",    placeholder: false, tall: false },
      { src: "2025_general_04.jpg",  caption: "Attendees",             placeholder: false, tall: false },
      { src: "2025_general_05.jpg",  caption: "Paper session A",       placeholder: false, tall: false },
      { src: "2025_bowl_01.jpg",     caption: "Geography Bowl",        placeholder: false, tall: false },
      { src: "2025_bowl_02.jpg",     caption: "Bowl competitors",      placeholder: false, tall: false },
      { src: "2025_bowl_03.jpg",     caption: "Bowl action",           placeholder: false, tall: false }
    ],
    highlights: [
      "Emphasis on multidisciplinary approaches to geography’s challenges.",
      "Calls for greater inclusion of community colleges in professional associations.",
      "Focus on environmental justice, public engagement, and innovative research methods.",
      "The Spoiler Team took first place in the Geography Bowl."
    ],
    awards: [
      { award: "AAG Council Award (Graduate) - Tied", recipient: "Maxwell Gundling", institution: "Salisbury University" },
      { award: "AAG Council Award (Graduate) - Tied", recipient: "Haijun Li",         institution: "University of Maryland, College Park" },
      { award: "MAGMA Award",                         recipient: "Maya Clark",         institution: "Towson University" }
    ]
  },

  /* ----- 2024 MEETING ----- */
  {
    year:        2024,
    title:       "MAD-AAG Annual Meeting '24",
    theme:       "Geography Matters",
    status:      "past",
    date:        "November 22, 2024",
    dateISO:     "2024-11-22",
    location:    "University of Maryland, Baltimore County (UMBC), Catonsville, MD",
    venue:       "",
    host:        "",
    cfpLink:     "https://www.aag.org/events/geography-matters-2024-middle-atlantic-division-aag-annual-meeting/",
    regLink:     "",
    programLink: "",
    keynote:     "",
    description: "Dr. Nicole Nguyen provided the keynote discussing the geographies of the U.S. security state and punitive psychiatry.",
    schedule:    [
      { time: "8:00 AM",  event: "Registration" },
      { time: "9:00 AM",  event: "Opening & Keynote" },
      { time: "10:30 AM", event: "Concurrent Sessions A & B" },
      { time: "12:15 PM", event: "Lunch & Business Meeting" },
      { time: "1:30 PM",  event: "Concurrent Sessions C & D" },
      { time: "3:30 PM",  event: "Geography Bowl" }
    ],
    photos: [
      { src: "2024_general_01.jpg", caption: "Meeting overview",   placeholder: false, tall: true  },
      { src: "2024_general_02.jpg", caption: "Presentations",      placeholder: false, tall: false },
      { src: "2024_general_03.jpg", caption: "Attendees",          placeholder: false, tall: false },
      { src: "2024_general_04.jpg", caption: "Discussions",        placeholder: false, tall: false },
      { src: "2024_bowl_01.jpg",    caption: "Geography Bowl",     placeholder: false, tall: false },
      { src: "2024_bowl_02.jpg",    caption: "Bowl competitors",   placeholder: false, tall: false },
      { src: "2024_bowl_03.jpg",    caption: "Bowl action",        placeholder: false, tall: false },
      { src: "2024_bowl_04.jpg",    caption: "Bowl team",          placeholder: false, tall: false }
    ],
    highlights: [
                "Geography is positioned as a multidisciplinary tool for addressing global challenges, fostering justice, and supporting sustainable development.",
                "The meeting emphasizes collaboration, community engagement, and the integration of diverse perspectives (gender, race, neurodiversity, urban/rural, global/local).",
                "Salisbury University took first place in the Geography Bowl."
    ],
    awards:     [
      {award: "AAG Council Award (Graduate)", recipient: "George Dickerson",  institution: "Towson University"},
      {award: "AAG Council Award (Undergraduate)", recipient: "Rebecca Lee",  institution: "Frostburg State University"}
    ]
  },

  /* ----- 2023 MEETINGS ----- */
  {
    year:        2023,
    title:       "MAD-AAG Annual Meetings '23",
    theme:       "Mapping and Empowerment",
    status:      "past",
    date:        "October 11-13 & November 3, 2023",
    dateISO:     "2023-11-03",
    location:    "George Washington University, DC & Salisbury University, Salisbury, MD",
    venue:       "",
    host:        "",
    cfpLink:     "",
    regLink:     "",
    programLink: "https://thepgs.org/2023-Annual-Meeting",
    keynote:     "",
    description: "In 2023, MAD hosted the joint meetings twice. The first was with the Race, Ethnicity, and Place at George Washington University and the second was with the Pennsylvania Geographic Society held at Salisbury University, bringing together geographers from across the region.",
    schedule:    [],
    photos: [
      { src: "2023_bowl_01.jpg", caption: "Geography Bowl",      placeholder: false, tall: true  },
      { src: "2023_bowl_02.jpg", caption: "Bowl teams",          placeholder: false, tall: false },
      { src: "2023_bowl_03.jpg", caption: "Competitors",         placeholder: false, tall: false },
      { src: "2023_bowl_04.jpg", caption: "Bowl action",         placeholder: false, tall: false },
      { src: "2023_bowl_05.jpg", caption: "Bowl presentations",  placeholder: false, tall: false },
      { src: "2023_bowl_06.jpg", caption: "Bowl highlights",     placeholder: false, tall: false }
    ],
    highlights: ["In REP-MAD 2023, keynote speakers were Dayna Bowen Matthew and Mark Lopez.",
                 "In PGS-MAD 2023, a career workshop and Geography Bowl event were held."
],
    awards:     []
  },

  /* ----- 2022 MEETING ----- */
  {
    year:        2022,
    title:       "MAD-AAG Annual Meeting '22",
    theme:       "Re-Imagining the Post: Resilience, Recovery, Reinvention",
    status:      "past",
    date:        "October 21-22, 2022",
    dateISO:     "2022-10-21",
    location:    "Maryland Historical Trust, Crownsville, MD",
    venue:       "",
    host:        "",
    cfpLink:     "https://www.aag.org/events/mad-2022-re-imagining-the-post-resilience-recovery-reinvention/",
    regLink:     "",
    programLink: "",
    keynote:     "",
    description: "Post-pandemic geography took center stage as MAD members explored themes of urban resilience, community recovery, and reinventing geographic practice in a changed world.",
    schedule:    [],
    photos:      [],
    highlights:  [],
    awards:      [
      {award: "AAG Council Award (Graduate) - Tied", recipient: "Xueyuan Eric Gao",  institution: "University of Maryland, College Park"},
      {award: "AAG Council Award (Graduate) - Tied", recipient: "Lauren Gerlowski",  institution: "University of Wisconsin, Madison"}
    ]
  },

  /* ----- 2021 MEETING ----- */
  {
    year:        2021,
    title:       "MAD-AAG Annual Meeting '21",
    theme:       "Justice and the City in an Age of Social Division",
    status:      "past",
    date:        "October 20-23, 2021",
    dateISO:     "2021-10-20",
    location:    "Hotel Indigo & Maryland Cultural and Historical Center, Baltimore, MD",
    venue:       "",
    host:        "",
    cfpLink:     "",
    regLink:     "",
    programLink: "",
    keynote:     "",
    description: "There were 32 paper and panel sessions of hybrid in-person and virtual presentations by mixed groups of faculty, professionals, and students.",
    schedule:    [],
    photos:      [],
    highlights:  [],
    awards:      []
  },

  /* ----- 2019 MEETING ----- */
  {
    year:        2019,
    title:       "MAD-AAG Annual Meeting '19",
    theme:       "",
    status:      "past",
    date:        "2019",
    dateISO:     "2019-01-01",
    location:    "Mid-Atlantic Region",
    venue:       "",
    host:        "",
    cfpLink:     "",
    regLink:     "",
    programLink: "",
    keynote:     "",
    description: "The 2019 annual meeting of the Middle Atlantic Division brought together geographers for a day of paper sessions, networking, and the annual Geography Bowl competition.",
    schedule:    [],
    photos: [
      { src: "2019_general_01.jpg", caption: "Meeting session",    placeholder: false, tall: true  },
      { src: "2019_general_02.jpg", caption: "Presenters",         placeholder: false, tall: false },
      { src: "2019_general_03.jpg", caption: "Attendees",          placeholder: false, tall: false },
      { src: "2019_general_04.jpg", caption: "Group discussion",   placeholder: false, tall: false },
      { src: "2019_general_05.jpg", caption: "Paper session",      placeholder: false, tall: false },
      { src: "2019_general_06.jpg", caption: "Networking",         placeholder: false, tall: false },
      { src: "2019_general_07.jpg", caption: "Presentations",      placeholder: false, tall: false },
      { src: "2019_general_08.jpg", caption: "Meeting highlights", placeholder: false, tall: false }
    ],
    highlights: [],
    awards:     []
  },

  /* ----- 2016 MEETING ----- */
  {
    year:        2016,
    title:       "MAD-AAG Annual Meeting '16",
    theme:       "",
    status:      "past",
    date:        "2016",
    dateISO:     "2016-01-01",
    location:    "Mid-Atlantic Region",
    venue:       "",
    host:        "",
    cfpLink:     "",
    regLink:     "",
    programLink: "",
    keynote:     "",
    description: "The 2016 annual meeting featured the Geography Bowl competition among undergraduate and graduate students from across the region.",
    schedule:    [],
    photos: [
      { src: "2016_bowl_01.jpg", caption: "Geography Bowl 2016", placeholder: false, tall: true  },
      { src: "2016_bowl_02.jpg", caption: "Bowl competitors",    placeholder: false, tall: false },
      { src: "2016_bowl_03.jpg", caption: "Bowl action",         placeholder: false, tall: false },
      { src: "2016_bowl_04.jpg", caption: "Bowl participants",   placeholder: false, tall: false }
    ],
    highlights: [],
    awards:     []
  }

  /*
   * TEMPLATE - copy this block and paste above to add a new meeting
   *
   * {
   *   year:        2027,
   *   title:       "MAD-AAG Annual Meeting '27",
   *   theme:       "Your Theme Here",
   *   status:      "upcoming",
   *   date:        "Fall 2027 - Date TBA",
   *   dateISO:     "",
   *   location:    "TBA",
   *   cfpLink:     "",
   *   regLink:     "",
   *   programLink: "",
   *   keynote:     "",
   *   description: "Description of the meeting.",
   *   schedule: [
   *     { time: "8:00 AM", event: "Registration" },
   *     { time: "9:00 AM", event: "Keynote" }
   *   ],
   *   photos: [
   *     { src: "2027_photo01.jpg", caption: "Caption", placeholder: false, tall: true }
   *   ],
   *   highlights: [],
   *   awards: []
   * },
   */

]; /* END window.MEETINGS */
