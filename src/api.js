// src/api/api.js

export function getDiplomas() {
  return diplomas;
}

export function getDiploma(id) {
  return diplomas.find(dip => dip.id === id);
}

export function getModule({ diplomaId, moduleId }) {
  const diploma = diplomas.find(dip => dip.id === diplomaId);
  return diploma?.modules.find(mod => mod.id === moduleId);
}

// Data for diplomas
const diplomas = [
  {
    id: "common-ict",
    name: "Common ICT Programme",
    modules: [
      { id: "intro-programming", name: "Introductory Programming", description: "Introduction to programming fundamentals" },
      { id: "tech-foundations", name: "Foundations of ICT", description: "Core ICT skills and concepts" },
    ]
  },
  {
    id: "applied-ai",
    name: "Diploma in Applied AI & Analytics",
    modules: [
      { id: "ai-basics", name: "AI Fundamentals", description: "Introduction to artificial intelligence and basic analytics" },
      { id: "data-analytics", name: "Data Analytics", description: "Data cleansing, exploration, and visualization techniques" },
    ]
  },
  {
    id: "information-tech",
    name: "Diploma in Information Technology",
    modules: [
      { id: "programming-fundamentals", name: "Programming Fundamentals I", description: "Core programming principles and practice" },
      { id: "software-dev-process", name: "Software Development Process", description: "Software engineering lifecycle and practices" },
      { id: "database-systems", name: "Database Systems", description: "Design and implementation of databases" },
    ]
  },
  {
    id: "cybersecurity",
    name: "Diploma in Cybersecurity & Digital Forensics",
    modules: [
      { id: "network-security", name: "Network Security", description: "Security of networks and systems" },
      { id: "ethical-hacking", name: "Ethical Hacking", description: "Penetration testing and defensive techniques" },
      { id: "malware-analysis", name: "Digital Forensics & Malware Analysis", description: "Investigation of cyber attacks and malware" },
    ]
  },
  {
    id: "financial-tech",
    name: "Diploma in Financial Technology",
    modules: [
      { id: "fintech-intro", name: "Introduction to FinTech", description: "Overview of financial technology landscape" },
      { id: "blockchain-basics", name: "Blockchain Fundamentals", description: "Basics of blockchain and decentralized systems" },
      { id: "digital-payments", name: "Digital Payments", description: "Build and understand digital financial solutions" },
    ]
  },
  {
    id: "cloud-computing",
    name: "Diploma in Enterprise Cloud Computing & Management",
    modules: [
      { id: "cloud-fundamentals", name: "Cloud Computing Fundamentals", description: "Introduction to cloud concepts and services" },
      { id: "cloud-app-dev", name: "Cloud Application Development", description: "Build applications on cloud platforms" },
      { id: "cloud-infrastructure", name: "Cloud Infrastructure & Operations", description: "Manage enterprise cloud infrastructure" },
    ]
  }
];
