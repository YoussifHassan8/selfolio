import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import { AboutContext } from "./components/about/context/aboutContext";
import { ExperienceData, SocialLinks } from "./components/constants/constants";
import { Link } from "./components/types/about";
import { ResumeState } from "./components/types/about";
import { PredefinedGradients } from "./components/constants/constants";
import { projectsContext } from "./components/about/context/projectsContext";
import { skillsContext } from "./components/about/context/skillsContext";
import { experiencesContext } from "./components/about/context/experiencesContext";
import { contactsContext } from "./components/about/context/contactContext";
import { InitialProjects } from "./components/constants/constants";
import { InitialSkills } from "./components/constants/constants";
import { ContactInfo } from "./components/contact/types";
import { useState } from "react";
import { exportAsReactProject } from "./utils/exportProject";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function PortfolioEditor() {
  interface HighlightRange {
    start: number;
    end: number;
    color: string;
  }

  const predefinedGradients = [
    {
      name: "Blue Purple",
      value: "linear-gradient(90deg, #3b82f6, #a855f7, #9333ea)",
    },
    {
      name: "Sunset",
      value: "linear-gradient(90deg, #f97316, #e11d48, #6d28d9)",
    },
    {
      name: "Emerald",
      value: "linear-gradient(90deg, #10b981, #3b82f6, #6366f1)",
    },
  ];

  const [projectsGradient, setProjectsGradient] = useState(
    predefinedGradients[0].value
  );
  const [links, setLinks] = useState<Link[]>(SocialLinks);
  const [sections, setSections] = useState({
    About: true,
    Projects: true,
    Skills: true,
    Experience: true,
    Contact: true,
  });
  const [resumeState, setResumeState] = useState<ResumeState>({
    resumeLink:
      "https://drive.google.com/file/d/1VeDQ6oTdWYfSiEk0QD01NPNGWobBe_DG/view",
    resumeGradient: "linear-gradient(90deg, #2A7B9B, #57C785)",
    resumeOriginalGradient: "linear-gradient(90deg, #2A7B9B, #57C785)",
    resumeColor1: "#2A7B9B",
    resumeColor2: "#57C785",
  });
  const [text, setText] = useState(
    "👨‍💻 Professional Frontend Engineer with competitive programming background.🏆 Represented Egypt in ECPC & regional ACPC competitions. 🌱 Always learning - Excited to explore new technologies and frameworks"
  );
  const [highlights, setHighlights] = useState<HighlightRange[]>([]);
  const [availability, setAvailability] = useState(true);
  const [imgUrl, setImgUrl] = useState(
    "/src/assets/photo_2025-04-27_17-17-20.jpg"
  );
  const [tags, setTags] = useState([
    "UI/UX Enthusiast",
    "Problem Solver",
    "Frontend Developer",
    "Software Engineer",
  ]);
  const [name, setName] = useState("Youssif Hassan");
  const [nameGradient, setNameGradient] = useState(
    PredefinedGradients[0].value
  );
  const [projects, setProjects] = useState(InitialProjects);
  const [skills, setSkills] = useState(InitialSkills);
  const [skillsGradient, setSkillsGradient] = useState(
    predefinedGradients[0].value
  );
  const [experience, setExperience] = useState(ExperienceData);
  const [experienceGradient, setExperienceGradient] = useState(
    predefinedGradients[0].value
  );
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: "youssifh383@gmail.com",
    phone: "+2011 4962 6908",
    location: "Cairo, Egypt",
  });
  const [contactGradient, setContactGradient] = useState(
    predefinedGradients[0].value
  );

  const handleExport = async () => {
    const convertedSkills = skills.map((skill) => ({
      icon: (skill.icon as any).name || "SiReact",
      name: skill.name,
      color: skill.color,
    }));

    const convertedExperience = experience.map((exp) => ({
      title: exp.title,
      company: exp.foundation,
      period: exp.date,
      description: exp.description,
      icon: exp.iconName,
      left: exp.left,
    }));

    const jsonData = {
      NavBar: {
        about: sections.About,
        projects: sections.Projects,
        skills: sections.Skills,
        experience: sections.Experience,
        contact: sections.Contact,
      },
      About: {
        name: {
          content: name,
          gradient: nameGradient,
        },
        imgUrl: imgUrl,
        availability: availability,
        tags: tags,
        resumeButton: resumeState,
        links: links,
        description: {
          content: text,
          highlights: highlights,
        },
      },
      Projects: { projects: projects, title: projectsGradient },
      Skills: { skills: convertedSkills, title: skillsGradient },
      Experiences: {
        experience: convertedExperience,
        title: experienceGradient,
      },
      Contact: { contact: contactInfo, title: contactGradient },
    };

    try {
      await exportAsReactProject(jsonData);
    } catch (error) {
      console.error("Error exporting project:", error);
      alert("Error exporting project. Please try again.");
    }
  };

  return (
    <>
      <div className="relativemax-w-[1300px] mx-auto px-12 min-h-screen text-white pt-[100px]">
        <Navbar sections={sections} setSections={setSections} />
        <AboutContext.Provider
          value={{
            links,
            setLinks,
            resumeState,
            setResumeState,
            availability,
            setAvailability,
            imgUrl,
            setImgUrl,
            tags,
            setTags,
            name,
            setName,
            nameGradient,
            setNameGradient,
            text,
            setText,
            highlights,
            setHighlights,
          }}
        >
          {sections.About && <About />}
        </AboutContext.Provider>
        <projectsContext.Provider
          value={{
            projects,
            setProjects,
            projectsGradient,
            setProjectsGradient,
          }}
        >
          {sections.Projects && <Projects />}
        </projectsContext.Provider>
        <skillsContext.Provider
          value={{ skills, setSkills, skillsGradient, setSkillsGradient }}
        >
          {sections.Skills && <Skills />}
        </skillsContext.Provider>
        <experiencesContext.Provider
          value={{
            experience,
            setExperience,
            experienceGradient,
            setExperienceGradient,
          }}
        >
          {sections.Experience && <Experience />}
        </experiencesContext.Provider>
        <contactsContext.Provider
          value={{
            contactInfo,
            setContactInfo,
            contactGradient,
            setContactGradient,
          }}
        >
          {sections.Contact && <Contact />}
        </contactsContext.Provider>
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          onClick={handleExport}
        >
          Export React Project
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/editor" element={<PortfolioEditor />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
