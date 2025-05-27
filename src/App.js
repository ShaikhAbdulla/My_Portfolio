import React, { useEffect, useState } from 'react';
import './App.css';
import { Typewriter2 } from './components/Typewriter';
import { Typewriter } from './components/TypewriterReverse';
import FadeInSection from './components/FadeInSection';
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiNodedotjs,
  SiGithub,
  SiGit,
  SiHeroku,
  SiXcode,
  SiSqlite,
  SiJest,
  SiStripe,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
// import Tooltip from 'react-tooltip';
import { Tooltip } from 'react-tooltip';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiBriefcase, FiUser, FiMapPin } from 'react-icons/fi';
import {
  SiVscodium,
  SiAndroidstudio,
  // SiXcode,
  // SiFirebase,
  // SiGithub,
  // SiGit,
  // SiHeroku,
  SiJira,
  SiGoogleplay,
  SiAppstore
} from "react-icons/si";

const tools = [
  { name: "VS Code", icon: <SiVscodium /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  { name: "Xcode", icon: <SiXcode /> },
  { name: "Play Console", icon: <SiGoogleplay /> },
  { name: "App Store", icon: <SiAppstore /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Heroku", icon: <SiHeroku /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Firebase", icon: <SiFirebase /> },
  {name:"Postman", icon: <SiPostman />,}
];




const skillIcons = {
  "React Native": <SiReact />,
  "Redux Toolkit": <SiRedux />,
  "React Navigation": <SiReact />,
  "JavaScript": <SiJavascript />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "Node.js": <SiNodedotjs />,
  "MongoDB": <SiMongodb />,
  // "Firebase": <SiFirebase />,
  "Webhooks": <FaDatabase />,
  "AsyncStorage": <FaDatabase />,
  "SQLite": <SiSqlite />,
  "Jest": <SiJest />,
  
  "Git": <SiGit />,
  "GitHub": <SiGithub />,
  "Heroku": <SiHeroku />,
  "Agile/Scrum": <span>📋</span>,
  "Razorpay SDK": <span>💳</span>,
  "Branch.io": <span>🌿</span>,
  "AAR Integration": <span>📦</span>,
  "Xcode": <SiXcode />,
  "Stripe": <SiStripe />,
  "Animations": <span>🎨</span>
};

// const skills = [
//   "React Native", "Redux Toolkit", "React Navigation", "Axios", "Jest", "Firebase",
//   "SQLite", "AsyncStorage", "Animations", "Razorpay SDK", "Branch.io",
//   "AAR Integration", "Webhooks", "Stripe", "JavaScript", "HTML", "CSS",
//   "Git", "GitHub", "Postman", "MongoDB", "Node.js", "Agile/Scrum", "Heroku", "Xcode"
// ];
export const skills = [
  { name: "React Native", desc: "Cross-platform mobile framework by Meta" },
  { name: "Redux Toolkit", desc: "State management made simple" },
  { name: "React Navigation", desc: "Navigation library for React Native" },
  { name: "JavaScript", desc: "Dynamic scripting language for the web" },
  { name: "HTML", desc: "Markup language for structure" },
  { name: "CSS", desc: "Styling language for presentation" },
  { name: "Node.js", desc: "Backend JavaScript runtime" },
  { name: "MongoDB", desc: "NoSQL document database" },
  // { name: "Firebase", desc: "Realtime backend-as-a-service" },
  { name: "Webhooks", desc: "Event-based integrations" },
  { name: "AsyncStorage", desc: "Local storage in React Native" },
  { name: "SQLite", desc: "Lightweight local database" },
  { name: "Jest", desc: "Testing framework" },
  // { name: "Postman", desc: "API testing tool" },
  // { name: "Git", desc: "Version control system" },
  // { name: "GitHub", desc: "Code hosting & collaboration" },
  // { name: "Heroku", desc: "Cloud platform for deployment" },
  { name: "Agile/Scrum", desc: "Project delivery methodology" },
  { name: "Razorpay SDK", desc: "Payment gateway for India" },
  { name: "Branch.io", desc: "Deep linking & attribution" },
  { name: "AAR Integration", desc: "Android native library" },
  // { name: "Xcode", desc: "Apple IDE for iOS apps" },
  { name: "Stripe", desc: "Online payment processing" },
  { name: "Animations", desc: "Motion design in mobile UI" }
];

const experience = [
  {
    role: "Mobile Application Developer",
    company: "Applied Cloud Computing (ACC)",
    period: "Aug 2023 – Jan 2025",
    type: "Full-Time",
    description: [
      "Developed and maintained high-quality React Native applications for iOS and Android.",
      "Integrated Razorpay, Branch.io, and other third-party SDKs.",
      "Worked on apps like Bandhan Mutual Fund & ITecho Health, used by real clients.",
      "Collaborated with UI/UX teams and followed Agile practices."
    ]
  },
  {
    role: "React Native Intern",
    company: "Incretech Pvt Ltd (Youth Technology)",
    period: "Apr 2022 – Apr 2023",
    type: "Internship",
    description: [
      "Built internal tools like VCRM using React Native and Firebase.",
      "Learned mobile design patterns, navigation, and data persistence.",
      "Gained hands-on experience with version control and team workflows."
    ]
  }
];

const projects = [
  {
    title: "Bandhan Mutual Fund Investor App",
    description: "A finance app for retail investors with secure transaction flows and real-time performance tracking.",
    tech: ["React Native", "Jest"],
    apkLink: "https://play.google.com/store/apps/details?id=com.bandhanmf.inv",
  },
   {
    title: "Lasting Asset",
    description: "LastingAsset: Advanced Call Security for Your Peace of Mind In todays digital age, phone call fraud and impersonation scams are more prevalent than ever. LastingAsset is here to safeguard your communications with state-of-the-art technology that verifies the authenticity of every call you receive.",
    tech: ["React Native", "Native Bridging" , 'SDK integration'],
    apkLink: "https://play.google.com/store/apps/details?id=com.lastingasset.verify",
  },
   {
    title: "Zero Waste",
    description: "Healthcare app integrated with hospital IT systems for long-term patient monitoring.",
    tech: ["React", "Firebase"],
    apkLink: "https://zerowastemngmnt.netlify.app/",
  },
  {
    title: "ITecho Health",
    description: "Healthcare app integrated with hospital IT systems for long-term patient monitoring.",
    tech: ["React Native", "Firebase"],
    apkLink: "https://www.itechohealth.com/ascelus/",
  },
  {
    title: "Fitness At Your Doorsteps (F@D)",
    description: "A fitness marketplace app for gyms and personal trainers with login and dashboard modules.",
    tech: ["React Native", "Firebase"],
    apkLink: "#",
  },
];

const Card = ({ project }) => (
  <div className="card">
    <h3 className="card-title">{project.title}</h3>
    <p className="card-description">{project.description}</p>
    <p className="card-tech">Tech Stack: {project.tech.join(", ")}</p>
    <a className="card-link" href={project.apkLink} target="_blank" rel="noopener noreferrer">
      Download APK
    </a>
  </div>
);

const Navbar = () => (
  <nav className="navbar enhanced-navbar">
    <div className="navbar-container">
      <div className="nav-links">
            <a className="nav-item" href="#experience">Experience</a>
        <a className="nav-item" href="#skills">Skills</a>
        <a className="nav-item" href="#projects">Projects</a>
        <a className="nav-item" href="#resume">Resume</a>
        <a className="nav-item" href="#contact">Contact</a>
        <a href="./assets/resume/Abdulla_Shaikh_React_Native_Resume.pdf" download className="download-btn">Download Resume</a>
      </div>
  
    </div>
  </nav>
);

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return visible ? (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ⬆ Top
    </button>
  ) : null;
};


// const SkillsTabs = () => {
//   const [activeTab, setActiveTab] = useState(Object.keys(skillGroups)[0]);

//   return (
//     <div>
//       <div className="skills-tabs">
//         {Object.keys(skillGroups).map((group) => (
//           <button
//             key={group}
//             className={`tab-button ${group === activeTab ? 'active' : ''}`}
//             onClick={() => setActiveTab(group)}
//           >
//             {group}
//           </button>
//         ))}
//       </div>
//       <ol className="skills-list">
//         {skillGroups[activeTab].map((skill, index) => (
//           <p key={index} className="skill-item">{skill}</p>
//         ))}
//       </ol>
//     </div>
//   );
// };

export default function App() {


  return (
    <div className="bg-image">
      <Navbar />
      <div className="container">
        <header className="header">
         <p className="header-title2">
            Hi my name is,
          </p>
    
    <Typewriter2 text="Abdulla Shaikh <br/>I build things for mobile/web" />
         <Typewriter/>
        </header>

<FadeInSection direction="right">
{/* <section id="experience" className="section">
  <h2 className="section-title">Experience</h2>
  <div className="experience-timeline">
    {experience.map((job, index) => (
      <div key={index} className="experience-card">
        <div className="experience-header">
          <div className="experience-title">
            <h3>{job.role}</h3>
            <span className="experience-type">{job.type}</span>
          </div>
          <p className="experience-company">{job.company}</p>
          <p className="experience-period">{job.period}</p>
        </div>
        <ul className="experience-description">
          {job.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section> */}
<section id="experience" className="section">
  <h2 className="section-title">Experience</h2>
  <div className="experience-grid">
    {experience.map((job, index) => (
      <div key={index} className="experience-card">
        <div className="experience-header">
          <div className="experience-title">
            <h3>
              {job.type === 'Internship' ? <FiUser className="icon" /> : <FiBriefcase className="icon" />} {job.role}
            </h3>
            <span className="experience-type">{job.type}</span>
          </div>
          <p className="experience-company">
            <FiMapPin className="icon" /> {job.company}
          </p>
          <p className="experience-period">
            <AiOutlineCalendar className="icon" /> {job.period}
          </p>
        </div>
        <ul className="experience-description">
          {job.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>



</FadeInSection>


<FadeInSection direction="right">
       <section id="skills" className="section">
  <h2 className="section-title">Skills</h2>
  <ul className="skills-sublist">
    {skills.map((skill, index) => (
  <li
  key={index}
  className="skill-item"
  data-tooltip-id="skill-tooltip"
  data-tooltip-content={skill.desc}
  style={{ animationDelay: `${index * 50}ms` }}
>
  <span className="skill-icon">{skillIcons[skill.name]}</span>
  <span>{skill.name}</span>
</li>
    ))}
  </ul>
<Tooltip
  id="skill-tooltip"
  className="custom-tooltip"
  place="top"
  opacity={1}
/>
</section>

</FadeInSection>

<FadeInSection>
<section id="tools" className="section">
  <h2 className="section-title">Tools</h2>
  <ul className="tools-list">
    {tools.map((tool, index) => (
      <li key={index} className="tool-item">
        <span className="tool-icon">{tool.icon}</span>
        <span>{tool.name}</span>
      </li>
    ))}
  </ul>
</section>


</FadeInSection>

<FadeInSection direction="left">
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Card  key={index} project={project} />
            ))}
          </div>
        </section>
        </FadeInSection>
<FadeInSection direction="right">
        <section id="resume" className="section">
          <h2 className="section-title">Resume</h2>
          <a
            className="resume-link"
            href="/Abdulla_Shaikh_React_Native_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume (PDF)
          </a>
        </section>
</FadeInSection>
<FadeInSection direction="left">
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="contact-info">
            Email: <a className="contact-link" href="mailto:abdullahydershaikh@gmail.com">abdullahydershaikh@gmail.com</a>
          </p>
          <p className="contact-info">
            LinkedIn: <a className="contact-link" href="https://linkedin.com/in/abdullahydershaikh" target="_blank" rel="noopener noreferrer">linkedin.com/in/abdullahydershaikh</a>
          </p>
        </section>
        </FadeInSection>
      </div>
      <BackToTop />
    </div>
  );
}
