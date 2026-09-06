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
    url: "/images/gallery/placeholder-1.jpg"
  },
  {
    id: "g2",
    category: "Technology",
    title: "Advanced MRI Scanner",
    url: "/images/gallery/placeholder-2.jpg"
  },
  {
    id: "g3",
    category: "Rooms",
    title: "Private Inpatient Suite",
    url: "/images/gallery/placeholder-3.jpg"
  },
  {
    id: "g4",
    category: "Surgery",
    title: "State-of-the-art Operating Theater",
    url: "/images/gallery/placeholder-4.jpg"
  }
];
