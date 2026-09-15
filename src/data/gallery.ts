export interface GalleryImage {
  id: string;
  category: string;
  title: string;
  url: string; // Should map to a path in /public/images/gallery/
}

export const gallery: GalleryImage[] = [
  {
    id: "g1",
    category: "Facilities",
    title: "Modern Reception Area",
    url: "/images/facility/1.png"
  },
  {
    id: "g2",
    category: "Technology",
    title: "Advanced MRI Scanner",
    url: "/images/facility/2.jpg"
  },
  {
    id: "g3",
    category: "Rooms",
    title: "Private Inpatient Suite",
    url: "/images/facility/3.jpg"
  },
  {
    id: "g4",
    category: "Surgery",
    title: "State-of-the-art Operating Theater",
    url: "/images/facility/4.jpg"
  },
  {
    id: "g5",
    category: "Facilities",
    title: "Outpatient Care Center",
    url: "/images/facility/5.jpg"
  },
  {
    id: "g6",
    category: "Emergency",
    title: "24/7 Emergency Wing",
    url: ""
  },
  {
    id: "g7",
    category: "Laboratory",
    title: "Diagnostic Laboratory",
    url: "/images/facility/7.jpg"
  }
];
