// Tag Groups (organized by category)
const tagGroups = {
    "Audience": ["Middle Grade", "Young Adult", "Adult"],
    "Tone/Theme": ["Light-hearted/Comedic", "Serious/Epic", "Dark/Grim", "Hopeful/Heartfelt", "Comedic/Satirical"],
    "Subgenre": ["Epic Fantasy", "High Fantasy", "Low Fantasy", "Urban Fantasy", "Historical Fantasy", "Science Fantasy", "Steampunk/Industrial", "Silkpunk", "Fairy Tale/Mythic Fantasy", "Portal Fantasy/Isekai", "Pastoral/Rural"],
    "Pacing": ["Fast-Paced", "Slow-Burn", "Accessible/Easy Read", "Dense"],
    "POV/Character": ["Dragon POV", "Human POV + Dragon", "Ensemble Cast/Multiple POVs"],
    "Dragon Involvement": ["Protagonist", "Sidekick/Partner", "Mount/Vehicle", "Antagonist/Villain", "Background/Setting Only", "Dragons Rare/Mythical", "Dragons Commonplace"],
    "Plot Elements": ["Coming of Age", "Political Intrigue/War", "Friendship & Found Family", "Romance", "Environmental/Nature", "Exploration/Adventure", "Hero’s Journey", "Philosophical/Reflective", "Prophecy/Chosen One Subversion", "Secret Royalty/Lost Heir", "Political Intrigue",
        "Murder Mystery/Investigation", "Dual Timelines/Flashbacks", "Courtly Drama/Nobility Politics", "Mentor–Student Dynamic", "Dragon Rebellion/Revolution", "Redemption Arc", "Heist/Infiltration", "Time Travel/Temporal Magic", "War Campaign/Military Focus", "Survival Adventure",
        "Hidden World Within Our Own", "Magic School/Training Arc", "Quest Structure", "Slow Burn Tension", "Family Secrets/Legacy", "Mind Control/Possession", "Dragonbonded/Shared Mind", "Inter-species Alliance/Conflict", "Disguised Identity/Deception"],
    "Romance": ["Strong Romance", "Light Romance", "No Romance"],
    "Violence": ["Low", "Moderate", "High"],
    "Magic": ["High Magic", "Low Magic", "Hard Magic", "Soft Magic", "No Magic"],
    "Worldbuilding": ["Dragon Rider", "Lore-Rich", "Seafaring/Maritime", "Desert Setting", "Medieval European-Inspired", "Post-Apocalyptic", "Alternate History", "Unique Magic System", "Mythological or Religious Lore", "Detailed Political Systems", "Multiple Cultures/Languages", "Custom Calendar or Timekeeping",
        "Deep History/Legendary Past", "Ancient Civilizations", "Non-Human Societies", "Elemental World", "Floating Islands/Sky Realms", "Underwater Kingdoms", "Magical Geography/Living Land", "Interdimensional Travel", "Unique Technology–Magic Fusion", "City as Character",
        "Ecological Focus/Living World", "Dragons Shape Society", "Dragon Religion/Worship", "Fragmented Worlds / Shards"],
    "Social Themes": ["LGBTQ+ Representation", "Queer Romance Central", "Female Protagonist", "BIPOC Protagonist", "Disability & Neurodivergence", "Non-Western Inspired", "Prejudice/Discrimination (Species or Caste)", "Environmentalism/Nature vs Civilization", "Revolution/Rebellion Against Oppression",
        "Colonialism/Cultural Erasure", "Gender Roles/Queer Identity", "Slavery/Servitude", "Religious Extremism/Control", "Power and Corruption", "Class Divide/Economic Inequality", "Propaganda/Censorship", "Generational Conflict", "Pacifism vs Violence", "Freedom vs Control",
        "Responsibility of Power", "War Trauma/PTSD", "Coming Out/Acceptance", "Cultural Identity/Assimilation", "Moral Relativism", "Mental Health/Isolation", "Legacy of Violence", "Duty vs Desire"],
    "Series Length & Completion": ["Standalone", "Duology", "Trilogy", "Four or More Books in Series", "Ongoing Series", "Complete Series"],
    "Format": ["Graphic Novel/Illustrated", "Audiobook"],
    "Mature Content": ["Sexual Content", "Strong Language", "Substance Use", "Traumatic Themes"],
    "Content Warnings": ["Sexual Assault", "Physical Abuse", "Child Abuse", "Animal Cruelty/Death", "Self-Harm", "Suicide", "Kidnapping/Abduction", "Death", "Miscarriage", "Abortion", "Blood", "Racism", "Sexism", "Classism", "Torture", "Transphobia", "Homophobia"]
};

const books = [
    {
        title: "Wings of Fire",
        author: "Tui T. Sutherland",
        year: 2012,
        length: 900000,
        tags: [
            // Audience
            "Middle Grade",
            // Tone/Theme
            "Hopeful/Heartfelt", "Serious/Epic",
            // Subgenre
            "Epic Fantasy", "High Fantasy",
            // Pacing
            "Fast-Paced", "Accessible/Easy Read",
            // POV/Character
            "Ensemble Cast/Multiple POVs", "Dragon POV",
            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Antagonist/Villain", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Political Intrigue/War", "Friendship & Found Family", "Romance", "Exploration/Adventure", "Hero’s Journey", "Prophecy/Chosen One Subversion", "Inter-species Alliance/Conflict",
            "Magic School/Training Arc", "Murder Mystery/Investigation", "Secret Royalty/Lost Heir", "Quest Structure", "War Campaign/Military Focus", "Dragon Rebellion/Revolution", "Mind Control/Possession",
            // Romance
            "Light Romance",
            // Violence
            "Moderate",
            // Magic
            "Low Magic", "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Multiple Cultures/Languages", "Non-Human Societies", "Medieval European-Inspired", "Unique Magic System", "Multiple Cultures/Languages", "Ancient Civilizations",
            "Ecological Focus/Living World", "Dragons Shape Society", "Dragon Religion/Worship", "Underwater Kingdoms",
            // Social Themes
            "LGBTQ+ Representation", "Queer Romance Central", "Female Protagonist", "BIPOC Protagonist", "Disability & Neurodivergence", "Prejudice/Discrimination (Species or Caste)", "Revolution/Rebellion Against Oppression",
            "Colonialism/Cultural Erasure", "Gender Roles/Queer Identity", "Power and Corruption", "Generational Conflict", "Pacifism vs Violence", "Freedom vs Control", "Cultural Identity/Assimilation",
            "Responsibility of Power", "War Trauma/PTSD", "Moral Relativism", "Legacy of Violence",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            "Graphic Novel/Illustrated", "Audiobook",
            // Mature Content
            //Content Warnings
            "Traumatic Themes", "Kidnapping/Abduction", "Blood", "Death"
        ]
    },
    {
        title: "The Roots of Chaos",
        author: "Samantha Shannon",
        year: 2019,
        length: 400000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "High Fantasy", "Epic Fantasy",
            // Pacing
            "Slow-Burn", "Dense",
            // POV/Character
            "Ensemble Cast/Multiple POVs",
            // Dragon Involvement
            "Sidekick/Partner", "Dragons Rare/Mythical", "Antagonist/Villain",
            // Plot Elements
            "Political Intrigue/War", "Philosophical/Reflective", "Prophecy/Chosen One Subversion",
            "Secret Royalty/Lost Heir", "Dual Timelines/Flashbacks", "Courtly Drama/Nobility Politics", "Friendship & Found Family", "Exploration/Adventure",
            // Romance
            "Strong Romance",
            // Violence
            "Moderate",
            // Magic
            "High Magic", "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Mythological or Religious Lore", "Detailed Political Systems", "Multiple Cultures/Languages",
            "Deep History/Legendary Past", "Ancient Civilizations", "Non-Human Societies",
            "Dragons Shape Society", "Dragon Religion/Worship",
            // Social Themes
            "LGBTQ+ Representation", "Female Protagonist", "Prejudice/Discrimination (Species or Caste)",
            "Religious Extremism/Control", "Revolution/Rebellion Against Oppression",
            "Responsibility of Power", "War Trauma/PTSD", "Queer Romance Central",
            // Series Length & Completion
            "Complete Series",
            // Format
            // (none)
            // Mature Content
            "Sexual Content", "Strong Language", "Traumatic Themes",
            // Content Warnings
            "Death", "Torture", "Sexual Assault", "Racism", "Classism"
        ]
    },
    {
        title: "Age of Fire",
        author: "E.E. Knight",
        year: 2005,
        length: 750000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Hopeful/Heartfelt",
            // Subgenre
            "Low Fantasy",
            // Pacing
            "Accessible/Easy Read",
            // POV/Character
            "Dragon POV",
            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Hero’s Journey", "Survival Adventure",
            "Mentor–Student Dynamic", "Political Intrigue",
            // Romance
            "Light Romance",
            // Violence
            "High",
            // Magic
            "Low Magic",
            // Worldbuilding
            "Lore-Rich", "Non-Human Societies", "Dragons Shape Society",
            // Social Themes
            "Revolution/Rebellion Against Oppression", "Class Divide/Economic Inequality", "Responsibility of Power",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            // (none)
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "Physical Abuse", "Slavery/Servitude", "Torture"
        ]
    },
    {
        title: "Inheritance Cycle",
        author: "Christopher Paolini",
        year: 2003,
        length: 1000000,
        tags: [
            // Audience
            "Young Adult",
            // Tone/Theme
            "Serious/Epic",
            // Subgenre
            "High Fantasy",
            // Pacing
            "Accessible/Easy Read",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Hero’s Journey", "Prophecy/Chosen One Subversion",
            "Magic School/Training Arc", "Secret Royalty/Lost Heir", "Mentor–Student Dynamic", "Quest Structure",
            // Romance
            "Light Romance",
            // Violence
            "Moderate",
            // Magic
            "High Magic",
            // Worldbuilding
            "Lore-Rich", "Medieval European-Inspired", "Mythological or Religious Lore",
            "Multiple Cultures/Languages", "Deep History/Legendary Past", "Dragon Rider", "Dragons Shape Society",
            // Social Themes
            "Revolution/Rebellion Against Oppression", "Responsibility of Power",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            // (none)
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "Torture", "Child Abuse", "Slavery/Servitude"
        ]
    },
    {
        title: "How to Train Your Dragon",
        author: "Cressida Cowell",
        year: 2003,
        length: 450000,
        tags: [
            // Audience
            "Middle Grade",
            // Tone/Theme
            "Light-hearted/Comedic", "Hopeful/Heartfelt",
            // Subgenre
            "Fairy Tale/Mythic Fantasy", "Pastoral/Rural",
            // Pacing
            "Fast-Paced", "Accessible/Easy Read",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Hero’s Journey", "Found Family", "Secret Royalty/Lost Heir",
            // Romance
            "No Romance",
            // Violence
            "Low",
            // Magic
            "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Seafaring/Maritime", "Non-Human Societies", "Dragons Shape Society",
            // Social Themes
            "Responsibility of Power", "Class Divide/Economic Inequality",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            // (none)
            // Mature Content
            // (none)
            // Content Warnings
            "Death"
        ]
    },
    {
        title: "Middle-earth Series",
        author: "J.R.R. Tolkien",
        year: 1937,
        length: 1200000,
        tags: [
            // Audience
            "Young Adult", "Adult",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "High Fantasy", "Mythic Fantasy",
            // Pacing
            "Slow-Burn", "Dense",
            // POV/Character
            "Ensemble Cast/Multiple POVs",
            // Dragon Involvement
            "Antagonist/Villain", "Dragons Rare/Mythical",
            // Plot Elements
            "Hero’s Journey", "Coming of Age", "Exploration/Adventure", "War Campaign/Military Focus",
            "Prophecy/Chosen One Subversion", "Courtly Drama/Nobility Politics", "Mentor–Student Dynamic", "Family Secrets/Legacy",
            // Romance
            "Light Romance",
            // Violence
            "Moderate",
            // Magic
            "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Medieval European-Inspired", "Mythological or Religious Lore", "Multiple Cultures/Languages",
            "Deep History/Legendary Past", "Ancient Civilizations", "Custom Calendar or Timekeeping",
            // Social Themes
            "Responsibility of Power", "War Trauma/PTSD", "Class Divide/Economic Inequality", "Legacy of Violence",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            // (none)
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "War Trauma/PTSD"
        ]
    },
    {
        title: "Dragonriders of Pern",
        author: "Anne McCaffrey",
        year: 1968,
        length: 1500000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "Science Fantasy", "Pastoral/Rural",
            // Pacing
            "Accessible/Easy Read", "Slow-Burn",
            // POV/Character
            "Ensemble Cast/Multiple POVs", "Human POV + Dragon",
            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Hero’s Journey", "Mentor–Student Dynamic", "Political Intrigue", "Romance", "War Campaign/Military Focus",
            "Time Travel/Temporal Magic", "Exploration/Adventure", "Prophecy/Chosen One Subversion", "Inter-species Alliance/Conflict",
            // Romance
            "Strong Romance",
            // Violence
            "Moderate",
            // Magic
            "Low Magic",
            // Worldbuilding
            "Dragon Rider", "Unique Technology–Magic Fusion", "Post-Apocalyptic World", "Multiple Cultures/Languages",
            "Deep History/Legendary Past", "Non-Human Societies", "Dragons Shape Society", "Ecological Focus/Living World",
            // Social Themes
            "Gender Roles/Queer Identity", "Responsibility of Power", "Found Family", "Revolution/Rebellion Against Oppression",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            // (none)
            // Mature Content
            "Sexual Content", "Traumatic Themes",
            // Content Warnings
            "Sexual Assault", "Death", "Child Abuse"
        ]
    },
    {
        title: "Seraphina",
        author: "Rachel Hartman",
        year: 2012,
        length: 250000,
        tags: [
            // Audience
            "Young Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "High Fantasy",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Political Intrigue", "Romance", "Courtly Drama/Nobility Politics",
            "Family Secrets/Legacy", "Mentor–Student Dynamic", "Dragonbonded/Shared Mind", "Disguised Identity/Deception",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Lore-Rich", "Detailed Political Systems", "Dragons Shape Society", "Multiple Cultures/Languages",

            // Social Themes
            "Prejudice/Discrimination (Species or Caste)", "Mental Health / Isolation", "Responsibility of Power",

            // Series Length & Completion
            "Duology", "Complete Series",

            // Format
            // (none)

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death"
        ]
    },
    {
        title: "Tea Dragon",
        author: "Kay O’Neill",
        year: 2017,
        length: 40000,
        tags: [
            // Audience
            "Middle Grade",

            // Tone/Theme
            "Hopeful/Heartfelt", "Light-hearted/Comedic",

            // Subgenre
            "Fairy Tale/Mythic Fantasy", "Pastoral/Rural",

            // Pacing
            "Accessible/Easy Read", "Slow-Burn",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",

            // Plot Elements
            "Friendship & Found Family", "Mentor–Student Dynamic",

            // Romance
            "Queer Romance Central",

            // Violence
            "Low",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Lore-Rich", "Ecological Focus/Living World",

            // Social Themes
            "LGBTQ+ Representation", "Queer Romance Central", "Disability & Neurodivergence", "Found Family",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            "Graphic Novel/Illustrated",

            // Mature Content
            // (none)

            // Content Warnings
            // (none)
        ]
    },
    {
        title: "The Enchanted Forest Chronicles",
        author: "Patricia C. Wrede",
        year: 1990,
        length: 300000,
        tags: [
            // Audience
            "Middle Grade",

            // Tone/Theme
            "Comedic/Satirical", "Light-hearted/Comedic",

            // Subgenre
            "Fairy Tale/Mythic Fantasy", "High Fantasy",

            // Pacing
            "Accessible/Easy Read", "Fast-Paced",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Disguised Identity/Deception", "Exploration/Adventure", "Romance", "Subversion of Tropes",

            // Romance
            "Light Romance",

            // Violence
            "Low",

            // Magic
            "High Magic",

            // Worldbuilding
            "Lore-Rich", "Dragons Shape Society",

            // Social Themes
            "Female Protagonist", "Gender Roles/Queer Identity", "Responsibility of Power",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // (none)

            // Mature Content
            // (none)

            // Content Warnings
            // (none)
        ]
    },
    {
        title: "Iskari",
        author: "Kristen Ciccarelli",
        year: 2017,
        length: 275000,
        tags: [
            // Audience
            "Young Adult",

            // Tone/Theme
            "Dark/Grim", "Serious/Epic",

            // Subgenre
            "High Fantasy", "Fairy Tale/Mythic Fantasy",

            // Pacing
            "Fast-Paced",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Antagonist/Villain", "Dragons Rare/Mythical",

            // Plot Elements
            "Coming of Age", "Redemption Arc", "Secret Royalty/Lost Heir", "Romance",
            "Exploration/Adventure", "Family Secrets/Legacy", "Disguised Identity/Deception", "Hero’s Journey",

            // Romance
            "Strong Romance",

            // Violence
            "High",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Lore-Rich", "Ancient Civilizations", "Mythological or Religious Lore",

            // Social Themes
            "Female Protagonist", "Responsibility of Power", "Legacy of Violence",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            // (none)

            // Mature Content
            "Sexual Content", "Traumatic Themes",

            // Content Warnings
            "Death", "Blood"
        ]
    },
    {
        title: "Tooth and Claw",
        author: "Jo Walton",
        year: 2003,
        length: 110000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Comedic/Satirical", "Dark/Grim",

            // Subgenre
            "Fairy Tale/Mythic Fantasy", "Historical Fantasy",

            // Pacing
            "Slow-Burn",

            // POV/Character
            "Dragon POV",

            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",

            // Plot Elements
            "Courtly Drama/Nobility Politics", "Romance", "Power and Corruption", "Disguised Identity/Deception",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Low Magic",

            // Worldbuilding
            "Non-Human Societies", "Dragons Shape Society", "Detailed Political Systems",

            // Social Themes
            "Class Divide/Economic Inequality", "Gender Roles/Queer Identity", "Responsibility of Power",

            // Series Length & Completion
            "Standalone",

            // Format
            // (none)

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Classism", "Sexism"
        ]
    },
    {
        title: "A Song of Ice and Fire",
        author: "George R. R. Martin",
        year: 1996,
        length: 1700000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Dark/Grim", "Serious/Epic",

            // Subgenre
            "Epic Fantasy", "Medieval European-Inspired",

            // Pacing
            "Dense", "Slow-Burn",

            // POV/Character
            "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Protagonist", "Mount/Vehicle", "Dragons Rare/Mythical",

            // Plot Elements
            "Political Intrigue/War", "Courtly Drama/Nobility Politics", "Secret Royalty/Lost Heir", "Redemption Arc",
            "War Campaign/Military Focus", "Prophecy/Chosen One Subversion", "Family Secrets/Legacy", "Romance", "Mentor–Student Dynamic",

            // Romance
            "Light Romance",

            // Violence
            "High",

            // Magic
            "Low Magic", "Soft Magic",

            // Worldbuilding
            "Lore-Rich", "Deep History/Legendary Past", "Detailed Political Systems", "Multiple Cultures/Languages", "Ancient Civilizations",

            // Social Themes
            "Power and Corruption", "War Trauma/PTSD", "Responsibility of Power", "Class Divide/Economic Inequality",

            // Series Length & Completion
            "Four or More Books in Series", "Ongoing Series",

            // Format
            // (none)

            // Mature Content
            "Sexual Content", "Strong Language", "Traumatic Themes", "Substance Use",

            // Content Warnings
            "Sexual Assault", "Death", "Blood", "Torture", "Suicide", "Animal Cruelty/Death", "Classism", "Sexism"
        ]
    },
    {
        title: "The Rain Wild Chronicles",
        author: "Robin Hobb",
        year: 2009,
        length: 600000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "Low Fantasy", "Pastoral/Rural",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Protagonist", "Dragons Commonplace", "Sidekick/Partner",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Environmental/Nature", "Dragon Rebellion/Revolution",
            "Romance", "Inter-species Alliance/Conflict", "Family Secrets/Legacy",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Soft Magic", "High Magic",

            // Worldbuilding
            "Ecological Focus/Living World", "Lore-Rich", "Dragon Religion/Worship", "Non-Human Societies",

            // Social Themes
            "Prejudice/Discrimination (Species or Caste)", "Environmentalism/Nature vs Civilization",
            "Responsibility of Power", "Found Family", "Disability & Neurodivergence",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // (none)

            // Mature Content
            "Traumatic Themes", "Substance Use",

            // Content Warnings
            "Death", "Animal Cruelty/Death", "Blood", "Physical Abuse"
        ]
    },
    {
        title: "The Memoirs of Lady Trent",
        author: "Marie Brennan",
        year: 2013,
        length: 600000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "Historical Fantasy", "Pastoral/Rural",

            // Pacing
            "Slow-Burn", "Accessible/Easy Read",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Background/Setting Only",

            // Plot Elements
            "Exploration/Adventure", "Coming of Age", "Mentor–Student Dynamic",
            "Philosophical/Reflective", "Environmental/Nature", "Disguised Identity/Deception",

            // Romance
            "Light Romance",

            // Violence
            "Low",

            // Magic
            "Low Magic",

            // Worldbuilding
            "Ecological Focus/Living World", "Lore-Rich", "Non-Human Societies",
            "Dragons Shape Society", "Dragon Religion/Worship", "Unique Technology–Magic Fusion",

            // Social Themes
            "Female Protagonist", "Prejudice/Discrimination (Species or Caste)",
            "Gender Roles/Queer Identity", "Responsibility of Power",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Animal Cruelty/Death", "Death"
        ]
    },
    {
        title: "The Iron Dragon’s Daughter",
        author: "Michael Swanwick",
        year: 1993,
        length: 120000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Dark/Grim", "Comedic/Satirical",

            // Subgenre
            "Urban Fantasy", "Fairy Tale/Mythic Fantasy", "Steampunk/Industrial",

            // Pacing
            "Dense",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Mount/Vehicle", "Antagonist/Villain",

            // Plot Elements
            "Coming of Age", "Rebellion Against Oppression", "Disguised Identity/Deception",
            "Magic School/Training Arc", "Philosophical/Reflective", "Romance",

            // Romance
            "Light Romance",

            // Violence
            "High",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Unique Technology–Magic Fusion", "Lore-Rich", "Dragons Shape Society",

            // Social Themes
            "Gender Roles/Queer Identity", "Class Divide/Economic Inequality",
            "Responsibility of Power", "Moral Relativism", "Mental Health / Isolation",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            // none

            // Mature Content
            "Sexual Content", "Strong Language", "Substance Use", "Traumatic Themes",

            // Content Warnings
            "Sexual Assault", "Death", "Suicide", "Torture", "Blood"
        ]
    },
    {
        title: "The Last Dragon Chronicles",
        author: "Chris d'Lacey",
        year: 2001,
        length: 650000,
        tags: [
            // Audience
            "Middle Grade", "Young Adult",

            // Tone/Theme
            "Hopeful/Heartfelt", "Serious/Epic",

            // Subgenre
            "Urban Fantasy",

            // Pacing
            "Accessible/Easy Read",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Prophecy/Chosen One Subversion",
            "Romance", "Environmental/Nature", "Family Secrets/Legacy", "Dragonbonded/Shared Mind",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Soft Magic", "High Magic",

            // Worldbuilding
            "Ecological Focus/Living World", "Mythological or Religious Lore", "Dragons Shape Society",

            // Social Themes
            "Environmentalism/Nature vs Civilization", "Responsibility of Power", "Found Family",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Animal Cruelty/Death"
        ]
    },
    {
        title: "Sea of Trolls",
        author: "Nancy Farmer",
        year: 2004,
        length: 350000,
        tags: [
            // Audience
            "Middle Grade", "Young Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "Historical Fantasy", "Pastoral/Rural", "Fairy Tale/Mythic Fantasy",

            // Pacing
            "Fast-Paced", "Accessible/Easy Read",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Background/Setting Only", "Dragons Rare/Mythical",

            // Plot Elements
            "Coming of Age", "Mentor–Student Dynamic", "Exploration/Adventure",
            "Mythological Lore", "Hero’s Journey",

            // Romance
            "No Romance",

            // Violence
            "Moderate",

            // Magic
            "Soft Magic", "Low Magic",

            // Worldbuilding
            "Lore-Rich", "Mythological or Religious Lore", "Ancient Civilizations",

            // Social Themes
            "Responsibility of Power", "Found Family", "Cultural Identity/Assimilation",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Animal Cruelty/Death", "Blood"
        ]
    },
    {
        title: "The Neverending Story",
        author: "Michael Ende",
        year: 1979,
        length: 120000,
        tags: [
            // Audience
            "Middle Grade", "Young Adult",

            // Tone/Theme
            "Hopeful/Heartfelt", "Serious/Epic",

            // Subgenre
            "Fairy Tale/Mythic Fantasy", "Portal Fantasy/Isekai", "Pastoral/Rural",

            // Pacing
            "Accessible/Easy Read", "Slow-Burn",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Sidekick/Partner", "Dragons Rare/Mythical",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Philosophical/Reflective",
            "Hidden World Within Our Own", "Disguised Identity/Deception",

            // Romance
            "No Romance",

            // Violence
            "Low",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Magical Geography/Living Land", "Mythological or Religious Lore", "Lore-Rich",

            // Social Themes
            "Responsibility of Power", "Mental Health / Isolation", "Found Family",

            // Series Length & Completion
            "Standalone",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Animal Cruelty/Death"
        ]
    },
    {
        title: "Earthsea Cycle",
        author: "Ursula K. Le Guin",
        year: 1968,
        length: 500000,
        tags: [
            // Audience
            "Young Adult", "Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt", "Philosophical/Reflective",

            // Subgenre
            "High Fantasy", "Pastoral/Rural",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Human POV + Dragon", "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Antagonist/Villain", "Protagonist", "Dragons Rare/Mythical",

            // Plot Elements
            "Coming of Age", "Mentor–Student Dynamic", "Philosophical/Reflective",
            "Prophecy/Chosen One Subversion", "Magic School/Training Arc",
            "Redemption Arc", "Family Secrets/Legacy",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Hard Magic", "High Magic",

            // Worldbuilding
            "Island-Hopping / Maritime", "Unique Magic System", "Mythological or Religious Lore",
            "Deep History/Legendary Past", "Non-Human Societies", "Lore-Rich",

            // Social Themes
            "BIPOC Protagonist", "Prejudice/Discrimination (Species or Caste)",
            "Gender Roles/Queer Identity", "Responsibility of Power",
            "Moral Relativism", "Found Family", "Power and Corruption",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Animal Cruelty/Death", "Sexism"
        ]
    },
    {
        title: "Dragon Prince",
        author: "Melanie Rawn",
        year: 1988,
        length: 600000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "High Fantasy", "Medieval European-Inspired",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Mount/Vehicle", "Antagonist/Villain",

            // Plot Elements
            "Political Intrigue/War", "Courtly Drama/Nobility Politics", "Secret Royalty/Lost Heir",
            "Romance", "Family Secrets/Legacy", "Mentor–Student Dynamic", "Prophecy/Chosen One Subversion",

            // Romance
            "Strong Romance",

            // Violence
            "High",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Lore-Rich", "Detailed Political Systems", "Dragon Religion/Worship",

            // Social Themes
            "Power and Corruption", "Gender Roles/Queer Identity", "Class Divide/Economic Inequality",
            "Responsibility of Power", "Found Family",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            // none

            // Mature Content
            "Sexual Content", "Strong Language", "Traumatic Themes",

            // Content Warnings
            "Death", "Sexual Assault", "Torture", "Child Abuse", "Blood"
        ]
    },
    {
        title: "The Deed of Paksenarrion",
        author: "Elizabeth Moon",
        year: 1988,
        length: 600000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "High Fantasy", "Pastoral/Rural",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Background/Setting Only", "Dragons Rare/Mythical",

            // Plot Elements
            "Hero’s Journey", "Coming of Age", "Redemption Arc",
            "Mentor–Student Dynamic", "War Campaign/Military Focus",
            "Exploration/Adventure", "Religious Extremism/Control",

            // Romance
            "No Romance",

            // Violence
            "High",

            // Magic
            "Low Magic",

            // Worldbuilding
            "Lore-Rich", "Mythological or Religious Lore", "Deep History/Legendary Past",

            // Social Themes
            "Female Protagonist", "Prejudice/Discrimination (Species or Caste)",
            "Religious Extremism/Control", "War Trauma/PTSD", "Responsibility of Power",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Torture", "Physical Abuse", "Blood", "War Trauma/PTSD"
        ]
    },
    {
        title: "Dragonwatch",
        author: "Brandon Mull",
        year: 2017,
        length: 500000,
        tags: [
            // Audience
            "Middle Grade",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "High Fantasy", "Portal Fantasy/Isekai",

            // Pacing
            "Fast-Paced", "Accessible/Easy Read",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Protagonist", "Antagonist/Villain", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Hero’s Journey",
            "Dragon Rebellion/Revolution", "Mentor–Student Dynamic", "Prophecy/Chosen One Subversion",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "High Magic",

            // Worldbuilding
            "Lore-Rich", "Dragon Religion/Worship", "Elemental World",

            // Social Themes
            "Responsibility of Power", "Found Family",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Animal Cruelty/Death"
        ]
    },
    {
        title: "Fablehaven",
        author: "Brandon Mull",
        year: 2006,
        length: 600000,
        tags: [
            // Audience
            "Middle Grade",

            // Tone/Theme
            "Light-hearted/Comedic", "Hopeful/Heartfelt",

            // Subgenre
            "Portal Fantasy/Isekai", "Low Fantasy",

            // Pacing
            "Fast-Paced", "Accessible/Easy Read",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Antagonist/Villain", "Dragons Rare/Mythical",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Hidden World Within Our Own",
            "Prophecy/Chosen One Subversion", "Mentor–Student Dynamic", "Hero’s Journey",

            // Romance
            "No Romance",

            // Violence
            "Moderate",

            // Magic
            "High Magic",

            // Worldbuilding
            "Lore-Rich", "Non-Human Societies", "Magical Geography/Living Land",

            // Social Themes
            "Responsibility of Power", "Found Family",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Animal Cruelty/Death"
        ]
    },
    {
        title: "The Seventh Tower",
        author: "Garth Nix",
        year: 2000,
        length: 300000,
        tags: [
            // Audience
            "Middle Grade", "Young Adult",

            // Tone/Theme
            "Serious/Epic",

            // Subgenre
            "Science Fantasy", "High Fantasy",

            // Pacing
            "Fast-Paced", "Accessible/Easy Read",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Quest Structure",
            "Mentor–Student Dynamic", "Inter-species Alliance/Conflict", "Hidden World Within Our Own",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Hard Magic", "High Magic",

            // Worldbuilding
            "Unique Magic System", "Lore-Rich", "Fragmented Worlds / Shards",
            "Magical Geography/Living Land", "Unique Technology–Magic Fusion",

            // Social Themes
            "Prejudice/Discrimination (Species or Caste)", "Responsibility of Power", "Class Divide/Economic Inequality",

            // Series Length & Completion
            "Six Books", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death"
        ]
    },
    {
        title: "L’Ultimo Elfo",
        author: "Silvana De Mari",
        year: 2004,
        length: 100000,
        tags: [
            // Audience
            "Middle Grade", "Young Adult",

            // Tone/Theme
            "Hopeful/Heartfelt", "Dark/Grim",

            // Subgenre
            "Post-Apocalyptic", "Fairy Tale/Mythic Fantasy",

            // Pacing
            "Accessible/Easy Read", "Slow-Burn",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Sidekick/Partner", "Dragons Rare/Mythical",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Environmental/Nature",
            "Redemption Arc", "Prophecy/Chosen One Subversion", "Survival Adventure",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Post-Apocalyptic World", "Magical Geography/Living Land", "Lore-Rich",

            // Social Themes
            "Prejudice/Discrimination (Species or Caste)", "War Trauma/PTSD",
            "Responsibility of Power", "Environmentalism/Nature vs Civilization",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Child Abuse", "War Trauma/PTSD", "Animal Cruelty/Death"
        ]
    },
    {
        title: "The Tide Child",
        author: "RJ Barker",
        year: 2019,
        length: 450000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Dark/Grim", "Hopeful/Heartfelt",

            // Subgenre
            "Epic Fantasy", "Seafaring/Maritime", "Low Fantasy",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Mount/Vehicle", "Dragons Rare/Mythical",

            // Plot Elements
            "Redemption Arc", "Coming of Age", "Political Intrigue/War",
            "War Campaign/Military Focus", "Mentor–Student Dynamic", "Disguised Identity/Deception",

            // Romance
            "Light Romance",

            // Violence
            "High",

            // Magic
            "Low Magic",

            // Worldbuilding
            "Seafaring/Maritime", "Post-Apocalyptic World", "Unique Magic System",
            "Ecological Focus/Living World", "Dragons Shape Society",

            // Social Themes
            "Found Family", "War Trauma/PTSD", "Gender Roles/Queer Identity",
            "Responsibility of Power", "Class Divide/Economic Inequality",

            // Series Length & Completion
            "Trilogy", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes", "Strong Language",

            // Content Warnings
            "Death", "Torture", "Animal Cruelty/Death", "Suicide"
        ]
    },
    {
        title: "Temeraire",
        author: "Naomi Novik",
        year: 2006,
        length: 1100000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "Alternate History", "Epic Fantasy", "Historical Fantasy",

            // Pacing
            "Slow-Burn",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Mount/Vehicle", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Political Intrigue/War", "Mentor–Student Dynamic",
            "Exploration/Adventure", "War Campaign/Military Focus", "Inter-species Alliance/Conflict",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Low Magic",

            // Worldbuilding
            "Dragon Rider", "Lore-Rich", "Detailed Political Systems",
            "Multiple Cultures/Languages", "Dragons Shape Society", "Dragon Religion/Worship",

            // Social Themes
            "Power and Corruption", "Responsibility of Power", "Prejudice/Discrimination (Species or Caste)", "Class Divide/Economic Inequality",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Animal Cruelty/Death", "War Trauma/PTSD"
        ]
    },
    {
        title: "Burning Stars",
        author: "Rurik Redwolf",
        year: 2023,
        length: 160000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Dark/Grim",

            // Subgenre
            "Science Fantasy", "Epic Fantasy",

            // Pacing
            "Fast-Paced",

            // POV/Character
            "Dragon POV", "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Antagonist/Villain", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "War Campaign/Military Focus", "Hero’s Journey",
            "Redemption Arc", "Inter-species Alliance/Conflict", "Disguised Identity/Deception", "Philosophical/Reflective",

            // Romance
            "Strong Romance",

            // Violence
            "High",

            // Magic
            "Hard Magic",

            // Worldbuilding
            "Lore-Rich", "Unique Magic System", "Elemental World",
            "Magical Geography/Living Land", "Dragons Shape Society",

            // Social Themes
            "Queer Romance Central", "LGBTQ+ Representation", "Power and Corruption", "Duty vs Desire", "Responsibility of Power",

            // Series Length & Completion
            "Trilogy", "Ongoing Series",

            // Format
            // none

            // Mature Content
            "Sexual Content", "Strong Language", "Traumatic Themes",

            // Content Warnings
            "Death", "Blood", "Torture", "Sexism", "Animal Cruelty/Death"
        ]
    },
    {
        title: "The Wings of War",
        author: "Bryce O’Connor",
        year: 2016,
        length: 650000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Dark/Grim", "Serious/Epic",

            // Subgenre
            "Epic Fantasy", "Low Fantasy",

            // Pacing
            "Fast-Paced",

            // POV/Character
            "Dragon POV",

            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "War Campaign/Military Focus", "Survival Adventure",
            "Revenge Quest", "Mentor–Student Dynamic", "Redemption Arc", "Disguised Identity/Deception",

            // Romance
            "Light Romance",

            // Violence
            "High",

            // Magic
            "Low Magic",

            // Worldbuilding
            "Lore-Rich", "Non-Human Societies", "Dragons Shape Society",

            // Social Themes
            "War Trauma/PTSD", "Prejudice/Discrimination (Species or Caste)", "Responsibility of Power", "Legacy of Violence",

            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",

            // Format
            // none

            // Mature Content
            "Sexual Content", "Strong Language", "Traumatic Themes",

            // Content Warnings
            "Death", "Torture", "Animal Cruelty/Death", "Classism"
        ]
    },
    {
        title: "The Cosmere",
        author: "Brandon Sanderson",
        year: 2006,
        length: 3000000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "Epic Fantasy", "High Fantasy",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Dragons Rare/Mythical",

            // Plot Elements
            "Political Intrigue/War", "Philosophical/Reflective", "Prophecy/Chosen One Subversion",
            "Coming of Age", "Redemption Arc", "Secret Royalty/Lost Heir", "Hero’s Journey",
            "Mentor–Student Dynamic", "Time Travel/Temporal Magic", "Disguised Identity/Deception",
            "Family Secrets/Legacy", "Mind Control/Possession", "Inter-species Alliance/Conflict",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "Hard Magic", "Unique Magic System",

            // Worldbuilding
            "Lore-Rich", "Unique Magic System", "Detailed Political Systems",
            "Multiple Cultures/Languages", "Deep History/Legendary Past",
            "Mythological or Religious Lore", "Interdimensional Travel",

            // Social Themes
            "Responsibility of Power", "Class Divide/Economic Inequality", "Power and Corruption", "War Trauma/PTSD", "Moral Relativism", "Legacy of Violence",

            // Series Length & Completion
            "Four or More Books in Series", "Ongoing Series",

            // Format
            "Audiobook",

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death", "Torture", "Self-Harm", "Suicide"
        ]
    },
    {
        title: "The Wandering Inn",
        author: "pirateaba",
        year: 2016,
        length: 7000000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Hopeful/Heartfelt", "Light-hearted/Comedic", "Dark/Grim", "Serious/Epic",

            // Subgenre
            "Portal Fantasy/Isekai", "Low Fantasy", "Epic Fantasy",

            // Pacing
            "Slow-Burn", "Dense",

            // POV/Character
            "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Dragons Rare/Mythical",

            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Survival Adventure", "War Campaign/Military Focus",
            "Magic School/Training Arc", "Political Intrigue/War", "Hero’s Journey",
            "Redemption Arc", "Heist/Infiltration", "Prophecy/Chosen One Subversion", "Family Secrets/Legacy",
            "Mentor–Student Dynamic", "Time Travel/Temporal Magic", "Mind Control/Possession",
            "Inter-species Alliance/Conflict", "Disguised Identity/Deception",

            // Romance
            "Light Romance",

            // Violence
            "High",

            // Magic
            "Soft Magic", "Hard Magic", "Unique Magic System",

            // Worldbuilding
            "Lore-Rich", "Unique Magic System", "Detailed Political Systems", "Multiple Cultures/Languages",
            "City as Character", "Ecological Focus/Living World", "Elemental World",

            // Social Themes
            "LGBTQ+ Representation", "Queer Romance Central", "Class Divide/Economic Inequality",
            "Gender Roles/Queer Identity", "War Trauma/PTSD", "Responsibility of Power", "Found Family",
            "Prejudice/Discrimination (Species or Caste)", "Power and Corruption", "Cultural Identity/Assimilation",
            "Freedom vs Control", "Coming Out/Acceptance", "Mental Health / Isolation",

            // Series Length & Completion
            "Four or More Books in Series", "Ongoing Series",

            // Format
            "Audiobook",

            // Mature Content
            "Sexual Content", "Strong Language", "Substance Use", "Traumatic Themes",

            // Content Warnings
            "Death", "Torture", "Animal Cruelty/Death", "Suicide", "Self-Harm", "Classism", "Homophobia", "Sexism"
        ]
    },
    {
        title: "Song of Chaos",
        author: "Michael R. Miller",
        year: 2022,
        length: 350000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Dark/Grim",

            // Subgenre
            "Epic Fantasy", "High Fantasy",

            // Pacing
            "Fast-Paced",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Magic School/Training Arc", "War Campaign/Military Focus",
            "Hero’s Journey", "Mentor–Student Dynamic", "Family Secrets/Legacy",
            "Redemption Arc", "Disguised Identity/Deception",

            // Romance
            "Light Romance",

            // Violence
            "High",

            // Magic
            "Hard Magic", "High Magic", "Unique Magic System",

            // Worldbuilding
            "Dragon Rider", "Lore-Rich", "Unique Magic System", "Mythological or Religious Lore",
            "Dragons Shape Society", "Elemental World",

            // Social Themes
            "Responsibility of Power", "War Trauma/PTSD", "Found Family", "Class Divide/Economic Inequality",

            // Series Length & Completion
            "Trilogy", "Ongoing Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes", "Strong Language",

            // Content Warnings
            "Death", "Blood", "Animal Cruelty/Death"
        ]
    },
    {
        title: "Dragon Scales",
        author: "L.R. Lam",
        year: 2023,
        length: 120000,
        tags: [
            // Audience
            "Young Adult",

            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",

            // Subgenre
            "Epic Fantasy", "High Fantasy",

            // Pacing
            "Fast-Paced", "Accessible/Easy Read",

            // POV/Character
            "Human POV + Dragon",

            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Magic School/Training Arc", "Prophecy/Chosen One Subversion",
            "Mentor–Student Dynamic", "Friendship & Found Family", "Hero’s Journey",

            // Romance
            "Light Romance",

            // Violence
            "Moderate",

            // Magic
            "High Magic", "Unique Magic System",

            // Worldbuilding
            "Lore-Rich", "Dragon Rider", "Dragons Shape Society", "Elemental World",

            // Social Themes
            "LGBTQ+ Representation", "Found Family", "Responsibility of Power",

            // Series Length & Completion
            "Trilogy", "Ongoing Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes",

            // Content Warnings
            "Death"
        ]
    },
    {
        title: "Axtara – Banking and Finance",
        author: "J.A. Jernay",
        year: 2020,
        length: 95000,
        tags: [
            // Audience
            "Young Adult",

            // Tone/Theme
            "Hopeful/Heartfelt", "Light-hearted/Comedic",

            // Subgenre
            "Low Fantasy", "Pastoral/Rural",

            // Pacing
            "Accessible/Easy Read", "Slow-Burn",

            // POV/Character
            "Dragon POV",

            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "Political Intrigue", "Mentor–Student Dynamic",

            // Romance
            "No Romance",

            // Violence
            "Low",

            // Magic
            "Soft Magic",

            // Worldbuilding
            "Lore-Rich", "Detailed Political Systems", "Dragons Shape Society",

            // Social Themes
            "Female Protagonist", "Class Divide/Economic Inequality", "Responsibility of Power",

            // Series Length & Completion
            "Standalone", "Complete Series",

            // Format
            // none

            // Mature Content
            // none

            // Content Warnings
            // none
        ]
    },
    {
        title: "The Bound and the Broken",
        author: "Ryan Cahill",
        year: 2021,
        length: 1000000,
        tags: [
            // Audience
            "Adult",

            // Tone/Theme
            "Serious/Epic", "Dark/Grim",

            // Subgenre
            "Epic Fantasy", "High Fantasy",

            // Pacing
            "Fast-Paced", "Dense",

            // POV/Character
            "Ensemble Cast/Multiple POVs",

            // Dragon Involvement
            "Protagonist", "Sidekick/Partner", "Mount/Vehicle", "Dragons Commonplace",

            // Plot Elements
            "Coming of Age", "War Campaign/Military Focus", "Political Intrigue/War",
            "Hero’s Journey", "Secret Royalty/Lost Heir", "Redemption Arc",
            "Mentor–Student Dynamic", "Prophecy/Chosen One Subversion",
            "Friendship & Found Family", "Family Secrets/Legacy",

            // Romance
            "Light Romance",

            // Violence
            "High",

            // Magic
            "High Magic", "Hard Magic", "Unique Magic System",

            // Worldbuilding
            "Dragon Rider", "Lore-Rich", "Multiple Cultures/Languages", "Deep History/Legendary Past",
            "Mythological or Religious Lore", "Dragons Shape Society",

            // Social Themes
            "Responsibility of Power", "War Trauma/PTSD", "Power and Corruption",

            // Series Length & Completion
            "Four or More Books in Series", "Ongoing Series",

            // Format
            // none

            // Mature Content
            "Traumatic Themes", "Strong Language",

            // Content Warnings
            "Death", "Torture", "Suicide", "Blood"
        ]
    },
    {
        title: "The Rage of Dragons",
        author: "Evan Winter",
        year: 2017,
        length: 130000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Serious/Epic", "Dark/Grim", "Hopeful/Heartfelt",
            // Subgenre
            "Epic Fantasy", "High Fantasy",
            // Pacing
            "Fast-Paced",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Antagonist/Villain", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Political Intrigue/War", "Hero’s Journey", "Redemption Arc", "War Campaign/Military Focus", "Prophecy/Chosen One Subversion", "Mentor–Student Dynamic",
            // Romance
            "Light Romance",
            // Violence
            "High",
            // Magic
            "High Magic", "Hard Magic",
            // Worldbuilding
            "Unique Magic System", "Deep History/Legendary Past", "Multiple Cultures/Languages", "Desert Setting",
            // Social Themes
            "Responsibility of Power", "Class Divide/Economic Inequality", "Power and Corruption", "Prejudice/Discrimination (Species or Caste)",
            // Series Length & Completion
            "Four or More Books in Series", "Ongoing Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes", "Strong Language",
            // Content Warnings
            "Death", "Torture", "Physical Abuse"
        ]
    },
    {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        year: 2023,
        length: 155000,
        tags: [
            // Audience
            "Young Adult", "Adult",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "High Fantasy", "Romantic Fantasy",
            // Pacing
            "Fast-Paced", "Accessible/Easy Read",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Sidekick/Partner", "Mount/Vehicle", "Dragons Commonplace",
            // Plot Elements
            "Magic School/Training Arc", "Coming of Age", "Mentor–Student Dynamic", "Romance", "War Campaign/Military Focus", "Secret Royalty/Lost Heir",
            // Romance
            "Strong Romance",
            // Violence
            "High",
            // Magic
            "High Magic", "Hard Magic",
            // Worldbuilding
            "Dragon Rider", "Unique Magic System", "Detailed Political Systems", "Lore-Rich",
            // Social Themes
            "Female Protagonist", "Responsibility of Power", "Class Divide/Economic Inequality", "Prejudice/Discrimination (Species or Caste)",
            // Series Length & Completion
            "Four or More Books in Series", "Ongoing Series",
            // Format
            // —
            // Mature Content
            "Sexual Content", "Traumatic Themes", "Strong Language",
            // Content Warnings
            "Death", "Torture", "Sexual Assault"
        ]
    },
    {
        title: "The Dragonbone Chair",
        author: "Tad Williams",
        year: 1988,
        length: 320000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Serious/Epic",
            // Subgenre
            "Epic Fantasy", "High Fantasy", "Pastoral/Rural",
            // Pacing
            "Slow-Burn", "Dense",
            // POV/Character
            "Ensemble Cast/Multiple POVs",
            // Dragon Involvement
            "Background/Setting Only",
            // Plot Elements
            "Coming of Age", "Prophecy/Chosen One Subversion", "War Campaign/Military Focus", "Philosophical/Reflective", "Secret Royalty/Lost Heir", "Family Secrets/Legacy",
            // Romance
            "Light Romance",
            // Violence
            "Moderate",
            // Magic
            "Low Magic", "Soft Magic",
            // Worldbuilding
            "Medieval European-Inspired", "Lore-Rich", "Deep History/Legendary Past", "Ancient Civilizations",
            // Social Themes
            "Responsibility of Power", "Legacy of Violence", "Duty vs Desire", "Class Divide/Economic Inequality",
            // Series Length & Completion
            "Trilogy", "Complete Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death"
        ]
    },
    {
        title: "Fledgling",
        author: "Nicole Conway",
        year: 2014,
        length: 80000,
        tags: [
            // Audience
            "Young Adult",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "High Fantasy", "Epic Fantasy",
            // Pacing
            "Fast-Paced",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Sidekick/Partner", "Mount/Vehicle", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Magic School/Training Arc", "War Campaign/Military Focus", "Mentor–Student Dynamic", "Secret Royalty/Lost Heir",
            // Romance
            "Light Romance",
            // Violence
            "Moderate",
            // Magic
            "High Magic", "Hard Magic",
            // Worldbuilding
            "Dragon Rider", "Medieval European-Inspired", "Lore-Rich",
            // Social Themes
            "Prejudice/Discrimination (Species or Caste)", "Responsibility of Power", "Class Divide/Economic Inequality",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "Physical Abuse"
        ]
    },
    {
        title: "Fireborne",
        author: "Rosaria Munda",
        year: 2019,
        length: 120000,
        tags: [
            // Audience
            "Young Adult",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "High Fantasy", "Political Fantasy",
            // Pacing
            "Slow-Burn", "Dense",
            // POV/Character
            "Human POV + Dragon", "Ensemble Cast/Multiple POVs",
            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Political Intrigue/War", "Revolution/Rebellion Against Oppression", "Mentor–Student Dynamic", "Romance", "Redemption Arc", "Secret Royalty/Lost Heir", "Hero’s Journey",
            // Romance
            "Strong Romance",
            // Violence
            "Moderate",
            // Magic
            "Low Magic", "Soft Magic",
            // Worldbuilding
            "Dragon Rider", "Detailed Political Systems", "Lore-Rich", "Dragons Shape Society", "Multiple Cultures/Languages",
            // Social Themes
            "Class Divide/Economic Inequality", "Responsibility of Power", "Power and Corruption", "Prejudice/Discrimination (Species or Caste)", "War Trauma/PTSD", "Duty vs Desire",
            // Series Length & Completion
            "Trilogy", "Complete Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "Child Abuse", "Torture"
        ]
    },
    {
        title: "The Last Dragon on Mars",
        author: "Scott Reintgen",
        year: 2023,
        length: 55000,
        tags: [
            // Audience
            "Middle Grade",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "Science Fantasy", "Portal Fantasy/Isekai",
            // Pacing
            "Fast-Paced", "Accessible/Easy Read",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Hero’s Journey", "Magic School/Training Arc", "Inter-species Alliance/Conflict",
            // Romance
            "No Romance",
            // Violence
            "Low",
            // Magic
            "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Unique Magic System", "Dragons Shape Society", "Interdimensional Travel", "Unique Technology–Magic Fusion",
            // Social Themes
            "Responsibility of Power", "Environmentalism/Nature vs Civilization",
            // Series Length & Completion
            "Ongoing Series",
            // Format
            // —
            // Mature Content
            // —
            // Content Warnings
            "Death"
        ]
    },
    {
        title: "The Wearle",
        author: "Chris d'Lacey",
        year: 2016,
        length: 65000,
        tags: [
            // Audience
            "Middle Grade",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "Epic Fantasy", "Science Fantasy",
            // Pacing
            "Fast-Paced", "Accessible/Easy Read",
            // POV/Character
            "Dragon POV", "Ensemble Cast/Multiple POVs",
            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",
            // Plot Elements
            "Exploration/Adventure", "Coming of Age", "Hero’s Journey", "Mentor–Student Dynamic", "Inter-species Alliance/Conflict",
            // Romance
            "No Romance",
            // Violence
            "Moderate",
            // Magic
            "Soft Magic", "Hard Magic",
            // Worldbuilding
            "Unique Magic System", "Post-Apocalyptic World", "Ecological Focus/Living World", "Magical Geography/Living Land", "Dragons Shape Society",
            // Social Themes
            "Environmentalism/Nature vs Civilization", "Prejudice/Discrimination (Species or Caste)", "Class Divide/Economic Inequality",
            // Series Length & Completion
            "Trilogy", "Complete Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "Animal Cruelty/Death"
        ]
    },
    {
        title: "Dragon of Ash & Stars",
        author: "H. Leighton Dickson",
        year: 2016,
        length: 80000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Philosophical/Reflective", "Hopeful/Heartfelt", "Dark/Grim",
            // Subgenre
            "Epic Fantasy", "Science Fantasy", "Pastoral/Rural",
            // Pacing
            "Slow-Burn", "Dense",
            // POV/Character
            "Dragon POV",
            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Philosophical/Reflective", "War Campaign/Military Focus", "Redemption Arc", "Mentor–Student Dynamic", "Survival Adventure", "Hero’s Journey",
            // Romance
            "Light Romance",
            // Violence
            "Moderate",
            // Magic
            "Low Magic",
            // Worldbuilding
            "Lore-Rich", "Ecological Focus/Living World", "Mythological or Religious Lore", "Dragons Shape Society",
            // Social Themes
            "Responsibility of Power", "War Trauma/PTSD", "Power and Corruption", "Legacy of Violence",
            // Series Length & Completion
            "Trilogy", "Complete Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "War Trauma/PTSD", "Animal Cruelty/Death"
        ]
    },
{
        title: "Azmina the Gold Glitter Dragon (Dragon Girls)",
        author: "Maddy Mara",
        year: 2021,
        length: 15000,
        tags: [
            // Audience
            "Middle Grade",
            // Tone/Theme
            "Light-hearted/Comedic", "Hopeful/Heartfelt",
            // Subgenre
            "Portal Fantasy/Isekai", "Fairy Tale/Mythic Fantasy",
            // Pacing
            "Fast-Paced", "Accessible/Easy Read",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Protagonist", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Friendship & Found Family", "Magic School/Training Arc", "Hero’s Journey",
            // Romance
            "No Romance",
            // Violence
            "Low",
            // Magic
            "High Magic", "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Elemental World", "Magical Geography/Living Land",
            // Social Themes
            "Female Protagonist", "Found Family", "Environmentalism/Nature vs Civilization",
            // Series Length & Completion
            "Four or More Books in Series", "Ongoing Series",
            // Format
            "Graphic Novel/Illustrated",
            // Mature Content
            // —
            // Content Warnings
            // —
        ]
    },
    {
        title: "Here, There Be Dragons",
        author: "James A. Owen",
        year: 2006,
        length: 90000,
        tags: [
            // Audience
            "Young Adult",
            // Tone/Theme
            "Hopeful/Heartfelt", "Light-hearted/Comedic",
            // Subgenre
            "Portal Fantasy/Isekai", "Fairy Tale/Mythic Fantasy", "Historical Fantasy",
            // Pacing
            "Fast-Paced", "Accessible/Easy Read",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Exploration/Adventure", "Hero’s Journey", "Prophecy/Chosen One Subversion", "Mentor–Student Dynamic", "Time Travel/Temporal Magic", "Hidden World Within Our Own", "Family Secrets/Legacy",
            // Romance
            "Light Romance",
            // Violence
            "Low",
            // Magic
            "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Mythological or Religious Lore", "Multiple Cultures/Languages", "Ancient Civilizations", "Interdimensional Travel", "Magical Geography/Living Land",
            // Social Themes
            "Responsibility of Power", "Legacy of Violence",
            // Series Length & Completion
            "Four or More Books in Series", "Complete Series",
            // Format
            // —
            // Mature Content
            // —
            // Content Warnings
            "Death"
        ]
    },
    {
        title: "The Waking Fire",
        author: "Anthony Ryan",
        year: 2016,
        length: 140000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Serious/Epic", "Dark/Grim",
            // Subgenre
            "Epic Fantasy", "Steampunk/Industrial",
            // Pacing
            "Fast-Paced", "Dense",
            // POV/Character
            "Ensemble Cast/Multiple POVs",
            // Dragon Involvement
            "Antagonist/Villain", "Protagonist", "Dragons Rare/Mythical",
            // Plot Elements
            "Political Intrigue/War", "Exploration/Adventure", "War Campaign/Military Focus", "Heist/Infiltration", "Redemption Arc", "Mentor–Student Dynamic", "Quest Structure", "Inter-species Alliance/Conflict", "Disguised Identity/Deception",
            // Romance
            "Light Romance",
            // Violence
            "High",
            // Magic
            "Hard Magic",
            // Worldbuilding
            "Lore-Rich", "Unique Magic System", "Detailed Political Systems", "Unique Technology–Magic Fusion", "Multiple Cultures/Languages", "Deep History/Legendary Past",
            // Social Themes
            "Power and Corruption", "Revolution/Rebellion Against Oppression", "Responsibility of Power",
            // Series Length & Completion
            "Trilogy", "Complete Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes", "Strong Language", "Substance Use",
            // Content Warnings
            "Death", "Torture", "War Trauma/PTSD", "Blood"
        ]
    },
    {
        title: "Dragon Mage",
        author: "ML Spencer",
        year: 2020,
        length: 200000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Serious/Epic", "Hopeful/Heartfelt",
            // Subgenre
            "High Fantasy", "Portal Fantasy/Isekai",
            // Pacing
            "Slow-Burn", "Dense",
            // POV/Character
            "Ensemble Cast/Multiple POVs",
            // Dragon Involvement
            "Mount/Vehicle", "Partner/Sidekick", "Dragons Rare/Mythical",
            // Plot Elements
            "Coming of Age", "Magic School/Training Arc", "Hero’s Journey", "Redemption Arc", "Prophecy/Chosen One Subversion", "Mentor–Student Dynamic", "War Campaign/Military Focus", "Family Secrets/Legacy", "Inter-species Alliance/Conflict",
            // Romance
            "Light Romance",
            // Violence
            "Moderate",
            // Magic
            "Hard Magic", "High Magic",
            // Worldbuilding
            "Lore-Rich", "Unique Magic System", "Deep History/Legendary Past", "Magical Geography/Living Land", "Dragons Shape Society",
            // Social Themes
            "Disability & Neurodivergence", "Found Family", "Power and Corruption", "Responsibility of Power", "War Trauma/PTSD",
            // Series Length & Completion
            "Ongoing Series",
            // Format
            // —
            // Mature Content
            "Traumatic Themes",
            // Content Warnings
            "Death", "Self-Harm", "Suicide", "War Trauma/PTSD", "Bullying"
        ]
    },
    {
        title: "The Awakening",
        author: "Nora Roberts",
        year: 2020,
        length: 110000,
        tags: [
            // Audience
            "Adult",
            // Tone/Theme
            "Hopeful/Heartfelt", "Serious/Epic",
            // Subgenre
            "Portal Fantasy/Isekai", "Fairy Tale/Mythic Fantasy",
            // Pacing
            "Slow-Burn", "Accessible/Easy Read",
            // POV/Character
            "Human POV + Dragon",
            // Dragon Involvement
            "Sidekick/Partner", "Dragons Commonplace",
            // Plot Elements
            "Coming of Age", "Romance", "Magic School/Training Arc", "Secret Royalty/Lost Heir", "Prophecy/Chosen One Subversion", "Hero’s Journey", "Inter-species Alliance/Conflict",
            // Romance
            "Strong Romance",
            // Violence
            "Moderate",
            // Magic
            "High Magic", "Soft Magic",
            // Worldbuilding
            "Lore-Rich", "Mythological or Religious Lore", "Magical Geography/Living Land", "Elemental World", "Dragons Shape Society",
            // Social Themes
            "Female Protagonist", "Found Family", "Responsibility of Power", "Gender Roles/Queer Identity",
            // Series Length & Completion
            "Trilogy", "Complete Series",
            // Format
            // —
            // Mature Content
            "Sexual Content", "Traumatic Themes",
            // Content Warnings
            "Death", "Sexual Assault", "Blood"
        ]
    },
];