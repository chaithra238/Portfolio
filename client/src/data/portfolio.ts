import type { PortfolioData } from "../types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Chaithra M",
    role: "CSE Student | Full Stack Developer | ML & IoT Enthusiast",
    tagline: "Welcome to my portfolio",
    location: "Mangalore, India",
    email: "your-email@example.com", // TODO: add public email
    resumeUrl: "", // set "/resume.pdf" (file in client/public/) to show a Resume button
    avatarUrl: "",
    socials: {
      github: "https://github.com/chaithra238",
      linkedin: "", // TODO
      twitter: "",
    },
  },

  about: {
    paragraphs: [
      "I am a Computer Science and Engineering student with a passion for building interactive and user-friendly applications. I have hands-on experience in web development using HTML, CSS, and JavaScript, and I have also worked on Machine Learning and IoT projects.",
      "I enjoy solving real-world problems by combining technology and creativity. My projects include developing an IoT-based emergency system, creating machine learning models for spam detection and movie genre classification, and building web platforms during hackathons. I am eager to learn new technologies and contribute to innovative software solutions.",
    ],
    stats: [
      { label: "Projects", value: "3+" },
      { label: "Internships", value: "5" },
      { label: "CGPA", value: "8.9" },
    ],
    skills: [
      { category: "Web", items: ["HTML", "CSS", "JavaScript"] },
      { category: "Programming", items: ["C Programming", "Python"] },
      { category: "ML & Data", items: ["Machine Learning", "Data Analytics"] },
    ],
  },

  education: [
    { institution: "Srinivas Institute of Technology, Mangalore", degree: "Bachelor of Engineering in Computer Science", period: "2023 – Present", grade: "8.9 CGPA", highlights: [] },
    { institution: "BARHSS Bovikanam", degree: "Higher Secondary Education – PCMB", period: "2021 – 2023", grade: "96%", highlights: [] },
    { institution: "BEMHSS Kasaragod", degree: "SSLC", period: "2018 – 2021", grade: "95%", highlights: [] },
  ],

  internships: [
    {
      company: "CodSoft", role: "CodSoft Internship", period: "Aug 2025 – Sep 2025",
      points: [
        "Worked on Machine Learning projects including Spam Detection and Movie Genre Classification.",
        "Gained hands-on experience with Python, Pandas, NumPy, and Scikit-learn.",
      ],
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      company: "Google", role: "Google AI/ML Virtual Internship", period: "Jul 2025 – Sep 2025",
      points: ["Completed a virtual internship focused on Artificial Intelligence and Machine Learning concepts, including model building and data analysis."],
    },
    {
      company: "Google", role: "Google Android Developer Internship", period: "Apr 2025 – Jun 2025",
      points: ["Gained experience in Android app development using Java/Kotlin, UI/UX best practices, and publishing demo applications."],
      stack: ["Java", "Kotlin", "Android"],
    },
    {
      company: "Zscaler", role: "Zero Trust Cloud Security Virtual Internship", period: "Oct 2024 – Dec 2024",
      points: ["Learned about cloud security, Zero Trust architecture, and practical implementation of secure network policies in enterprise environments."],
    },
    {
      company: "AWS", role: "AWS Cloud Virtual Internship", period: "Jul 2024 – Sep 2024",
      points: ["Completed virtual training on AWS cloud services including EC2, S3, Lambda, and cloud deployment strategies."],
      stack: ["EC2", "S3", "Lambda"],
    },
  ],

  // TODO: add certifications; the column is hidden while this is empty
  certifications: [],

  projects: [
    {
      title: "SOS Emergency System",
      description: "An IoT-based emergency response system designed to assist users during critical situations by sending instant SOS alerts for faster help.",
      stack: ["Raspberry Pi Zero", "React.js", "Firebase"],
      github: "",
      featured: true,
    },
    {
      title: "CodSoft ML Projects",
      description: "Spam Message Detection, Credit Card Fraud Detection and Movie Genre Classification using supervised learning techniques.",
      stack: ["Python", "Pandas", "Scikit-learn"],
      github: "",
    },
    {
      title: "Homefix",
      description: "A web application that allows users to find and book home services such as plumbing, electrical, and maintenance services.",
      stack: ["HTML", "CSS", "JavaScript"],
      github: "",
    },
  ],
};