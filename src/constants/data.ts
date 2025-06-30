import { Grades } from "./Grades";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Drone Fleet - Emergency Services",
    desc: "Autonomous drone fleet with remote control capability — in the demo, we connected the app to a drone simulator through a server using a VPN connection.",
    subdesc:
      "System allows controlling multiple drones simultaneously, providing real-time video feed and telemetry data to the emergency services.",
    href: "",
    source: "https://www.youtube.com/watch?v=4woO_ZCdlvg",
    logo: "projects/droneSweep.png",
    logoStyle: {
      backgroundColor: "#b18eff",
      background:
        "linear-gradient(0deg, #B18EFF50, #B18EFF50), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(177, 142, 255, 1)",
      boxShadow: "0px 0px 60px 0px rgba(177, 142, 255, 0.3)",
    },
    tags: [
      {
        id: 1,
        name: "",
        path: "",
      },
     
    ],
  },
  {
    title: "Toni Isopoussu - Portfolio Website",
    desc: "My Portfolio Website, a showcase of my skills, projects, and experience as a software developer.",
    subdesc:
      "Built with modern web technologies, this portfolio highlights interactive 3D elements, smooth animations, and a responsive design for an engaging user experience.",
    href: "",
    source: "",
    logo: "projects/PortfolioMain.png",
    logoStyle: {
      backgroundColor: "#4FC3F7",
      background:
        "linear-gradient(0deg, #4FC3F750, #4FC3F750), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(79, 195, 247, 1)",
      boxShadow: "0px 0px 60px 0px rgba(79, 195, 247, 0.3)",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 4,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "icons/threejs.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "CSS",
        path: "icons/css-3.svg",
      },
      {
        id: 8,
        name: "Prettier",
        path: "icons/prettier.svg",
      },
      {
        id: 9,
        name: "ESLint",
        path: "icons/eslint.svg",
      },
      {
        id: 10,
        name: "Vite",
        path: "icons/vite.svg",
      },
    ],
  },
  {
    title: "Tetris Game - Grade 4",
    desc: "Built by using Arduino and C++ with a 3D printed case and TFT screen.",
    subdesc:
      "Starting point of my journey as a software developer. that reflects my early passion for all kinds of coding.",
    href: "https://github.com/Pultti/Tetris",
    source: "https://www.youtube.com/watch?v=cEtRItxPt2c",
    logo: "projects/tetris.png",
    logoStyle: {
      backgroundColor: "#A0F0BC",
      background:
        "linear-gradient(0deg, #A0F0BC50, #A0F0BC50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(208, 213, 221, 0.85) 100%)",
      border: "0.2px solid rgba(160, 240, 188, 1)",
      boxShadow: "0px 0px 60px 0px rgba(135, 234, 174, 0.4)",
    },
    tags: [
      {
        id: 1,
        name: "",
        path: "",
      },
    ],
  },
  {
    title: "ATM Simulator - Grade 5",
    desc: "Local ATM sim build with C++, node and MySQL database.",
    subdesc:
      "Functioning ATM system that allows users to perform basic banking operations like balance inquiries, deposits, and withdrawals.",
    href: "https://github.com/Pultti/ATMSimulator",
    source: "https://www.youtube.com/watch?v=UcAwD9BDibA",
    logo: "projects/atm2.png",
    logoStyle: {
      backgroundColor: "#FF4C4C",
      background:
        "linear-gradient(0deg, #FF4C4C50, #FF4C4C50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 200, 200, 0.85) 100%)",
      border: "0.2px solid rgba(255, 76, 76, 1)",
      boxShadow: "0px 0px 60px 0px rgba(183, 28, 28, 0.4)",
    },
    tags: [
      {
        id: 1,
        name: "",
        path: "",
      },
    
    ],
  },
   {
    title: "Movie Review App - Grade 5",
    desc: "React based web-application with a PostgreSQL database that uses open data sources such as TMDB",
    subdesc:
      "It includes features for rating movies/actors, advanced user management, filtering, group creation and profile page.",
    href: "https://github.com/TVT22-6/movieApp",
    source: "https://www.youtube.com/watch?v=UcAwD9BDibA",
    logo: "projects/movieRev.png",
    logoStyle: {
      backgroundColor: "#FFE066",
      background:
        "linear-gradient(0deg, #FFE06650, #FFE06650), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,241,200,0.85) 100%)",
      border: "0.2px solid rgba(255,224,102,1)",
      boxShadow: "0px 0px 60px 0px rgba(255,224,102,0.4)",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
    ],
  },
   {
    title: "ParKing - Grade 5",
    desc: "React mobile application with Firebase database that uses open data sources such as Google Firebase, -maps & Paypal",
    subdesc:
      "It includes features for booking parking spots, advanced user management, filtering, group creation and profile page and functiong payment system.",
    href: "https://github.com/Pultti/MarketApp_OAMK",
    source: "https://www.youtube.com/watch?v=IaRxllwPsK8&t=2s",
    logo: "projects/ParKing.png",
    logoStyle: {
      backgroundColor: "#FF6347",
      background: "linear-gradient(0deg, #FF634750, #FF634750), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,220,220,0.85) 100%)",
      border: "0.2px solid rgba(255,99,71,1)",
      boxShadow: "0px 0px 60px 0px rgba(255,99,71,0.4)",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
  
    ],
  },
  {
    title: "DogCare - Grade 5",
    desc: "Kotlin mobile application with Firebase database that uses open data sources such as Google Firebase",
    subdesc:
      "Contains different kind of features and alert system for dog owners, such as random generator that suggests activities",
    href: "https://github.com/Pultti/DogCare_OAMK",
    source: "https://www.youtube.com/watch?v=mPOYRM5Cv1Q&t=391s",
    logo: "projects/dogCare.png",
    logoStyle: {
     backgroundColor: "#F783AC",
     background: "linear-gradient(0deg, #F783AC50, #F783AC50), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,220,235,0.85) 100%)",
     border: "0.2px solid rgba(247,131,172,1)",
     boxShadow: "0px 0px 60px 0px rgba(247,131,172,0.4)",
    },
    tags: [
      {
        id: 1,
        name: "",
        path: "",
      },
  
    ],
  },
    {
    title: "ToDo App - Grade 5",
    desc: "React mobile application with Firebase database that uses open data sources such as BoredAPI",
    subdesc:
      "Assists in time management and gives break activity, ensuring users can efficiently organize their day.",
    href: "https://github.com/Pultti/React-ToDoApp-Firebase",
    source: "https://www.youtube.com/watch?v=IkISV0GGR3s&source_ve_path=Mjg2NjY",
    logo: "projects/toDo.png",
    logoStyle: {
      backgroundColor: "#1565C0",
      background: "linear-gradient(0deg, #1565C050, #1565C050), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(200,220,255,0.85) 100%)",
      border: "0.2px solid rgba(21,101,192,1)",
      boxShadow: "0px 0px 60px 0px rgba(21,101,192,0.4)",
    },
    tags: [
     {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
  
    ],
  },
   {
    title: "Advanced software development - Grade 5",
    desc: "Python application that plays around with OS concepts and execution",
    subdesc:
      "Process Management, Storage Management, Memory Management, Process Scheduling, Multithreading, Scheduling Criteria, Semaphores, Monitors, Mutex Locks, Memory segmentation ",
    href: "https://github.com/Pultti/React-ToDoApp-Firebase",
    source: "https://www.youtube.com/watch?v=IkISV0GGR3s&source_ve_path=Mjg2NjY",
    logo: "projects/python.png",
    logoStyle: {
      backgroundColor: "#63D2A1",
      background: "linear-gradient(0deg, #63D2A150, #63D2A150), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(200,255,235,0.85) 100%)",
      border: "0.2px solid rgba(99,210,161,1)",
      boxShadow: "0px 0px 60px 0px rgba(99,210,161,0.4)",
    },
    tags: [
      {
        id: 1,
        name: "",
        path: "",
      },
  
    ],
  },
  
];

export const workExperiences = [
  {
    id: 1,
    company: "Demola - 2 Months",
    position: "Systems engineer",
    duration: "February 2025 - April 2025",
    icon: "Demola.png",
    technologies: [
      "QML",
      "C++",
      "Qt",
      "SITL",
      "Virtual Machines",
      "QGroundControl",
      "WSL",
      "Linux",
      "Windows",
      "IOT",
      "Drones",
      "MAVProxy",
      "MAVSDK",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Git/GitHub",
      "Kanban",
      "Discord",
      "CI/CD",
      "Docker",
      "Figma",
    ],
    projects: [
      {
        name: "Drone fleet - https://www.youtube.com/watch?v=4woO_ZCdlvg",
        description: "Autonomous drone fleet that can be remotely controlled by the emergency services",
        link: "https://www.youtube.com/watch?v=4woO_ZCdlvg",
        details: [
      "Rakensin simulaattori ⇄ serveri ⇄ drone -kokonaisuuden viikossa – kaksi 8 hengen tiimiä haki ratkaisua 2 kk.",
      "Kirjoitin step-by-step-ohjeet ympäristön ja yhteyksien pystytykseen.",
      "VPN-etäohjaus & serveriyhteys drooneille.",
      "Raspberry Pi-kamerastream lennonaikaiseen UI:hin.",
      "Viilasin dashboardin responsiiviseksi.",
      "Kokosin, johdotin ja konfiguroin X500 v2-droonin.",
      "Dokumentoin teoreettisen lennonohjauspohjan jatkokehitykselle."
      ]
      },
    ],
  },
  {
    id: 2,
    company: "Oulu university of Applied Sciences - 4,7/5 GPA",
    position: "Information and communication technology engineer",
    duration: "August 2022 - April 2025",
    icon: "oamk.png",
    technologies: [
      "C",
      "C++",
      "C#",
      "Java",
      "Javascript",
      "Web dev.",
      "React",
      "Kotlin",
      "SQL",
      "Python",
      "Scripting",
      "Linux",
      "WSL",
      "Windows",
      "VMs",
      "Pen. Testing",
      "Node.js",
      "Spring boot",
      "REST APIs",
      "Git/GitHub",
      "CI/CD",
      "Agile",
      "Slack/Discord/Teams",
      "Cloud",
      "IOT",
    ],
     projects: [
      {
        name: "Arduino Tetris - C",
        description: "",
        link: "",
      },
       {
        name: "Bank simulator - C++/Node/MySQL",
        description: "",
        link: "",
      },
        {
        name: "Quiz game - Java/Springboot/REST API",
        description: "",
        link: "",
      },
       {
        name: "Movie review app - React/PostGreSQL",
        description: "",
        link: "",
      },
       {
        name: "Mobile apps - React/Kotlin/Firebase",
        description: "",
        link: "",
      },
       {
        name: "Mobile Todo App - React/Firebase",
        description: "",
        link: "",
      },
       {
        name: "Scripting - Python/Data analysis",
        description: "",
        link: "",
      },
       {
        name: "Python - OS concepts and execution",
        description: "",
        link: "",
      },
      {
        name: "Pen testing - VMs/Kali/Labs",
        description: "",
        link: "",
      },
       {
        name: "Thesis - https://www.theseus.fi/handle/10024/873878?show=full",
        description: "",
        link: "",
      },
    ],
    grades: Grades,
  
  },
    {
    id: 3,
    company: "Performance Sales Oy - 4 years 10 months",
    position: "Store Manager",
    duration: "May 2019 - February 2024",
    icon: "fitwarehouse.png",
    technologies: [
      "Windows",
      "Excel",
      "Budjeting",
      "Documentation",
      "Accounting",
      "Sales",
      "Customer Service",
      "Managing"
    ],
  },
  {
    id: 4,
    company: "Enia - 2 years 10 months",
    position: "Sales person",
    duration: "July 2016 - April 2019",
    icon: "",
    technologies: [
    "Resilience",
    "Negotiation",
    "Goal-Oriented Mindset",
    "Active Listening",
    "Persuasion",
    "Problem-Solving",
  ],
   },
     {
    id: 5,
    company: "Military - 1 Year",
    position: "Sub-Sergeant",
    duration: "August 2015 - July 2016",
    icon: "",
    technologies: [
    "Leadership",
    "Teamwork",
    "Physical & Mental Endurance",
    "Stress Management",
    "Decision-Making",
    "Discipline",
    "Problem-Solving",
    "Adaptability",
    "Situational Awareness",
  ],
   },
  {
    id: 6,
    company: "High school - Kastelli",
    position: "",
    duration: "August 2012 - June 2015",
    icon: "",
    technologies: [
    "Discipline",
    "Critical Thinking",
    "Problem-Solving"
    ],
  },
];

export const socialLinks = [
  { url: "https://github.com/Pultti" },
  { url: "https://www.linkedin.com/in/toni-isopoussu-toni/" },
];

export const skills = [
  "React",
  "Java",
  "REST APIs",
  "JavaScript",
  "C++",
  "C#",
  "C",
  "Python",
  "Jira",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "Git",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Azure",
  "Testing",
  "Scrum",
  "Agile",
  "Scripting",
  "GitHub",
  "Confluence",
  "TailwindCSS",
  "Vs Code",
  "Algorithms",
  "UI/UX",
  "SVN",
  "Prettier",
  "Vercel",
  "Docker",
  "Figma",
  "Kali Linux",
  "WSL",
  "Linux",
  "Virtual machines",
  "Slack",
  "Markdown",
];


export const skillCards = [
  /* ------------- Languages & DB ------------- */
  { text: "C++",              icon: "cplusplus",            fill: "#00599C",  iconFill: "#fff", since: 2022 },
  { text: "C",                icon: "c",                    fill: "#A8B9CC",  iconFill: "#00599C", since: 2022 },
  { text: "C#",               icon: "csharp",               fill: "#239120",  iconFill: "#fff", since: 2022 },
  { text: "MySQL",            icon: "mysql",                fill: "#4479A1",  iconFill: "#fff", since: 2022 },
  { text: "Microsoft SQL",    icon: "microsoftsqlserver",   fill: "#CC2927",  iconFill: "#fff", since: 2022 },
  { text: "PostgreSQL",       icon: "postgresql",           fill: "#4169E1",  iconFill: "#fff", since: 2022 },
  { text: "Visual Basic",     icon: "dotnet",               fill: "#512BD4",  iconFill: "#fff", since: 2022 },
  { text: "JavaScript",       icon: "javascript",           fill: "#F7DF1E",  iconFill: "#000", since: 2022 },
  { text: "React",            icon: "react",                fill: "#61DAFB",  iconFill: "#000", since: 2022 },
  { text: "HTML5",            icon: "html5",                fill: "#E34F26",  iconFill: "#fff", since: 2022 },
  { text: "CSS3",             icon: "css3",                 fill: "#1572B6",  iconFill: "#fff", since: 2022 },
  { text: "Python",           icon: "python",               fill: "#3776AB",  iconFill: "#FFD845", since: 2022 },
  { text: "Bash / Scripting", icon: "gnubash",              fill: "#4EAA25",  iconFill: "#fff", since: 2022 },
  { text: "Kotlin",           icon: "kotlin",               fill: "#7F52FF",  iconFill: "#fff", since: 2022 },
  { text: "Java",             icon: "java",                 fill: "#007396",  iconFill: "#fff", since: 2022 },

  /* ------------- Testing ------------- */
  { text: "Mocha-Chai",       icon: "mocha",                fill: "#8D6748",  iconFill: "#fff", since: 2022 },
  { text: "Robot Framework",  icon: "robotframework",       fill: "#00E368",  iconFill: "#000", since: 2022 },

  /* ------------- Soft / Project skills ------------- */
  { text: "Software Engineering", icon: "skillshare",       fill: "#00FF88",  iconFill: "#000", since: 2022 },
  { text: "Project Managing",     icon: "asana",            fill: "#273347",  iconFill: "#fff", since: 2022 },
  { text: "Team Collaboration",   icon: "teamviewer",       fill: "#0E62D0",  iconFill: "#fff", since: 2022 },
  { text: "Clear Documentation",  icon: "readthedocs",      fill: "#8CA1AF",  iconFill: "#000", since: 2022 },
  { text: "Lean Principles",      icon: "leanpub",          fill: "#02B875",  iconFill: "#fff", since: 2022 },

  /* ------------- Agile / Boards ------------- */
  { text: "Agile Methodologies",  icon: "jira",             fill: "#0052CC",  iconFill: "#fff", since: 2022 },
  { text: "Jira",                 icon: "jira",             fill: "#0052CC",  iconFill: "#fff", since: 2022 },
  { text: "Kanban",               icon: "trello",           fill: "#0052CC",  iconFill: "#fff", since: 2022 },
  { text: "Trello",               icon: "trello",           fill: "#0052CC",  iconFill: "#fff", since: 2022 },
  { text: "Scrum",                icon: "scrumalliance",    fill: "#6C757D",  iconFill: "#fff", since: 2022 },
  { text: "Confluence",           icon: "confluence",       fill: "#172B4D",  iconFill: "#fff", since: 2022 },
  { text: "Slack",                icon: "slack",            fill: "#4A154B",  iconFill: "#fff", since: 2022 },
  { text: "Microsoft Teams",      icon: "microsoftteams",   fill: "#6264A7",  iconFill: "#fff", since: 2022 },
  { text: "Discord",              icon: "discord",          fill: "#5865F2",  iconFill: "#fff", since: 2022 },

  /* ------------- Version control & CI ------------- */
  { text: "Git",                  icon: "git",              fill: "#F05032",  iconFill: "#fff", since: 2022 },
  { text: "SVN",                  icon: "subversion",       fill: "#809CC9",  iconFill: "#fff", since: 2022 },
  { text: "CI/CD",                icon: "circleci",         fill: "#343434",  iconFill: "#fff", since: 2022 },

  /* ------------- IDE & Tools ------------- */
  { text: "VS Code",              icon: "visualstudiocode", fill: "#007ACC",  iconFill: "#fff", since: 2022 },
  { text: "Visual Studio",        icon: "visualstudio",     fill: "#5C2D91",  iconFill: "#fff", since: 2022 },
  { text: "SQL Mgmt Studio",      icon: "microsoftsqlserver",fill: "#CC2927", iconFill: "#fff", since: 2022 },
  { text: "Babylon Translator",   icon: "babel",            fill: "#F9DC3E",  iconFill: "#000", since: 2022 },
  { text: "Android Studio",       icon: "androidstudio",    fill: "#3DDC84",  iconFill: "#fff", since: 2022 },
  { text: "Qt Creator",           icon: "qt",               fill: "#41CD52",  iconFill: "#fff", since: 2022 },

  /* ------------- OS / Infra ------------- */
  { text: "Cloud",                icon: "googlecloud",      fill: "#4285F4",  iconFill: "#fff", since: 2022 },
  { text: "Virtual Machines",     icon: "virtualbox",       fill: "#183A61",  iconFill: "#fff", since: 2022 },
  { text: "Linux",                icon: "linux",            fill: "#FCC624",  iconFill: "#000", since: 2022 },
  { text: "Kali Linux",           icon: "kalilinux",        fill: "#557C94",  iconFill: "#fff", since: 2022 },
  { text: "Windows",              icon: "windows",          fill: "#0078D6",  iconFill: "#fff", since: 2022 },
  { text: "Android",              icon: "android",          fill: "#3DDC84",  iconFill: "#fff", since: 2022 }
];