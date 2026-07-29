export interface Experience {
    type: "Internship" | "Organization" | "Work";
    
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}