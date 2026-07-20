/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import React from "react";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sourav Taleda",
  title: "Hi all, I'm Sourav",
  subTitle: emoji(
    "A passionate Full Stack Engineer 🚀 with expertise in building scalable backend services and highly interactive web applications using TypeScript, React, Node.js, and Ruby on Rails."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1S4ADUyGdT-k521Vk4JNMZYwQwhOrW9ce/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sourav-taleda-code",
  linkedin: "https://www.linkedin.com/in/sourav-taleda-753783195",
  gmail: "souravtaleda@yahoo.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER WITH EXPERTISE IN SCALABLE BACKEND ARCHITECTURE AND INTERACTIVE FRONTENDS",
  skills: [
    emoji(
      "⚡ Develop and modernize backend services using TypeScript, Node.js, and Ruby on Rails"
    ),
    emoji("⚡ Build scalable web applications and interactive User Interfaces with React and Redux"),
    emoji(
      "⚡ Design and implement RESTful APIs, CI/CD pipelines, and robust automated testing suites"
    ),
    <span key="pm-fellowship">
      ⚡ Completed Product Management Fellowship at NextLeap -{" "}
      <a href="https://www.souravtaleda.com/" target="_blank" rel="noopener noreferrer">View Portfolio</a>
    </span>
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "B.M.S. College of Engineering",
      logo: require("./assets/images/bmsLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "January 2018 - July 2022",
      desc: "Bengaluru, India",
      descBullets: [
        "Core focus on Software Engineering, Data Structures, and Algorithms"
      ]
    },
    {
      schoolName: "NextLeap",
      logo: require("./assets/images/nextleapLogo.jpg"),
      subHeader: "Product Management Fellowship",
      duration: "2026",
      desc: "Product Management",
      descBullets: [
        "Comprehensive fellowship focusing on product strategy, user research, and technical product management."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "80%"
    },
    {
      Stack: "Testing/CI-CD",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Bazaarvoice",
      companylogo: require("./assets/images/bazaarvoiceLogo.png"),
      date: "April 2025 – Present",
      desc: "Bengaluru, Karnataka, India",
      descBullets: [
        "Developed and modernized backend services by migrating legacy Ruby on Rails systems to scalable TypeScript-based architecture.",
        "Debugged and optimized application performance, reducing runtime latency by 40%.",
        "Elevated unit test coverage from 75% to 90% across all core repositories.",
        "Managed technical implementation for 25 enterprise clients simultaneously."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Bazaarvoice",
      companylogo: require("./assets/images/bazaarvoiceLogo.png"),
      date: "August 2022 – May 2024",
      desc: "Bengaluru, Karnataka, India",
      descBullets: [
        "Developed and maintained scalable web applications using React, Redux, and Node.js.",
        "Collaborated to design and implement RESTful APIs, improving data retrieval efficiency by 35%.",
        "Debugged and resolved critical production issues, maintaining 99.5% uptime SLA."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Bazaarvoice",
      companylogo: require("./assets/images/bazaarvoiceLogo.png"),
      date: "February 2022 – July 2022",
      desc: "Bengaluru, Karnataka, India",
      descBullets: [
        "Used Python scripting for debugging, automation, and test data generation tasks.",
        "Wrote comprehensive unit and integration tests using Jest, achieving 85% code coverage."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("PM Case Studies 📊"),
  subtitle: "Showcasing my Product Management work and analysis",
  achievementsCards: [
    {
      title: "Voice Usage in India",
      subtitle: "A comprehensive case study analyzing voice usage patterns and user behaviors in the Indian market.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Voice Usage Case Study",
      footerLink: [
        {
          name: "View Case Study",
          url: "./case-studies/Understanding Voice usage in India.pdf"
        }
      ]
    },
    {
      title: "GiftSense",
      subtitle: "Case study exploring gifting patterns in India and the potential for a tech-driven solution.",
      image: require("./assets/images/GiftSenseLogo.png"),
      imageAlt: "GiftSense Case Study",
      footerLink: [
        {
          name: "View Case Study",
          url: "./case-studies/GiftSense--Case study on gifting pattern in India.pdf"
        }
      ]
    },
    {
      title: "Building Evaluation for ChatGPT",
      subtitle: "An in-depth evaluation and structural analysis for ChatGPT use cases.",
      image: require("./assets/images/ChatGPT-Logo.png"),
      imageAlt: "ChatGPT Evaluation",
      footerLink: [
        {
          name: "View Case Study",
          url: "./case-studies/Building Evaluation For Chatgpt.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7353043985",
  email_address: "souravtaleda@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
