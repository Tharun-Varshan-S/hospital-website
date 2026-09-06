export interface Achievement {
  id: string;
  year: number;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "a1",
    year: 2023,
    title: "National Excellence in Healthcare",
    description: "Awarded for exceptional patient care and safety standards by the National Health Board."
  },
  {
    id: "a2",
    year: 2021,
    title: "Best Regional Hospital",
    description: "Recognized as the top-performing regional healthcare facility."
  },
  {
    id: "a3",
    year: 2018,
    title: "Innovation in Medical Technology",
    description: "Honored for integrating AI-driven diagnostic tools in routine patient care."
  },
  {
    id: "a4",
    year: 2015,
    title: "Joint Commission Accreditation",
    description: "Received full accreditation for meeting rigorous performance standards."
  }
];
