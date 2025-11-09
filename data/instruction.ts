// Instruction page content and data

export interface InstructionService {
  title: string;
  description: string;
  details: string;
}

export interface InstructionData {
  pageTitle: string;
  intro: string;
  instructorsName: string;
  instructorsCredentials: string[];
  instructorsImageSrc: string;
  services: InstructionService[];
  clinicLevels: string[];
}

export const instructionData: InstructionData = {
  pageTitle: "Lessons & Clinics",
  intro:
    "Whether you're picking up a paddle for the first time or looking to refine advanced techniques, our PPR-certified instructors David & Bailey provide professional instruction for all skill levels.",
  instructorsName: "David & Bailey Lanning",
  instructorsCredentials: [
    "Co-Owners of Dinks Pickleball",
    "PPR Professional Instructors",
    "Certified pickleball instructors",
    "Experience with all skill levels from beginners to advanced",
  ],
  instructorsImageSrc: "/people.webp",
  services: [
    {
      title: "Private Instruction",
      description: "1:1 Private Lessons",
      details:
        "Personalized instruction tailored to your skill level. Work one-on-one with our certified instructors to focus on your specific goals and improve your game.",
    },
    {
      title: "Group Instruction",
      description: "Learn with others",
      details:
        "Group lessons available for friends, families, or individuals looking to meet new players. Perfect for learning in a fun, social environment.",
    },
    {
      title: "Youth Training",
      description: "Programs for kids",
      details:
        "Dedicated youth programs designed to get kids started in pickleball the right way. Age-appropriate instruction in a safe, encouraging environment.",
    },
    {
      title: "Clinics",
      description: "All skill levels",
      details:
        "From Intro to Pickleball for complete beginners to advanced skill-specific clinics. Find the right clinic for your level and goals.",
    },
  ],
  clinicLevels: [
    "Intro to Pickleball - Perfect for beginners",
    "Beginner clinics",
    "Intermediate clinics",
    "Advanced clinics",
    "Skill-specific clinics",
  ],
};
