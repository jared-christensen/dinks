export interface LessonService {
  title: string;
  details: string;
}

export const LESSON_SERVICES: LessonService[] = [
  {
    title: "Private Instruction",
    details:
      "Personalized instruction tailored to your skill level. Work one-on-one with our certified instructors to focus on your specific goals and improve your game.",
  },
  {
    title: "Group Instruction",
    details:
      "Group lessons available for friends, families, or individuals looking to meet new players. Perfect for learning in a fun, social environment.",
  },
  {
    title: "Youth Training",
    details:
      "Dedicated youth programs designed to get kids started in pickleball the right way. Age-appropriate instruction in a safe, encouraging environment.",
  },
  {
    title: "Clinics",
    details:
      "From Intro to Pickleball for complete beginners to advanced skill-specific clinics. Find the right clinic for your level and goals.",
  },
];

export const INSTRUCTOR_CREDENTIALS: string[] = [
  "Co-owners of Dinks Pickleball",
  "PPR Professional Instructors",
  "Certified pickleball instructors",
  "Experience with all skill levels from beginners to advanced",
];
