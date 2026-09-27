/* =====================================================================
   MAKERSHUB — RESOURCE LIST
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to add, change or remove
   a space. You do not need to touch index.html.

   HOW TO ADD A NEW SPACE
   1. Copy the TEMPLATE block at the very bottom of this file.
   2. Paste it right before the line that says  "// ▲ end of list".
   3. Fill in the fields between the quotes. Leave "" if unknown —
      the site will show "Not yet confirmed" automatically.
   4. Make sure every block ends with  },  (curly brace + comma).
   5. Save, then upload to GitHub (see README.md).

   ALLOWED VALUES
   type:     "Makerspace" | "Machine shop" | "3D printing" |
             "Electronics" | "Woodshop & fabrication" |
             "Fabrication service" | "CAD & computing" |
             "Innovation support" | "Off-campus"
   access:   "Open to all" | "Department / program only" |
             "Service (they make it for you)"
   campus:   "Downtown" | "Macdonald" | "Off-campus"
   ===================================================================== */

const SITE = {
  // Paste your Google Form link here (see README.md, step 5)
  suggestFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeIhnqXfcTx2LbCse9M5woouUa19Pme0x5DrmDCAZ20jq7F9g/viewform",
  contactEmail: "",            // e.g. "tinkers.mame@gmail.com" — leave "" to hide
  lastUpdated: "September 2026",
};

const RESOURCES = [
  {
    name: "The Factory — ECSE Makerspace",
    type: "Electronics",
    access: "Department / program only",
    campus: "Downtown",
    building: "Trottier Building",
    room: "0080",
    summary:
      "Student-run hardware design lab for Electrical, Computer and Software Engineering students. Members get lab access, equipment, components, workshops and help from lab managers.",
    equipment: ["Electronics workbenches & tools", "Lab components (free to members)", "Equipment rentals", "Workshops"],
    whoCanUse: "Electrical, Computer & Software Engineering students (membership).",
    cost: "Free membership.",
    howToAccess: "Sign up as a member on their website, then complete lab safety & equipment training. Open during posted office hours.",
    hours: "See the Office Hours page on their website.",
    contact: "thefactory@mcgilleus.ca",
    website: "https://factory.mcgilleus.ca/",
    tags: ["soldering", "PCB", "Arduino", "oscilloscope", "ECSE", "EUS"],
  },
  {
    name: "Physics Makerspace — The Gearbox",
    type: "Makerspace",
    access: "Department / program only",
    campus: "Downtown",
    building: "Wong Building",
    room: "080 (basement)",
    summary:
      "The Physics Department's makerspace and 3D print lab — an open space to share ideas and build. Home to PHYS 258 and PHYS 339 course projects.",
    equipment: ["3D printers", "Project workspace"],
    whoCanUse: "Physics students and course users (PHYS 258 / 339). Contact the team to ask about other access.",
    cost: "",
    howToAccess: "Complete the training listed on their website. After every print you must fill out their print log form.",
    hours: "",
    contact: "Thomas Brunner (advisor) — thomas.brunner@mcgill.ca · Brandon Ruffolo (technician) — brandon.ruffolo@mcgill.ca",
    website: "https://makerspace.physics.mcgill.ca/",
    tags: ["3D print", "physics", "PHYS 339", "PHYS 258"],
  },
  {
    name: "Schulich Library 3D Printing",
    type: "3D printing",
    access: "Open to all",
    campus: "Downtown",
    building: "Macdonald-Stewart Library Building (Schulich Library)",
    room: "Pick up at the Service Desk",
    summary:
      "Submit a 3D model and library staff print it for you. Open to all current McGill students, staff and faculty.",
    equipment: ["1× UltiMaker S5", "2× UltiMaker 3", "PLA filament (various colours, not guaranteed)"],
    whoCanUse: "All current McGill students, staff and faculty.",
    cost: "",
    howToAccess:
      "1) Read the regulations and register. 2) Prepare an .stl file under 15 hours of print time (max 20 h per week). 3) Submit the 3D Printing Job Request Form. 4) Pick up at the Schulich Library Service Desk. Turnaround is not guaranteed — don't rely on it for last-minute deadlines. No commercial use.",
    hours: "Library hours.",
    contact: "3dprint.schulich@mcgill.ca (large jobs: graeme.langdon@mcgill.ca)",
    website: "https://www.mcgill.ca/libraries/locations/schulich/3d-printing",
    tags: ["3D print", "library", "PLA", "stl", "Ultimaker"],
  },
  {
    name: "Library Innovation Commons",
    type: "3D printing",
    access: "Open to all",
    campus: "Downtown",
    building: "Redpath Library Building, main floor",
    room: "Innovation Commons Room B (near the Writing Centre)",
    summary:
      "Library tech space with a 3D printing station, VR room and a one-touch video recording studio, staffed by student assistants. The library also runs free \"Getting started with 3D printing\" workshops.",
    equipment: ["Ultimaker 3D printers (4 as of 2022)", "VR headsets & controllers", "One Button Studio (camera, mic, lighting)"],
    whoCanUse: "McGill students and researchers.",
    cost: "",
    howToAccess: "Book ahead — bookings or permission may be required for each service. Check the Library's Services page for current availability.",
    hours: "Library hours.",
    contact: "McGill Library Services page",
    website: "https://blogs.library.mcgill.ca/hsslibrary/mcgill-librarys-innovation-commons/",
    tags: ["3D print", "VR", "video", "library", "Redpath", "workshop"],
  },
  {
    name: "Machine Tool Lab (Faculty of Engineering)",
    type: "Machine shop",
    access: "Department / program only",
    campus: "Downtown",
    building: "Macdonald Engineering Building",
    room: "052, 056, 057, 058",
    summary:
      "Hands-on machining lab used for MECH 360, capstone projects and student design teams. You run the machines yourself once trained.",
    equipment: ["Lathes", "Milling machines", "CNC machining", "Drill presses", "Band saws", "Metrology & hand tools", "Fume hood (approval required)"],
    whoCanUse: "Mechanical Engineering students, capstone teams, student design teams and researchers. Design team members get priority for training.",
    cost: "Training is billed to a FOAPAL (your team's or supervisor's fund).",
    howToAccess:
      "Take the training modules in order — TM #1: metrology, hand tools, band saws, drill presses · TM #2: lathe · TM #3: milling. Fill out the training form, get fund-controller approval, and email it to the workshop manager. Everyone signs the Faculty Workshop users' rules. Holders of a recognized DEP/DEC in machining can be evaluated instead.",
    hours: "",
    contact: "mgr-workshop.engineering@mcgill.ca · 514-398-6322 · 514-398-4375",
    website: "https://www.mcgill.ca/engineering/faculty-staff/services-resources/machine-shop-and-services/general-information-0/machine-shop-access-policy",
    tags: ["lathe", "mill", "CNC", "MECH 360", "design team", "machining", "training"],
  },
  {
    name: "Students' General Working Area",
    type: "Makerspace",
    access: "Open to all",
    campus: "Downtown",
    building: "Macdonald Engineering & Macdonald-Harrington",
    room: "MD 051 and MH B15",
    summary:
      "Supervised workspace with benches and hand tools for experimenting and team projects — a good first stop if you just need somewhere to build.",
    equipment: ["Workbenches", "Hand tools", "Collaborative space"],
    whoCanUse: "All students.",
    cost: "",
    howToAccess: "Sign the Faculty Workshop users' rules. No machine use without training on that machine.",
    hours: "Weekdays, 9 am – 5 pm.",
    contact: "mgr-workshop.engineering@mcgill.ca",
    website: "https://www.mcgill.ca/engineering/faculty-staff/services-resources/faculty-workshop-services/locations",
    tags: ["hand tools", "workbench", "assembly"],
  },
  {
    name: "Faculty Workshop Services (work orders)",
    type: "Fabrication service",
    access: "Service (they make it for you)",
    campus: "Downtown",
    building: "Macdonald Engineering Building",
    room: "382",
    summary:
      "Professional technicians who machine, weld and fabricate parts for you. Capstone projects (e.g. MECH 463) are free; design teams, researchers and others are billed.",
    equipment: ["CNC mill, lathe & router", "Welding: spot, MIG, TIG, stick, oxy-acetylene", "Waterjet", "Laser cutting", "Rapid prototyping", "Coordinate Measuring Machine (CMM)", "Sheet metal", "Painting & carbon fibre booths"],
    whoCanUse: "Undergrads (capstone), design teams, researchers, McGill community; external clients if time permits.",
    cost: "Free for capstone (MECH 463). Otherwise charged to a FOAPAL.",
    howToAccess: "Fill out a Work Order with your FOAPAL, drawings and professor / fund-controller signatures, then bring it with your drawings to the workshop before work starts. They also offer design consultation.",
    hours: "",
    contact: "See the Faculty Workshop Services team page",
    website: "https://www.mcgill.ca/engineering/faculty-staff/services-resources/faculty-workshop-services/information-and-services/workshop-services",
    tags: ["welding", "waterjet", "laser", "CNC", "CMM", "carbon fibre", "MECH 463", "capstone"],
  },
  {
    name: "Wong Machine Shop",
    type: "Machine shop",
    access: "Department / program only",
    campus: "Downtown",
    building: "Wong Building",
    room: "3260",
    summary:
      "Machine shop serving Materials and Chemical Engineering for teaching, research and student projects, with fabrication, design and repair services.",
    equipment: ["Lathes", "Milling machines", "Drilling machines", "Grinders", "Welding area"],
    whoCanUse: "Faculty, staff and students — mainly Materials and Chemical Engineering.",
    cost: "",
    howToAccess: "Contact the shop.",
    hours: "",
    contact: "514-398-4490",
    website: "https://www.mcgill.ca/engineering/faculty-staff/services-resources/faculty-workshop-services/locations",
    tags: ["lathe", "mill", "welding", "materials", "chemical"],
  },
  {
    name: "Architecture Workshop",
    type: "Woodshop & fabrication",
    access: "Department / program only",
    campus: "Downtown",
    building: "Macdonald-Harrington Building",
    room: "G25 and G14",
    summary:
      "The School of Architecture's 250 m² workshop for studio model-making, with digital fabrication plus wood, metal, plaster, glass and plastics stations and an on-site supply store.",
    equipment: ["60 W Universal laser cutter (18\" × 31\" sheets)", "Stratasys FDM 3D printer (10\" cube, ABS / wax)", "Woodworking tools", "Metal, plaster, glass & plastics stations", "Casting & mould-making", "Sandblasting & spray finishing"],
    whoCanUse: "Students in Architecture's professional and post-professional programs.",
    cost: "Materials sold at the supply store (student purchase card).",
    howToAccess: "Through the School of Architecture.",
    hours: "",
    contact: "514-398-6729 · School: 514-398-6700",
    website: "https://www.mcgill.ca/architecture/about/facilities/workshop-0",
    tags: ["laser cutter", "wood", "model making", "casting", "acrylic", "MDF"],
  },
  {
    name: "Mechanical Engineering Design Studio",
    type: "CAD & computing",
    access: "Department / program only",
    campus: "Downtown",
    building: "Macdonald Engineering Building",
    room: "MD 50",
    summary:
      "Computer lab for CAD and design work, with 24/7 card access for Mechanical Engineering students.",
    equipment: ["49 Dell Precision workstations (Windows 11)", "Engineering software"],
    whoCanUse: "Mechanical Engineering students only.",
    cost: "Free.",
    howToAccess: "24-hour access with your McGill ID card.",
    hours: "24/7 (card access).",
    contact: "Engineering Microcomputing Facilities",
    website: "https://www.mcgill.ca/emf/labs/departmental-labs/design",
    tags: ["CAD", "SolidWorks", "computers", "24/7"],
  },
  {
    name: "Chemistry Electronics Shop & Shop Technician",
    type: "Electronics",
    access: "Department / program only",
    campus: "Downtown",
    building: "Otto Maass Chemistry Building",
    room: "42 (electronics) · 41–46 (shop technician)",
    summary:
      "Support shops for the Department of Chemistry: an electronics shop and a shop technician, next to Chem Stores (supplies).",
    equipment: ["Electronics repair & fabrication support"],
    whoCanUse: "Chemistry department research groups.",
    cost: "",
    howToAccess: "Contact the shop.",
    hours: "Weekdays (Chem Stores: 8 am – 4 pm).",
    contact: "Electronics: 514-398-6218 · Technician: 514-398-7735",
    website: "https://www.mcgill.ca/chemistry/researchthemes/stores-and-shops",
    tags: ["electronics", "chemistry", "research"],
  },
  {
    name: "Physics Machine Shop",
    type: "Machine shop",
    access: "Department / program only",
    campus: "Downtown",
    building: "",
    room: "",
    summary: "The Physics Department's machine shop. Details still being collected — see their website.",
    equipment: [],
    whoCanUse: "",
    cost: "",
    howToAccess: "",
    hours: "",
    contact: "",
    website: "https://www.physics.mcgill.ca/machineshop/",
    tags: ["physics", "machining"],
  },
  {
    name: "McGill Engine",
    type: "Innovation support",
    access: "Open to all",
    campus: "Downtown",
    building: "Frank Dawson Adams Building",
    room: "Room 5",
    summary:
      "McGill's innovation and entrepreneurship centre. Offers bookable rooms, advising, funding programs for student inventors, and runs its own MakersHub program.",
    equipment: ["Bookable rooms", "Advising & coaching", "Funding programs"],
    whoCanUse: "McGill students and researchers.",
    cost: "",
    howToAccess: "See their Resources page or email them.",
    hours: "",
    contact: "engine@mcgill.ca",
    website: "https://www.mcgill.ca/engine/resources",
    tags: ["startup", "entrepreneurship", "funding", "prototype"],
  },
  {
    name: "échoFab (Communautique)",
    type: "Off-campus",
    access: "Open to all",
    campus: "Off-campus",
    building: "Quartier de l'innovation, Montréal",
    room: "",
    summary:
      "Community fab lab run by the non-profit Communautique — useful when on-campus spaces are closed or you need equipment McGill doesn't have.",
    equipment: ["3D printing", "CNC machining", "Woodworking"],
    whoCanUse: "The public.",
    cost: "",
    howToAccess: "Contact them for membership, pricing and hours.",
    hours: "",
    contact: "info@echofab.quebec",
    website: "https://www.echofab.quebec/en/",
    tags: ["fab lab", "public", "Montreal", "community"],
  },

  {
    name: "The Forge — MAME Student Makerspace",
    type: "Makerspace",
    access: "Department / program only",
    campus: "Downtown",
    building: "Macdonald Engineering Building",
    room: "MD 051",
    summary:
      "Student makerspace for engineering students with hand and power tools, run by The Tinkers (MAME Manufacturing Committee). Also hosts workshops open to all engineering students.",
    equipment: ["Hand tools", "Power tools", "Workshops for engineering students"],
    whoCanUse: "All Mechanical Engineering students, whenever a technician is present. Workshops are open to all engineering students.",
    cost: "",
    howToAccess: "Sign up for access, then use the space while a technician is present. Follow @mame_tinkers on Instagram for workshop announcements.",
    hours: "When a technician is present.",
    contact: "mame.manufacturing@mcgilleus.ca · Instagram: @mame_tinkers",
    website: "https://www.instagram.com/mame_tinkers/",
    tags: ["MAME", "Tinkers", "power tools", "hand tools", "workshop", "woodworking", "training", "mechanical"],
  },
  {
    name: "The Fishbowl — 3D Printing Service",
    type: "3D printing",
    access: "Service (they make it for you)",
    campus: "Downtown",
    building: "McConnell Engineering Building",
    room: "220",
    summary:
      "3D printing service for capstone projects and engineering students. Your first 200 g of printing are free.",
    equipment: ["3D printers"],
    whoCanUse: "Engineering students and capstone project teams.",
    cost: "First 200 g free; fees are calculated after that.",
    howToAccess: "Fill out their request form and attach your .stl files. Drop by during office hours with questions.",
    hours: "Office hours — see their website or Instagram.",
    contact: "Instagram: @mame_fishbowl",
    website: "https://vaulted-twilight-63d.notion.site/Welcome-to-McGill-s-Fishbowl-12ff8fc48289801baef6fa6b01cd8497",
    tags: ["3D print", "stl", "capstone", "free", "MAME", "engineering"],
  },

  // ▲ end of list — paste new entries above this line
];

/* ---------------------------------------------------------------------
   TEMPLATE — copy everything from { to }, including the comma

  {
    name: "",
    type: "Makerspace",
    access: "Open to all",
    campus: "Downtown",
    building: "",
    room: "",
    summary: "",
    equipment: ["", ""],
    whoCanUse: "",
    cost: "",
    howToAccess: "",
    hours: "",
    contact: "",
    website: "",
    tags: [],
  },
--------------------------------------------------------------------- */
