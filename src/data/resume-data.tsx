import { BookCheck } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"
import ITCLogo from "../images/logos/itc.png"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"

export const RESUME_DATA = {
  name: "Rohan Khatua",
  initials: "RK",
  location: "Bengaluru, India",
  websiteUrl: "rohankhatua.dev",
  locationLink: "https://maps.app.goo.gl/9mApkepVZDkmvLx89",
  about: "Pre-final year Computer Science Student - Full Stack Developer",
  summary: "",
  avatarUrl: "https://avatars.githubusercontent.com/u/90958884?v=4",
  contact: {
    email: "contact@rohankhatua.dev",
    tel: "+91 9830493214",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/RohanKhatua",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/RohanKhatua",
        icon: LinkedInIcon
      },
      {
        name: "X",
        url: "https://x.com/Krutons_05",
        icon: XIcon
      }
    ]
  },
  education: [
    {
      school: "Vellore Institute of Technology, Vellore",
      degree: "B.Tech in Computer Science and Engineering",
      start: "Sep 2021",
      end: "Present"
    },
    {
      school: "La Martiniere For Boys, Kolkata",
      degree: "Physics, Chemistry, Mathematics with Computer Science",
      start: "April 2006",
      end: "March 2021"
    }
  ],
  work: [
    {
      company: "ITC Infotech",
      link: "https://www.itcinfotech.com/",
      badges: ["On-Site"],
      title: "Project Intern",
      logo: ITCLogo,
      start: "Aug 2023",
      end: "Sep 2023",
      description: "Built user facing websites and explored server & storage virtualization, cloud computing and Network Infrastructure Security Monitoring"
    }
  ],
  skills: [
    "JavaScript", "TypeScript", "Java", "Go", "C/C++", "Python",
    "React.js", "Next.js", "Go-Fiber", "GORM", "Docker", "Prisma", "AWS",
    "PostgreSQL", "MongoDB"
  ],
  projects: [
    {
      title: "GoBooks",
      techStack: [
        "Go", "GORM", "Go-Fiber", "PostgreSQL", "Docker"
      ],
      description: "A REST API built entirely in Go for managing a bookstore handling inventory management, purchases and reviews",
      logo: BookCheck,
      link: {
        label: "Github",
        href: "https://github.com/RohanKhatua/GoBooks"
      }
    },
    {
      title: "University Timetable Visualizer",
      techStack: [
        "Vite", "React", 
      ]
    }
  ]
}