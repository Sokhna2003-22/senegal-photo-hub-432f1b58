export type Photographer = {
  id: string;
  name: string;
  city: string;
  specialty: string;
  bio: string;
  avatar: string;
  cover: string;
  rating: number;
  verified: boolean;
};

export type Photo = {
  id: string;
  title: string;
  category: string;
  photographerId: string;
  image: string;
  likes: number;
  price?: number;
};

const img = (seed: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${seed}?w=${w}&h=${h}&fit=crop`;

export const photographers: Photographer[] = [
  {
    id: "1",
    name: "Aminata Diallo",
    city: "Dakar",
    specialty: "Mariage",
    bio: "Photographe passionnée par les moments uniques. Spécialisée dans les mariages et cérémonies traditionnelles.",
    avatar: img("1494790108377-be9c29b29330", 200, 200),
    cover: img("1519741497674-611481863552", 1200, 400),
    rating: 4.9,
    verified: true,
  },
  {
    id: "2",
    name: "Moussa Ndiaye",
    city: "Saint-Louis",
    specialty: "Portrait",
    bio: "Capturer l'âme à travers le portrait. 10 ans d'expérience au service de l'art.",
    avatar: img("1507003211169-0a1dd7228f2d", 200, 200),
    cover: img("1554080353-a576cf803bda", 1200, 400),
    rating: 4.7,
    verified: true,
  },
  {
    id: "3",
    name: "Fatou Sarr",
    city: "Thiès",
    specialty: "Mode",
    bio: "Direction artistique et photographie de mode pour marques émergentes.",
    avatar: img("1438761681033-6461ffad8d80", 200, 200),
    cover: img("1490481651871-ab68de25d43d", 1200, 400),
    rating: 4.8,
    verified: false,
  },
  {
    id: "4",
    name: "Ibrahima Ba",
    city: "Dakar",
    specialty: "Événementiel",
    bio: "Photographe d'événements corporate et culturels.",
    avatar: img("1500648767791-00dcc994a43e", 200, 200),
    cover: img("1492684223066-81342ee5ff30", 1200, 400),
    rating: 4.6,
    verified: true,
  },
];

export const categories = [
  "Mariage",
  "Portrait",
  "Mode",
  "Événementiel",
  "Paysage",
  "Culture",
];

export const photos: Photo[] = [
  { id: "p1", title: "Cérémonie traditionnelle", category: "Mariage", photographerId: "1", image: img("1519741497674-611481863552"), likes: 142, price: 25000 },
  { id: "p2", title: "Portrait studio", category: "Portrait", photographerId: "2", image: img("1539571696357-5a69c17a67c6"), likes: 98 },
  { id: "p3", title: "Mode urbaine", category: "Mode", photographerId: "3", image: img("1490481651871-ab68de25d43d"), likes: 215, price: 30000 },
  { id: "p4", title: "Conférence Dakar", category: "Événementiel", photographerId: "4", image: img("1492684223066-81342ee5ff30"), likes: 56 },
  { id: "p5", title: "Coucher de soleil sur l'île", category: "Paysage", photographerId: "1", image: img("1500530855697-b586d89ba3ee"), likes: 304 },
  { id: "p6", title: "Festival culturel", category: "Culture", photographerId: "2", image: img("1533174072545-7a4b6ad7a6c3"), likes: 178, price: 15000 },
  { id: "p7", title: "Mariage à la plage", category: "Mariage", photographerId: "1", image: img("1465495976277-4387d4b0b4c6"), likes: 220 },
  { id: "p8", title: "Portrait artistique", category: "Portrait", photographerId: "3", image: img("1524504388940-b1c1722653e1"), likes: 134 },
];