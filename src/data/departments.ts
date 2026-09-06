export interface Department {
  id: string;
  name: string;
  description: string;
  specialization: string;
  icon?: string;
}

export const departments: Department[] = [
  {
    id: "siddha-medicine",
    name: "Siddha Medicine",
    description: "Traditional holistic healing addressing the root cause of ailments through natural remedies and therapies.",
    specialization: "Traditional Healthcare",
  },
  {
    id: "audiology",
    name: "Audiology & Hearing Care",
    description: "Comprehensive hearing assessments, advanced hearing aid fittings, and auditory rehabilitation.",
    specialization: "Hearing Health",
  },
  {
    id: "speech-therapy",
    name: "Speech & Language Therapy",
    description: "Expert therapeutic interventions for speech delays, articulation issues, and language disorders.",
    specialization: "Communication Wellness",
  },
  {
    id: "wellness",
    name: "Holistic Wellness",
    description: "Integrative lifestyle guidance, dietary counseling, and preventative health management.",
    specialization: "Preventative Care",
  }
];
