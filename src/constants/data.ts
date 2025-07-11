import { Grades } from "./Grades";
import { droneFleetInfo, tetrisInfo, atmInfo, movieAppInfo, ParKingInfo, dogCareInfo, ToDoAppInfo, PythonOsInfo, OldPortfolioInfo, tryHackMeInfo } from "../constants/projectInfo";

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


export const socialLinks = [
  { url: "https://github.com/Pultti" },
  { url: "https://www.linkedin.com/in/toni-isopoussu-toni/" },
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
        name: "Autonomous drone fleet",
        description: "Autonomous drone fleet that can be remotely controlled by the emergency services",
        link: "https://www.youtube.com/watch?v=4woO_ZCdlvg",
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
        name: "Movie review app - React/Node/PostGreSQL",
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
        name: "Pen. testing - VMs/Kali/Labs",
        description: "",
        link: "",
      },
       {
        name: "Thesis - User authentication in the .NET environment",
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
  ],
   },
  {
    id: 6,
    company: "Kastelli - 3 years",
    position: "High School",
    duration: "August 2012 - June 2015",
    icon: "",
    technologies: [
    "Discipline",
    "Critical Thinking",
    "Problem-Solving"
    ],
  },
];



export const myProjects = [
  {
    title: "Drone Fleet - Emergency Services",
    desc: "Autonomous drone fleet with remote control capability — in the demo, we connected the app to a drone simulator through a server using a VPN connection.",
    subdesc:
      "System allows controlling multiple drones simultaneously, providing real-time video feed and telemetry data to the emergency services.",
    href: "https://github.com/mavlink/qgroundcontrol",
    source: "https://www.youtube.com/watch?v=4woO_ZCdlvg",
    logo: "projects/droneFleet.png",
    info: droneFleetInfo,
    logoStyle: {
      backgroundColor: "#b18eff",
      background:
        "linear-gradient(0deg, #B18EFF50, #B18EFF50), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(177, 142, 255, 1)",
      boxShadow: "0px 0px 60px 0px rgba(177, 142, 255, 0.3)",
    },
  tags: [
  { id: 1,  name: "QML",      icon: "qt",        color: "#41CD52" },
  { id: 2,  name: "C++",      icon: "cplusplus", color: "#00599C" },
  { id: 3,  name: "Python",   icon: "python",    color: "#3776AB" },
  { id: 5,  name: "Git",      icon: "git",      color: "#F05032" },
  { id: 6,  name: "Kanban",   icon: "trello", color: "#3179CB" },
  { id: 7,  name: "Discord",  icon: "discord",  color: "#5865F2" },
  { id: 8,  name: "Docker",   icon: "docker",   color: "#2496ED" },
  { id: 9,  name: "WSL",      icon: "microsoft", color: "#0078D6" },
  { id: 10, name: "MAVSDK",   icon: "digitalocean", color: "#0080FF" },
  { id: 11, name: "IoT",      icon: "raspberrypi", color: "#F59E0B" },
  { id: 12, name: "GitHub",          icon: "github",          color: "#181717" }
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
  { id: 1,  name: "VS Code",     icon: "visualstudiocode", color: "#007ACC" },
  { id: 2,  name: "React.js",    icon: "react",            color: "#61DAFB" },
  { id: 3,  name: "TailwindCSS", icon: "tailwindcss",      color: "#38BDF8" },
  { id: 4,  name: "TypeScript",  icon: "typescript",       color: "#3178C6" },
  { id: 5,  name: "JavaScript",  icon: "javascript",       color: "#F7DF1E" },
  { id: 6,  name: "Three.js",    icon: "threedotjs",     color: "#000000" },
  { id: 7,  name: "HTML",        icon: "html5",            color: "#E34F26" },
  { id: 8,  name: "CSS",         icon: "css3",             color: "#1572B6" },
  { id: 9,  name: "Prettier",    icon: "prettier",         color: "#F7B93E" },
  { id: 10, name: "ESLint",      icon: "eslint",           color: "#4B32C3" },
  { id: 11, name: "Vite",        icon: "vite",             color: "#646CFF" },
  { id: 12, name: "GitHub",          icon: "github",          color: "#181717" }
],
  },
  {
    title: "Tetris Game",
    desc: "Built by using Arduino and C++ with a 3D printed case and TFT screen.",
    subdesc:
      "Starting point of my journey as a software developer. that reflects my early passion for all kinds of coding.",
    href: "https://github.com/Pultti/Tetris",
    source: "https://www.youtube.com/watch?v=cEtRItxPt2c",
    info: tetrisInfo,
    logo: "projects/tetris.png",
    logoStyle: {
      backgroundColor: "#A0F0BC",
      background:
        "linear-gradient(0deg, #A0F0BC50, #A0F0BC50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(208, 213, 221, 0.85) 100%)",
      border: "0.2px solid rgba(160, 240, 188, 1)",
      boxShadow: "0px 0px 60px 0px rgba(135, 234, 174, 0.4)",
    },
    tags: [
    { id: 1,  name: "C",           icon: "c",           color: "#A8B9CC" },
    { id: 2,  name: "Arduino IDE", icon: "arduino",     color: "#00979D" },
  ],
  },
  {
    title: "ATM Simulator",
    desc: "Local ATM sim. build with C++, Node and MySQL database.",
    subdesc:
      "Functioning ATM system that allows users to perform basic banking operations like balance inquiries, deposits, and withdrawals.",
    href: "https://github.com/Pultti/ATMSimulator",
    source: "https://www.youtube.com/watch?v=UcAwD9BDibA",
    info: atmInfo,
    logo: "projects/atm.png",
    logoStyle: {
      backgroundColor: "#FF4C4C",
      background:
        "linear-gradient(0deg, #FF4C4C50, #FF4C4C50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 200, 200, 0.85) 100%)",
      border: "0.2px solid rgba(255, 76, 76, 1)",
      boxShadow: "0px 0px 60px 0px rgba(183, 28, 28, 0.4)",
    },
    tags: [
  { id: 1,  name: "C++",      icon: "cplusplus", color: "#00599C" },
  { id: 2,  name: "JavaScript",       icon: "javascript", color: "#F7DF1E" },
  { id: 3,  name: "Node",          icon: "nodedotjs", color: "#339933" },
  { id: 4,  name: "VS Code",          icon: "visualstudiocode", color: "#007ACC" },
  { id: 5,  name: "MySQL",            icon: "mysql",       color: "#4479A1" },
  { id: 6,  name: "Postman",          icon: "postman",     color: "#FF6C37" },
   { id: 7,  name: "Qt", icon: "qt",          color: "#41CD52" },
   { id: 8, name: "GitHub",          icon: "github",          color: "#181717" }
]
  },
   {
    title: "Movie Review App",
    desc: "React based web-application with a PostgreSQL database that uses open data sources such as TMDB",
    subdesc:
      "It includes features for rating movies/actors, advanced user management, filtering, group creation and profile page.",
    href: "https://github.com/TVT22-6/movieApp",
    source: "https://www.youtube.com/watch?v=RMH5vb1cAJQ",
    info: movieAppInfo,
    logo: "projects/movieRev.png",
    logoStyle: {
      backgroundColor: "#FFE066",
      background:
        "linear-gradient(0deg, #FFE06650, #FFE06650), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,241,200,0.85) 100%)",
      border: "0.2px solid rgba(255,224,102,1)",
      boxShadow: "0px 0px 60px 0px rgba(255,224,102,0.4)",
    },
    tags: [
  { id: 1,  name: "VS Code",           icon: "visualstudiocode", color: "#007ACC" },
  { id: 2,  name: "React",             icon: "react",        color: "#61DAFB" },
  { id: 3,  name: "JavaScript",        icon: "javascript",   color: "#F7DF1E" },
  { id: 4,  name: "Node.js",           icon: "nodedotjs",    color: "#339933" },
  { id: 5,  name: "PostgreSQL",        icon: "postgresql",   color: "#336791" },
  { id: 6,  name: "Firebase",          icon: "firebase",     color: "#FFCA28" },
  { id: 7,  name: "TMDB",              icon: "themoviedatabase", color: "#01B4E4" },
  { id: 8,  name: "Postman",           icon: "postman",      color: "#FF6C37" },
  { id: 9,  name: "Mocha",             icon: "mocha",        color: "#8D6748" },
  { id: 10, name: "Chai",              icon: "chai",         color: "#A30701" },
  { id: 11, name: "GitHub",          icon: "github",          color: "#181717" }
],
  },
   {
    title: "ParKing",
    desc: "React mobile application with Firebase database that uses open data sources such as Google Firebase, -maps & Paypal",
    subdesc: "It includes features for booking parking spots, advanced user management, filtering, group creation, profile page and functioning payment system.",
    href: "https://github.com/Pultti/MarketApp_OAMK",
    source: "https://www.youtube.com/watch?v=IaRxllwPsK8&t=2s",
    info: ParKingInfo,
    logo: "projects/ParKing.png",
    logoStyle: {
      backgroundColor: "#FF6347",
      background: "linear-gradient(0deg, #FF634750, #FF634750), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,220,220,0.85) 100%)",
      border: "0.2px solid rgba(255,99,71,1)",
      boxShadow: "0px 0px 60px 0px rgba(255,99,71,0.4)",
    },
    tags: [
  { id: 1,  name: "VS Code",       icon: "visualstudiocode", color: "#007ACC" },
  { id: 2,  name: "React Native",  icon: "react",            color: "#61DAFB" },
  { id: 3,  name: "Firebase",      icon: "firebase",         color: "#FFCA28" },
  { id: 4,  name: "Google Maps",   icon: "googlemaps",       color: "#4285F4" },
  { id: 5,  name: "PayPal",        icon: "paypal",           color: "#00457C" },
  { id: 6, name: "GitHub",          icon: "github",          color: "#181717" }
],
  },
  {
    title: "DogCare",
    desc: "Kotlin mobile application with Firebase database that uses open data sources such as Google Firebase",
    subdesc:
      "Contains different kind of features and alert system for dog owners, such as random generator that suggests activities",
    href: "https://github.com/Pultti/DogCare_OAMK",
    source: "https://www.youtube.com/watch?v=mPOYRM5Cv1Q&t=391s",
    info: dogCareInfo,
    logo: "projects/dogCare.png",
    logoStyle: {
     backgroundColor: "#F783AC",
     background: "linear-gradient(0deg, #F783AC50, #F783AC50), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,220,235,0.85) 100%)",
     border: "0.2px solid rgba(247,131,172,1)",
     boxShadow: "0px 0px 60px 0px rgba(247,131,172,0.4)",
    },
    tags: [
  { id: 1,  name: "Android Studio", icon: "androidstudio", color: "#3DDC84" },
  { id: 2,  name: "Kotlin",         icon: "kotlin",        color: "#7F52FF" },
  { id: 3,  name: "Firebase",       icon: "firebase",      color: "#FFCA28" },
  { id: 4, name: "GitHub",          icon: "github",          color: "#181717" }
],
  },
    {
    title: "ToDo App",
    desc: "React mobile application with Firebase database that uses open data sources such as BoredAPI",
    subdesc:
      "Assists in time management and gives break activity, ensuring users can efficiently organize their day.",
    href: "https://github.com/Pultti/React-ToDoApp-Firebase",
    source: "https://www.youtube.com/watch?v=IkISV0GGR3s&source_ve_path=Mjg2NjY",
    info: ToDoAppInfo,
    logo: "projects/toDo.png",
    logoStyle: {
      backgroundColor: "#1565C0",
      background: "linear-gradient(0deg, #1565C050, #1565C050), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(200,220,255,0.85) 100%)",
      border: "0.2px solid rgba(21,101,192,1)",
      boxShadow: "0px 0px 60px 0px rgba(21,101,192,0.4)",
    },
    tags: [
  { id: 1, name: "VS Code",  icon: "visualstudiocode", color: "#007ACC" },
  { id: 2, name: "React",    icon: "react",            color: "#61DAFB" },
  { id: 3, name: "Firebase", icon: "firebase",         color: "#FFCA28" },
  { id: 4, name: "GitHub",          icon: "github",          color: "#181717" }
],
  },
   {
    title: "Advanced software development",
    desc: "Python application that plays around with OS concepts and execution",
    subdesc:
      "Process Management \n Storage Management \n Memory Management \n Process Scheduling \n Multithreading \n Scheduling Criteria \n Semaphores \n Monitors \n Mutex Locks \n Memory segmentation ",
    href: "https://github.com/Pultti/AdvancedSoftwareDevelopment",
    info: PythonOsInfo,
    source: "https://www.youtube.com/watch?v=1clCHkYiYHE",
    logo: "projects/python.png",
    logoStyle: {
      backgroundColor: "#63D2A1",
      background: "linear-gradient(0deg, #63D2A150, #63D2A150), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(200,255,235,0.85) 100%)",
      border: "0.2px solid rgba(99,210,161,1)",
      boxShadow: "0px 0px 60px 0px rgba(99,210,161,0.4)",
    },
    tags: [
  { id: 1, name: "VS Code",  icon: "visualstudiocode", color: "#007ACC" },
  { id: 2, name: "Python",    icon: "python",   color: "#3776AB" },
  { id: 3, name: "GitHub",          icon: "github",          color: "#181717" },
 ],
  },
      {
    title: "Old Portfolio",
    desc: "Traditional portfolio website focused on a plain, simple, and effective presentation of my skills and projects.",
    subdesc:
      "Responsive design for mobile and desktop\nInteractive elements\nObject-oriented programming",
    href: "",
    source: "",
    info: OldPortfolioInfo,
    logo: "projects/PortfolioOld.png",
    logoStyle: {
      backgroundColor: "#1565C0",
      background: "linear-gradient(0deg, #1565C050, #1565C050), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(200,220,255,0.85) 100%)",
      border: "0.2px solid rgba(21,101,192,1)",
      boxShadow: "0px 0px 60px 0px rgba(21,101,192,0.4)",
    },
  tags: [
  { id: 1, name: "VS Code",         icon: "visualstudiocode",color: "#007ACC" },
  { id: 2, name: "HTML",            icon: "html5",           color: "#E34F26" },
  { id: 3, name: "CSS",             icon: "css3",            color: "#1572B6" },
  { id: 4, name: "JavaScript",      icon: "javascript",      color: "#F7DF1E" },
  { id: 5, name: "Robot Framework", icon: "robotframework",  color: "#008B8B" },
  { id: 6, name: "GitHub",          icon: "github",          color: "#181717" }
],
},
      {
title: "TryHackMe - Cybersecurity Learning Platform",
desc: "Exploring key cybersecurity topics, ranging from network security to digital forensics.",
subdesc: 
  "Covers offensive and defensive security\nIncludes hands-on labs and walkthroughs\nBuilt to support beginner-friendly learning paths",
    href: "",
    source: "",
    info: tryHackMeInfo,
    logo: "projects/tryHackMe.png",
    logoStyle: {
      backgroundColor: "#1565C0",
      background: "linear-gradient(0deg, #1565C050, #1565C050), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(200,220,255,0.85) 100%)",
      border: "0.2px solid rgba(21,101,192,1)",
      boxShadow: "0px 0px 60px 0px rgba(21,101,192,0.4)",
    },
  tags: [
  { id: 1, name: "Kali Linux",          icon: "linux",            color: "#557C94" },
  { id: 2, name: "Nmap",                icon: "radar",            color: "#00BFA5" },
  ],
},

      {
title: "React Component Library",
desc: "Collection of reusable React Native components, built during a mobile development course and tested mainly on Android.",
subdesc:
  "Includes components like:\n" +
  "- FlatList- & ScrollView layouts\n" +
  "- News display & Weather tracker\n" +
  "- Login screen & Month picker\n" +
  "- Heartpulse calculator\n" +
  "- Currency converter\n" +
  "- Modal windows & Theme changer\n" +
  "- Map integration",
    href: "https://github.com/Pultti/React-Components-Android",
    source: "",
    info: "",
    logo: "projects/reactComps.png",
    logoStyle: {
      backgroundColor: "#1565C0",
      background: "linear-gradient(0deg, #1565C050, #1565C050), linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(200,220,255,0.85) 100%)",
      border: "0.2px solid rgba(21,101,192,1)",
      boxShadow: "0px 0px 60px 0px rgba(21,101,192,0.4)",
    },
    tags: [
  { id: 1, name: "React",    icon: "react",            color: "#61DAFB" },
  { id: 2, name: "VS Code",  icon: "visualstudiocode", color: "#007ACC" },
  { id: 3, name: "GitHub",          icon: "github",          color: "#181717" }
    ],
},
];


export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "CSS",

  "Node.js",
  "Express.js",
  "REST APIs",
  "C++",
  "Java",

  "Microsoft SQL",
  "PostgreSQL",
  "MongoDB",
  "MySQL",

  "Git",
  "GitHub",
  "Docker",
  "CI/CD",

  "Azure",
  "Linux",
  "Windows",
  "VMs",

  "Testing",
  "Algorithms",

  "Agile",
  "Scrum",
];



export const skillCards = [
  /* ------------- Languages & DB ------------- */
  { text: "C++",              icon: "cplusplus",            fill: "#00599C",  iconFill: "#fff", since: 2022 },
  { text: "C",                icon: "c",                    fill: "#A8B9CC",  iconFill: "#00599C", months: 6 },
  { text: "C#",               icon: "csharp",               fill: "#239120",  iconFill: "#fff", months: 6 },
  { text: "MySQL",            icon: "mysql",                fill: "#4479A1",  iconFill: "#fff", months: 6 },
  { text: "Microsoft SQL",    icon: "microsoftsqlserver",   fill: "#CC2927",  iconFill: "#fff", months: 5 },
  { text: "PostgreSQL",       icon: "postgresql",           fill: "#4169E1",  iconFill: "#fff", months: 6 },
  { text: "SQL",              icon: "sqlite",               fill: "#F29111",  iconFill: "#fff", since: 2022 },
  { text: "Databases / APIs", icon: "graphql",              fill: "#FFB300",  iconFill: "#000", since: 2022 },
  { text: "Visual Basic",     icon: "dotnet",               fill: "#512BD4",  iconFill: "#fff", months: 4 },
  { text: "JavaScript",       icon: "javascript",           fill: "#F7DF1E",  iconFill: "#000", months: 24 },
  { text: "TypeScript",       icon: "typescript",           fill: "#3178C6",  iconFill: "#fff", since: 2025 },
  { text: "React",            icon: "react",                fill: "#61DAFB",  iconFill: "#000", since: 2023 },
  { text: "Three.js",         icon: "threedotjs",           fill: "#000000",  iconFill: "#fff", since: 2025 },
  { text: "React Three Fiber",icon: "react",                fill: "#61DAFB",  iconFill: "#000", since: 2025 },
  { text: "Drei",             icon: "react",                fill: "#61DAFB",  iconFill: "#000", since: 2025 },
  { text: "HTML5",            icon: "html5",                fill: "#E34F26",  iconFill: "#fff", months: 24 },
  { text: "CSS3",             icon: "css3",                 fill: "#1572B6",  iconFill: "#fff", months: 24 },
  { text: "Tailwind CSS",     icon: "tailwindcss",          fill: "#06B6D4",  iconFill: "#fff", since: 2025 },
  { text: "Python",           icon: "python",               fill: "#3776AB",  iconFill: "#FFD845", since: 2023 },
  { text: "Bash / Scripting", icon: "gnubash",              fill: "#4EAA25",  iconFill: "#fff", since: 2023 },
  { text: "Kotlin",           icon: "kotlin",               fill: "#7F52FF",  iconFill: "#fff", months: 3 },
  { text: "Java",             icon: "openjdk",              fill: "#007396",  iconFill: "#fff", months: 3 },
  { text: "Spring Boot",      icon: "spring",              fill: "#6DB33F",  iconFill: "#fff", months: 3 },
  { text: "Node.js",          icon: "nodedotjs",           fill: "#339933",  iconFill: "#fff", months: 6 },


  /* ------------- Testing ------------- */
  { text: "Mocha-Chai",       icon: "mocha",                fill: "#8D6748",  iconFill: "#fff", months: 3 },
  { text: "Robot Framework",  icon: "robotframework",       fill: "#00E368",  iconFill: "#000", months: 4 },

  /* ------------- Build / Lint / Format ------------- */
  { text: "Vite",             icon: "vite",                fill: "#646CFF",  iconFill: "#fff", since: 2025 },
  { text: "ESLint",           icon: "eslint",              fill: "#4B32C3",  iconFill: "#fff", since: 2025 },
  { text: "Prettier",         icon: "prettier",            fill: "#F7B93E",  iconFill: "#000", since: 2025 },

  /* ------------- Soft / Project skills ------------- */
  { text: "Software Engineering", icon: "skillshare",       fill: "#00FF88",  iconFill: "#000", since: 2021 },
  { text: "Project Managing",     icon: "asana",            fill: "#273347",  iconFill: "#fff", since: 2019 },
  { text: "Team Collaboration",   icon: "teamviewer",       fill: "#0E62D0",  iconFill: "#fff", since: 2022 },
  { text: "Clear Documentation",  icon: "readthedocs",      fill: "#8CA1AF",  iconFill: "#000", since: 2019 },
  { text: "Six Sigma - Yellow belt",      icon: "leanpub",  fill: "#02B875",  iconFill: "#fff", months: 3 },

  /* ------------- Agile / Boards ------------- */
  { text: "Agile Methodologies",  icon: "jira",             fill: "#0052CC",  iconFill: "#fff", since: 2022 },
  { text: "Jira",                 icon: "jira",             fill: "#0052CC",  iconFill: "#fff", months: 4 },
  { text: "Kanban",               icon: "trello",           fill: "#0052CC",  iconFill: "#fff", months: 9 },
  { text: "Trello",               icon: "trello",           fill: "#0052CC",  iconFill: "#fff", months: 3 },
  { text: "Scrum",                icon: "scrumalliance",    fill: "#6C757D",  iconFill: "#fff", months: 12 },
  { text: "Confluence",           icon: "confluence",       fill: "#172B4D",  iconFill: "#fff", months: 4 },
  { text: "Slack",                icon: "slack",            fill: "#4A154B",  iconFill: "#fff", months: 4 },
  { text: "Microsoft Teams",      icon: "microsoftteams",   fill: "#6264A7",  iconFill: "#fff", since: 2022 },
  { text: "Discord",              icon: "discord",          fill: "#5865F2",  iconFill: "#fff", since: 2015 },
  { text: "Excel",                icon: "microsoftexcel",   fill: "#217346",  iconFill: "#fff", since: 2019 },
  { text: "Office 365",           icon: "microsoft",        fill: "#F25022",  iconFill: "#fff", since: 2012 },

  /* ------------- Miscellaneous ------------- */
  { text: "German",   icon: "googletranslate", fill: "#000000", iconFill: "#FFCE00", since: 2024 },
  { text: "English",  icon: "googletranslate", fill: "#1E90FF", iconFill: "#fff",    since: 2005 },
  { text: "Swedish",  icon: "googletranslate", fill: "#005CBF", iconFill: "#fff",    since: 2008 },
  { text: "Finnish",  icon: "googletranslate", fill: "#003580", iconFill: "#fff",    since: 1994 },

  /* ------------- Version control & CI ------------- */
  { text: "Git",                  icon: "git",              fill: "#F05032",  iconFill: "#fff", since: 2022 },
  { text: "SVN",                  icon: "subversion",       fill: "#809CC9",  iconFill: "#fff", months: 4 },
  { text: "CI/CD",                icon: "circleci",         fill: "#343434",  iconFill: "#fff", since: 2022 },

  /* ------------- IDE & Tools ------------- */
  { text: "VS Code",              icon: "visualstudiocode", fill: "#007ACC",  iconFill: "#fff", since: 2022 },
  { text: "Visual Studio",        icon: "visualstudio",     fill: "#5C2D91",  iconFill: "#fff", months: 6 },
  { text: "SQL Mgmt Studio",      icon: "microsoftsqlserver",fill: "#CC2927", iconFill: "#fff", since: 2022 },
  { text: "Babylon Translator",   icon: "babel",            fill: "#F9DC3E",  iconFill: "#000", months: 4 },
  { text: "Android Studio",       icon: "androidstudio",    fill: "#3DDC84",  iconFill: "#fff", months: 6 },
  { text: "Qt Creator",           icon: "qt",               fill: "#41CD52",  iconFill: "#fff", months: 12 },

  /* ------------- OS / Infra ------------- */
  { text: "Cloud",                icon: "googlecloud",      fill: "#4285F4",  iconFill: "#fff", since: 2023 },
  { text: "Virtual Machines",     icon: "virtualbox",       fill: "#183A61",  iconFill: "#fff", since: 2022 },
  { text: "Linux",                icon: "linux",            fill: "#FCC624",  iconFill: "#000", months: 12 },
  { text: "Kali Linux",           icon: "kalilinux",        fill: "#557C94",  iconFill: "#fff", months: 3 },
  { text: "Windows",              icon: "windows",          fill: "#0078D6",  iconFill: "#fff", since: 2010 },
  { text: "Android",              icon: "android",          fill: "#3DDC84",  iconFill: "#fff", since: 2015 },

];
