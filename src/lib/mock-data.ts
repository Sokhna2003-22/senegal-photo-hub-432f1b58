export type Photographer = {
  id: string;
  name: string;
  city: string;
  specialty: string;
  rating: number;
  verified: boolean;
  avatar: string;
  cover: string;
  bio: string;
};

export type Photo = {
  id: string;
  title: string;
  category: string;
  image: string;
  likes: number;
  photographerId: string;
  price?: number;
};

export const categories = ["Mariage", "Portrait", "Mode", "Événementiel", "Paysage"];

export const photographers: Photographer[] = [];
export const photos: Photo[] = [];