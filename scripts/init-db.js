const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://varunkumar615768:Varun%40540@portfolio-0.vivxaee.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-0';

// User Schema
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Portfolio Section Schema
const portfolioSectionSchema = new mongoose.Schema({
  sectionName: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, required: true },
  lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });

// Models
const User = mongoose.model('User', userSchema);
const PortfolioSection = mongoose.model('PortfolioSection', portfolioSectionSchema);

// Default sections data
const defaultSections = [
  {
    sectionName: 'hero',
    title: 'Hero Section',
    content: {
      name: "Varun Kumar",
      title: "Full Stack Developer",
      description: "Welcome to my world, My journey in tech has been shaped by hands-on experience in Android and cross-platform applications. I enjoy creating meaningful, user-focused solutions and have worked on projects involving AI integration, real-time databases, and secure authentication.",
      image: "/images/varun-new.jpg"
    }
  },
  {
    sectionName: 'skills',
    title: 'Skills',
    content: {
      programming: ["Java", "Python", "JavaScript", "Dart"],
      frameworks: ["Flutter", "React", "Node.js"],
      backend: ["MongoDB", "Express", "Firebase"],
      tools: ["Git", "Figma", "Docker", "Kubernetes", "n8n"],
      softSkills: ["Leadership", "Teamwork", "Time Management", "Communication"]
    }
  },
  {
    sectionName: 'projects',
    title: 'Projects',
    content: {
      items: [
        {
          id: 1,
          title: "Prakrith - Herbal Medical App",
          description: "Cross-platform app for recommending herbal remedies based on health issues. Integrated real-time database, image recognition, and user profiling.",
          technologies: ["Flutter", "Firebase", "AI Integration"],
          githubUrl: "https://github.com/krishnareddy066/prakriti.git"
        },
        {
          id: 2,
          title: "College Clubs, Events Announcements Platform",
          description: "Built a centralized app using Flutter and Firebase to manage multiple college clubs, events, and announcements under one digital platform.",
          technologies: ["Flutter", "Firestore", "Real-time Updates"],
          githubUrl: "https://github.com/varxnnnn/ConnectUs.git"
        }
      ]
    }
  },
  {
    sectionName: 'experience',
    title: 'Education & Experience',
    content: {
      education: [
        {
          degree: "B.Tech in Computer Science Engineering",
          institution: "Vignan Institute of Technology and Science",
          period: "2022 - 2026",
          description: "Computer Science Engineering"
        },
        {
          degree: "Intermediate",
          institution: "Rishi Junior College",
          period: "2020 - 2022",
          description: "GPA: 84%"
        },
        {
          degree: "Schooling",
          institution: "Prerana Brilliant High School",
          period: "2020",
          description: "GPA: 9.8"
        }
      ]
    }
  },
  {
    sectionName: 'certifications',
    title: 'Certifications',
    content: {
      items: [
        {
          title: "Introduction to Modern AI",
          issuer: "Cisco Networking Academy",
          date: "Apr 4, 2025",
          image: "/certificates/cisco-modern-ai.png"
        },
        {
          title: "Python 101 for Data Science",
          issuer: "IBM SkillsBuild",
          date: "Apr 5, 2025",
          image: "/certificates/ibm-python-101.png"
        },
        {
          title: "PCAP - Programming Essentials in Python",
          issuer: "Cisco Networking Academy",
          date: "Jun 1, 2024",
          image: "/certificates/cisco-pcap.png"
        },
        {
          title: "Prompt Engineering Crash Course for Beginners",
          issuer: "Udemy",
          date: "Feb 27, 2025",
          image: "/certificates/udemy-prompt-engineering.png"
        }
      ]
    }
  },
  {
    sectionName: 'contact',
    title: 'Contact Information',
    content: {
      email: "varunkumar615768@gmail.com",
      linkedin: "https://www.linkedin.com/in/varun-kumar40",
      github: "https://github.com/varxnnnn",
      leetcode: "https://leetcode.com/u/varunkumar48/",
      instagram: "https://instagram.com/_varxnnnn"
    }
  }
];

async function initializeDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    // Create default user
    console.log('Creating default user...');
    const existingUser = await User.findOne({ userId: '615768' });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash('Varun@540', 10);
      const user = new User({
        userId: '615768',
        password: hashedPassword
      });
      await user.save();
      console.log('Default user created successfully!');
    } else {
      console.log('Default user already exists, skipping...');
    }

    // Create default sections
    console.log('Creating default portfolio sections...');
    for (const sectionData of defaultSections) {
      const existingSection = await PortfolioSection.findOne({ sectionName: sectionData.sectionName });
      if (!existingSection) {
        const section = new PortfolioSection(sectionData);
        await section.save();
        console.log(`Created section: ${sectionData.sectionName}`);
      } else {
        console.log(`Section ${sectionData.sectionName} already exists, skipping...`);
      }
    }
    console.log('Default sections created successfully!');

    console.log('Database initialization completed successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the initialization
initializeDatabase();
