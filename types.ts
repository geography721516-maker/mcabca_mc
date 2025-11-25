export interface Faculty {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  email: string;
  image: string;
}

export interface Placement {
  id: string;
  studentName: string;
  batch: string;
  company: string;
  role: string;
  packageLPA: number;
  year: number;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  isPinned: boolean;
  category: 'General' | 'Exam' | 'Placement';
  link: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: 'Event' | 'Campus' | 'Seminar';
}

export interface Resource {
  id: string;
  title: string;
  type: 'Notes' | 'PYQ' | 'Syllabus';
  downloadUrl: string;
}

export interface HeroSlide {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}