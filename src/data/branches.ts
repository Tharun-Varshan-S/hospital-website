export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  openingHours: string;
  services: string[];
  location: {
    lat: number;
    lng: number;
  };
}

export const branches: Branch[] = [
  {
    id: "main-campus",
    name: "Hearing Hom Main Hospital",
    address: "123 Healthcare Ave, Medical District",
    phone: "+1 (555) 123-4567",
    openingHours: "24/7 Emergency & General Care",
    services: ["Emergency", "Surgery", "ICU", "Diagnostics", "Inpatient"],
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: "downtown-clinic",
    name: "Hearing Hom Downtown Clinic",
    address: "456 City Center Blvd, Downtown",
    phone: "+1 (555) 987-6543",
    openingHours: "Mon-Sat: 8 AM - 8 PM",
    services: ["Outpatient", "Consultation", "Pharmacy", "Basic Diagnostics"],
    location: { lat: 40.7282, lng: -73.9942 }
  },
  {
    id: "westside-center",
    name: "Hearing Hom Westside Specialists",
    address: "789 West Avenue, Westside",
    phone: "+1 (555) 456-7890",
    openingHours: "Mon-Fri: 9 AM - 5 PM",
    services: ["Specialist Consultation", "Pediatrics", "ENT", "Therapy"],
    location: { lat: 40.7484, lng: -73.9857 }
  }
];
