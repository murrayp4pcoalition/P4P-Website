// /lib/parenting-suite-config.ts
// ═══════════════════════════════════════════════════════════════════════════════
// GIFT CONNECT Parenting Suite - Configuration File
// All URLs, values, and swappable content for the Parenting Suite page
// ═══════════════════════════════════════════════════════════════════════════════

export const parentingSuiteConfig = {
  // App Store Links
  appStoreUrl: "https://apps.apple.com/us/app/gift-connect-parenting-suite/id6741826572",
  googlePlayUrl: "https://play.google.com/store/search?q=gift+connect+parenting+suite&c=apps",
  // ↑ PLACEHOLDER: search URL. Swap to direct deep link when Brett provides it.

  // Web Tool URLs
  sammieVoiceUrl: "https://voiceassistant.gift-connect.org/?mode=voice-voice",
  sammieTextUrl: "https://parentassistant.gift-connect.org/",
  genoUrl: "https://newsonggenerator.gift-connect.org/",
  staceyUrl: "https://storygenerator.gift-connect.org/",

  // Video
  vimeoVideoId: "1171939931",

  // External Links
  privacyPolicyUrl: "https://gift-connect.org/privacy",
  // ↑ PLACEHOLDER: confirm canonical URL with Brett.
  giftConnectMainSite: "https://gift-connect.org",

  // Contact
  supportEmail: "support@gift-connect.org",
  p4pContactEmail: "director@murrayp4p.com",

  // SMS Feature (hidden in v1)
  smsEnabled: false,
  // ↑ Set to true and supply shortCode/keyword when SMS access is confirmed.
  smsShortCode: "",
  smsKeyword: "SAMMIE",
};

// GIFT CONNECT Brand Colors
export const giftConnectColors = {
  navy: "#1E3560",          // Primary - backgrounds, headings, buttons
  navyLight: "#2A4070",     // Secondary navy for panels
  persimmon: "#E8682A",     // Accent - CTAs, highlights, stat numbers
  persimmonAlt: "#EC6338",  // Alternate persimmon
  gold: "#F5A623",          // Tertiary accent only - NOT on white (fails AA)
  goldAlt: "#FBBA33",       // Alternate gold
  charcoal: "#222222",      // Body text
  offWhite: "#FAFAF7",      // Page background
  white: "#FFFFFF",
};

// Page Metadata
export const parentingSuiteMetadata = {
  title: "GIFT CONNECT Parenting Suite — Murray Partners 4 Prevention",
  description: "Free AI-powered parenting support for Murray families. Voice assistant, personalized lullabies, custom storybooks, and 24/7 guidance in 80+ languages.",
};

// Feature list for "Everything Included" section
export const featuresList = [
  {
    icon: "MessageCircle",
    title: "Sammie Voice & Text Assistant",
    description: "24/7 answers to any parenting question, in 80+ languages.",
  },
  {
    icon: "Music",
    title: "Geno Song Generator",
    description: "Personalized lullabies using your child's name.",
  },
  {
    icon: "BookOpen",
    title: "Stacey Storybook Creator",
    description: "Custom illustrated stories featuring your child.",
  },
  {
    icon: "Target",
    title: "Milestone Tracker",
    description: "Log developmental milestones and spot delays early.",
  },
  {
    icon: "MapPin",
    title: "Local Resource Finder",
    description: "Quick links to SNAP, WIC, food banks, childcare help, and clinics in Salt Lake County.",
  },
  {
    icon: "PenTool",
    title: "Parenting Journal",
    description: "A private space to capture the moments you don't want to forget.",
  },
  {
    icon: "Lightbulb",
    title: "Daily Tips",
    description: "Short, science-backed parenting tips delivered each day.",
  },
  {
    icon: "Sun",
    title: "Screen-Free Weekends",
    description: "Location- and weather-aware activity ideas that get the whole family off devices and together.",
  },
  {
    icon: "Smartphone",
    title: "SMS Access",
    description: "Text-based access to Sammie for families without a smartphone.",
  },
  {
    icon: "Users",
    title: "Cohort Portal",
    description: "For families in Legacy of Literacy Circles and other group programs.",
  },
];

// Stats for "Why Birth to Three" section
export const birthToThreeStats = [
  {
    number: "80%",
    label: "of a child's brain develops by age three",
  },
  {
    number: "1M+",
    label: "neural connections formed every second in the first years",
  },
  {
    number: "30M",
    label: "word gap between children by kindergarten, closed by early reading",
  },
];
