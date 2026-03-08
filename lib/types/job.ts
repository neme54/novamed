export type EmploymentType = "Full-time" | "Contract" | "Internship";
export type SeniorityLevel = "Entry" | "Mid" | "Senior" | "Manager";

export interface JobListing {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: EmploymentType;
  level: SeniorityLevel;
  deadline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

