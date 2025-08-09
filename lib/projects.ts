export interface ProjectData {
  id: number
  title: string
  description: string
  image: string
  metrics: {
    label1: string
    value1: string
    label2: string
    value2: string
  }
  gradient: string
  githubUrl?: string
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Prakrith - Herbal Medical App",
    description:
      "Cross-platform app for recommending herbal remedies based on health issues. Integrated real-time database, image recognition, and user profiling. Currently enhancing features for personalized recommendations.",
    image: "/placeholder.svg?height=200&width=400&text=Herbal+Medical+App",
    metrics: {
      label1: "Platform",
      value1: "Flutter",
      label2: "Database",
      value2: "Firebase",
    },
    gradient: "from-teal-500 to-blue-600",
    githubUrl: "https://github.com/krishnareddy066/prakriti.git",
  },
  {
    id: 2,
    title: "College Clubs, Events Announcements Platform",
    description:
      "Built a centralized app using Flutter and Firebase to manage multiple college clubs, events, and announcements under one digital platform. Club admins can post updates, manage events, and interact with users.",
    image: "/placeholder.svg?height=200&width=400&text=College+Clubs+Platform",
    metrics: {
      label1: "Platform",
      value1: "Flutter",
      label2: "Integration",
      value2: "Firestore",
    },
    gradient: "from-purple-500 to-pink-600",
    githubUrl: "https://github.com/varxnnnn/ConnectUs.git",
  },
  {
    id: 3,
    title: "Travel Pooling Application",
    description:
      "Developed a Java-based mobile app that allows students to pool rides to similar destinations, reducing cost and environmental impact. Used Firebase for user authentication, real-time ride tracking, and trip matching logic.",
    image: "/placeholder.svg?height=200&width=400&text=Travel+Pooling+App",
    metrics: {
      label1: "Language",
      value1: "Java",
      label2: "Backend",
      value2: "Firebase",
    },
    gradient: "from-blue-500 to-cyan-600",
    githubUrl: "https://github.com/varxnnnn/PoolingApp.git",
  },
  {
    id: 4,
    title: "YouTube Auto-Reply Bot",
    description:
      "Automated system that replies to YouTube comments using ChatGPT, logs interactions in Google Sheets, and sends Telegram alerts for important comments. Integrated YouTube, Google Sheets, and Telegram APIs for seamless real-time engagement.",
    image: "/placeholder.svg?height=200&width=400&text=YouTube+Bot",
    metrics: {
      label1: "Platform",
      value1: "n8n Cloud",
      label2: "AI Integration",
      value2: "ChatGPT",
    },
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "Automated Deployment Pipeline",
    description:
      "Implemented a CI/CD pipeline to build, test, and deploy a Flask web application using GitHub Actions and Docker. Automated containerization, image publishing to Docker Hub, and deployment to a Kubernetes cluster for scalable delivery.",
    image: "/placeholder.svg?height=200&width=400&text=Deployment+Pipeline",
    metrics: {
      label1: "CI/CD",
      value1: "GitHub Actions",
      label2: "Containerization",
      value2: "Docker",
    },
    gradient: "from-teal-500 to-blue-600",
    githubUrl: "https://github.com/varxnnnn/flask_project.git",
  },
  
]


