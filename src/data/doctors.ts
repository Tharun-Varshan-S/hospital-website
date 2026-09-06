export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualification: string;
  experience: string;
  departmentId: string;
  branchIds: string[];
  imagePlaceholder?: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-smith",
    name: "Dr. Sarah Smith",
    specialization: "Senior Cardiologist",
    qualification: "MD, FACC",
    experience: "15+ Years",
    departmentId: "cardiology",
    branchIds: ["main-campus", "downtown-clinic"],
  },
  {
    id: "dr-jones",
    name: "Dr. Marcus Jones",
    specialization: "Neurosurgeon",
    qualification: "MD, PhD, FACS",
    experience: "20+ Years",
    departmentId: "neurology",
    branchIds: ["main-campus"],
  },
  {
    id: "dr-patel",
    name: "Dr. Anita Patel",
    specialization: "ENT Specialist",
    qualification: "MS, DLO",
    experience: "12+ Years",
    departmentId: "ent",
    branchIds: ["downtown-clinic", "westside-center"],
  },
  {
    id: "dr-williams",
    name: "Dr. James Williams",
    specialization: "Pediatrician",
    qualification: "MD, FAAP",
    experience: "10+ Years",
    departmentId: "pediatrics",
    branchIds: ["main-campus", "westside-center"],
  }
];
