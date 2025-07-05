import type { ResumeData } from "@/lib/types";
import CroppedSelf from "../images/CroppedSelf2.jpg";
export const RESUME_DATA: ResumeData = {
  name: "Mirza Abdul Aleem Baig",
  initials: "MB",
  location: "Houston, TX, CST",
  locationLink: "https://www.google.com/maps/place/Houston,+TX",
  about:"Software Engineer focused on AI-driven, full-stack, and data-centric solutions with a passion for building impactful, user-friendly products.",
  summary: (
    <>
Software Engineer with a strong focus on AI-powered automation and intelligent system design. Experienced in
developing scalable web and mobile applications using ReactJS, Next.js, and React Native, with backend
expertise in Node.js, Express.js, and PostgreSQL. Skilled in applying machine learning, NLP, and computer
vision techniques using Python based development to drive actionable insights. Adept at building data pipelines,
dashboards, and cloud-native solutions using Power BI, SQL, AWS, and Docker. Holds an M.S. in Computer
Science from the University of Houston. Proven track record of delivering impactful software solutions and
integrating AI technologies to solve real-world business challenges and drive innovation at scale.
    </>
  ),
  avatarUrl: CroppedSelf.src,
  personalWebsiteUrl: "https://github.com/mirzaaleem21",
  contact: {
    email: "typemirza@gmail.com",
    tel: "+1-346-586-3202",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mirzaaleem21",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mirza-aleem-512634126/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "University of Houston",
      degree: "M.S. in Computer Science, Specialization in Data Science",
      start: "Aug 2023",
      end: "May 2025",
    },
    {
      school: "Osmania University",
      degree: "B.E. in Computer Science & Engineering",
      start: "Aug 2019",
      end: "May 2023",
    },
  ],
  work: [
    {
      company: "Texas Mobile PCS LLC",
      link: "",
      badges: ["Power BI", "SQL", "ETL", "GCP", "Python"],
      title: "Data Analyst",
      start: "Jul 2024",
      end: "May 2025",
      description: (
        <>
          Built and maintained automated data systems for 300+ retail stores.
          <ul className="list-inside list-disc">
            <li>Developed Power BI dashboards for real-time KPI tracking and fraud detection</li>
            <li>Automated reporting using Power BI Automate and Power Query</li>
            <li>Optimized SQL queries and procedures to reduce report load time by 25%</li>
            <li>Contributed to ETL pipelines and scalable data models</li>
            <li>Used Python (pandas, NumPy, scikit-learn) for trend forecasting and anomaly detection</li>
            <li>Built utility bill management system using FastAPI, React, Supabase/PostgreSQL, and Google Document AI</li>
            <li>Engineered vendor-specific parsers and dashboards for utility cost analytics and compliance</li>
          </ul>
        </>
      ),
    },
    {
      company: "ESF Labs",
      link: "",
      badges: ["React", "Node.js", "PostgreSQL", "Docker"],
      title: "Software Developer",
      start: "Nov 2022",
      end: "May 2023",
      description: (
        <>
          Developed full-stack vendor management platform with modern DevOps practices.
          <ul className="list-inside list-disc">
            <li>Designed UI with Figma and implemented modular frontends using React and Tailwind</li>
            <li>Developed RESTful APIs with Node.js and PostgreSQL, optimizing backend performance</li>
            <li>Added role-based authentication, logging, validation, and exception handling</li>
            <li>Containerized apps with Docker and integrated GitHub Actions for CI/CD</li>
          </ul>
        </>
      ),
    },
    {
      company: "MEDFES (Healthcare Intelligence)",
      link: "",
      badges: ["React", "Redux", "Tailwind CSS", "EHR"],
      title: "Frontend Developer",
      start: "Jan 2022",
      end: "Nov 2022",
      description: (
        <>
          Built frontend for EHR system to enhance healthcare data accessibility.
          <ul className="list-inside list-disc">
            <li>Developed reusable UI components with React, Redux, and Tailwind CSS</li>
            <li>Implemented dynamic rendering and component-level optimizations</li>
            <li>Translated Figma designs into responsive, accessible layouts</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "C#", "PHP", "HTML/CSS"]
    },
    {
      category: "Frameworks/Technologies",
      items: ["React", "Next.js", "React Native", "Node.js", "Express.js", "Redux", "Spring Framework"]
    },
    {
      category: "Databases/Analytics/AI",
      items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Power BI", "Microsoft Excel (Advanced)", "TensorFlow", "PyTorch", "NLP", "Computer Vision"]
    },
    {
      category: "Cloud/DevOps",
      items: ["AWS", "GCP", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD"]
    }
  ],
  projects: [
    {
      title: "FinAI",
      techStack: ["React", "Next.js", "Tailwind CSS", "Prisma", "Clerk"],
      description:
        "AI-powered finance platform automating workflows and improving analytics using Arcjet and Inngest.",
      link: {
        label: "GitHub",
        href: "https://github.com/mirzaaleem21",
      },
    },
    {
      title: "ChequeExtractor Pro",
      techStack: ["React", "FastAPI", "Document AI", "OpenPyXL"],
      description:
        "System for extracting cheque data and generating Excel reports, reducing manual effort by 80%.",
    },
    {
      title: "FaceSecure",
      techStack: ["AWS Lambda", "S3", "Rekognition", "Cognito"],
      description:
        "Facial recognition app for secure access with multi-factor authentication and KMS encryption.",
    },
    {
      title: "Human Activity Recognition",
      techStack: ["React Native", "TensorFlow", "Keras", "Flask"],
      description:
        "Mobile app that uses smartphone sensors to detect user activity in real time with ML predictions.",
    },
    {
      title: "MRI Image Simulation",
      techStack: ["Python", "NiBabel", "NumPy", "Matplotlib"],
      description:
        "Simulated brain MRIs at multiple field strengths using OASIS dataset and physics-based models.",
    },
    {
      title: "Voice-Assisted E-Commerce App",
      techStack: ["React", "Alan AI"],
      description:
        "Voice-enabled shopping app enhancing accessibility and user experience for e-commerce.",
    },
  ],
};
