/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION & DATA SOURCE
 * Lavu Nandakishore Chowdary - Computer Science & AI/ML Student
 * ====================================================================
 */

export const personalInfo = {
  // Full Name
  name: "Lavu Nandakishore Chowdary",
  
  // Initials for avatar monogram
  initials: "LNC",
  
  // Profile picture
  profileImage: "/profile.jpg",
  
  // Student-focused headline / title
  title: "Computer Science & AI/ML Student",
  
  // Tagline & core interests
  tagline: "Interested in Artificial Intelligence, Machine Learning, Web Development and building practical technology projects.",
  
  // Availability status (empty - not explicitly provided)
  availabilityStatus: "",
  
  // Location (empty - not explicitly provided)
  location: "",
  
  // Contact info
  email: "lnandakishorechowdary@gmail.com",
  phone: "",
  
  // Social media profile links (empty - no verified URLs provided)
  socialLinks: {},

  // Path to verified resume file
  resumeUrl: "/sample-resume.pdf",
  resumeFileName: "Lavu_Nandakishore_Chowdary_Resume.pdf"
};

/**
 * 2. ABOUT ME SECTION DATA
 */
export const aboutData = {
  sectionTitle: "About Me",
  sectionSubtitle: "Computer Science & AI/ML engineering student at GIET University",
  
  paragraphs: [
    "I am an engineering student at GIET University pursuing Computer Science with a specialization in Artificial Intelligence and Machine Learning (CSE-AIML, Batch: 2025-2029).",
    "I am interested in Computer Science, Artificial Intelligence, Machine Learning, web development, and building practical technology projects.",
    "My focus is on understanding core computer science fundamentals, exploring machine learning concepts, and developing practical software solutions."
  ],

  stats: [
    { label: "Degree", value: "B.Tech", description: "Computer Science & Engineering" },
    { label: "Specialization", value: "AI & ML", description: "GIET University" },
    { label: "Batch", value: "2025-29", description: "Undergraduate Student" },
    { label: "Focus Areas", value: "Core CS", description: "AI/ML & Web Development" }
  ],

  pillars: [
    {
      title: "Problem Solving",
      description: "Approaching challenges systematically with data structures, algorithms, and structured programming."
    },
    {
      title: "AI & Machine Learning",
      description: "Exploring foundational machine learning concepts and intelligent systems."
    },
    {
      title: "Web Development",
      description: "Building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React."
    },
    {
      title: "Continuous Learning",
      description: "Actively studying emerging computer science technologies and engineering best practices."
    }
  ]
};

/**
 * 3. SKILLS SECTION DATA
 */
export const skillsData = {
  sectionTitle: "Skills & Areas of Interest",
  sectionSubtitle: "Core technologies, programming languages, and topics I work with and study",
  
  categories: [
    {
      name: "Programming & Core CS",
      description: "Foundational languages, database systems, and core computer science concepts",
      skills: [
        { name: "C Programming", level: 85, icon: "Code2" },
        { name: "Database Management Systems (DBMS)", level: 80, icon: "Database" },
        { name: "Technical Communication", level: 85, icon: "Users" }
      ]
    },
    {
      name: "Web Technologies",
      description: "Building interactive, responsive web applications and interfaces",
      skills: [
        { name: "HTML", level: 90, icon: "Layout" },
        { name: "CSS", level: 85, icon: "Palette" },
        { name: "JavaScript", level: 85, icon: "FileCode" },
        { name: "React", level: 80, icon: "Layers" },
        { name: "Web Technology", level: 85, icon: "MonitorSmartphone" }
      ]
    },
    {
      name: "AI & Machine Learning",
      description: "Core concepts and exploratory topics in intelligent systems",
      skills: [
        { name: "Artificial Intelligence", level: 80, icon: "Cpu" },
        { name: "Machine Learning", level: 80, icon: "Sparkles" }
      ]
    }
  ]
};

/**
 * 4. PROJECTS SECTION DATA
 */
export const projectsData = {
  sectionTitle: "Project Ideas & Concepts",
  sectionSubtitle: "Explorations, prototypes, and practical technology concepts I have explored and worked on",
  
  categories: ["All", "AI/ML", "Web/App", "Hardware/IoT"],

  projects: [
    {
      id: "project-1",
      title: "Live Facial Emotion & Attentiveness Monitor for Online Classes",
      category: "AI/ML",
      tagline: "Exploration of computer vision techniques for engagement and emotion monitoring in virtual classrooms",
      description: "A conceptual system designed to analyze facial emotion cues and attentiveness markers to help educators understand student engagement in remote learning environments.",
      image: null,
      tags: ["AI / Machine Learning", "Computer Vision", "Facial Analysis"],
      features: [
        "Facial landmark analysis and attentiveness indicator exploration",
        "Framework for real-time classroom engagement monitoring",
        "Focus on non-intrusive evaluation and privacy-conscious design"
      ],
      liveUrl: null,
      githubUrl: null,
      featured: true
    },
    {
      id: "project-2",
      title: "One Gram Gold Shop Audit App",
      category: "Web/App",
      tagline: "Inventory audit and record-keeping application concept for retail jewelry management",
      description: "A practical software concept aimed at streamlining daily auditing, stock tracking, and ledger accuracy for one-gram gold and jewelry retail shops.",
      image: null,
      tags: ["Web Technology", "DBMS", "JavaScript", "React"],
      features: [
        "Structured inventory tracking and item verification workflow",
        "Stock audit and discrepancy management concept",
        "Clean, intuitive interface for fast daily retail operations"
      ],
      liveUrl: null,
      githubUrl: null,
      featured: true
    },
    {
      id: "project-3",
      title: "Paid Quantity Dispensing Device",
      category: "Hardware/IoT",
      tagline: "Automated dispensing system concept linking payment verification with precise quantity metering",
      description: "An engineering concept that integrates automated quantity metering and transaction verification to dispense specified volumes accurately upon confirmed payment.",
      image: null,
      tags: ["C Programming", "Embedded Logic", "Automation"],
      features: [
        "Quantity metering and dispensing mechanism concept",
        "Transaction-triggered control logic",
        "Precision dispensing and hardware safety checks"
      ],
      liveUrl: null,
      githubUrl: null,
      featured: true
    }
  ]
};

/**
 * 5. EDUCATION SECTION DATA
 */
export const educationData = {
  sectionTitle: "Education",
  sectionSubtitle: "Academic background and engineering studies",
  
  timeline: [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "GIET University",
      location: "GIET University",
      period: "2025 - 2029",
      grade: "Undergraduate Student",
      description: "Undergraduate engineering program focusing on computer science foundations, algorithms, artificial intelligence, and machine learning principles.",
      highlights: [
        "Department of Computer Science & Engineering (CSE-AIML)",
        "Focusing on programming languages, algorithms, and data management",
        "Exploring applied AI/ML and practical web technology solutions"
      ],
      courses: [
        "C Programming",
        "JavaScript",
        "HTML & CSS",
        "React",
        "Artificial Intelligence & Machine Learning",
        "Web Technology",
        "Database Management Systems (DBMS)",
        "Technical Communication"
      ]
    }
  ]
};

/**
 * 6. CERTIFICATIONS SECTION DATA
 */
export const certificationsData = {
  sectionTitle: "Certifications",
  sectionSubtitle: "Verified academic and technical credentials",
  certifications: []
};

/**
 * 7. ACHIEVEMENTS SECTION DATA
 */
export const achievementsData = {
  sectionTitle: "Honors & Achievements",
  sectionSubtitle: "Academic and technical milestones",
  achievements: []
};

/**
 * 8. CONTACT SECTION DATA
 */
export const contactData = {
  sectionTitle: "Get In Touch",
  sectionSubtitle: "Interested in discussing technology, AI/ML, or engineering projects? Reach out!",
  
  infoCards: [],

  formPlaceholders: {
    name: "Your Name",
    email: "Your Email Address",
    subject: "Subject of inquiry",
    message: "Write your message here..."
  }
};

/**
 * 9. RESUME SECTION DATA
 */
export const resumeData = {
  sectionTitle: "Resume",
  sectionSubtitle: "Academic background and curriculum vitae",
  fileName: "Lavu_Nandakishore_Chowdary_Resume.pdf",
  fileSize: "PDF Document",
  lastUpdated: "2026",
  downloadUrl: "/sample-resume.pdf",
  highlights: [
    "Contributed to the development of an academic software project.",
    "Developed frontend components and user interfaces using React.",
    "Collaborated within a four-member team to coordinate and deliver project tasks.",
    "Assisted with database design and management."
  ]
};
