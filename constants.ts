import { Faculty, Placement, Notice, GalleryItem, Resource, HeroSlide } from './types';

export const FACULTY_DATA: Faculty[] = [
  {
    id: '1',
    name: 'Dr. Arindam Ghosh',
    designation: 'Head of Department',
    qualification: 'Ph.D. in Computer Science, MCA',
    specialization: 'Artificial Intelligence, Machine Learning',
    email: 'hod.bca@medinipurcollege.ac.in',
    image: 'https://picsum.photos/id/1005/400/400',
  },
  {
    id: '2',
    name: 'Prof. S. Dasgupta',
    designation: 'Assistant Professor',
    qualification: 'M.Tech, MCA',
    specialization: 'Database Management Systems, Web Tech',
    email: 's.dasgupta@medinipurcollege.ac.in',
    image: 'https://picsum.photos/id/1012/400/400',
  },
  {
    id: '3',
    name: 'Prof. R. Banerjee',
    designation: 'Assistant Professor',
    qualification: 'MCA, UGC-NET',
    specialization: 'Software Engineering, Java',
    email: 'r.banerjee@medinipurcollege.ac.in',
    image: 'https://picsum.photos/id/1027/400/400',
  },
  {
    id: '4',
    name: 'Prof. A. K. Manna',
    designation: 'Guest Lecturer',
    qualification: 'M.Sc (CS)',
    specialization: 'Networking, Cyber Security',
    email: 'ak.manna@medinipurcollege.ac.in',
    image: 'https://picsum.photos/id/1006/400/400',
  },
];

export const PLACEMENT_DATA: Placement[] = [
  { id: '1', studentName: 'Sayan Roy', batch: '2020-2023', company: 'TCS', role: 'System Engineer', packageLPA: 3.6, year: 2023 },
  { id: '2', studentName: 'Priya Mondal', batch: '2020-2023', company: 'Deloitte', role: 'Analyst', packageLPA: 4.5, year: 2023 },
  { id: '3', studentName: 'Rahul Dey', batch: '2020-2023', company: 'Wipro', role: 'Project Engineer', packageLPA: 3.5, year: 2023 },
  { id: '4', studentName: 'Ankita Sen', batch: '2020-2023', company: 'Cognizant', role: 'Programmer Analyst', packageLPA: 4.0, year: 2023 },
  { id: '5', studentName: 'Amit Kumar', batch: '2021-2024', company: 'Accenture', role: 'App Development Assoc', packageLPA: 4.6, year: 2024 },
  { id: '6', studentName: 'Sneha Das', batch: '2021-2024', company: 'TCS', role: 'Digital Cadre', packageLPA: 7.0, year: 2024 },
  { id: '7', studentName: 'Rohan Biswas', batch: '2021-2024', company: 'Infosys', role: 'System Engineer', packageLPA: 3.6, year: 2024 },
  { id: '8', studentName: 'Vikram Singh', batch: '2021-2024', company: 'Capgemini', role: 'Analyst', packageLPA: 4.25, year: 2024 },
];

export const NOTICE_DATA: Notice[] = [
  { id: '1', title: 'Internal Assessment Schedule 2024', date: '2024-05-10', isPinned: true, category: 'Exam', link: '#' },
  { id: '2', title: 'TCS Campus Drive Registration', date: '2024-05-08', isPinned: true, category: 'Placement', link: '#' },
  { id: '3', title: 'Holiday List Update', date: '2024-05-01', isPinned: false, category: 'General', link: '#' },
  { id: '4', title: 'Practical Exam Guidelines 6th Sem', date: '2024-04-25', isPinned: false, category: 'Exam', link: '#' },
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: '1', imageUrl: 'https://picsum.photos/id/20/800/600', caption: 'Tech Fest 2023', category: 'Event' },
  { id: '2', imageUrl: 'https://picsum.photos/id/180/800/600', caption: 'Freshers Welcome 2023', category: 'Event' },
  { id: '3', imageUrl: 'https://picsum.photos/id/119/800/600', caption: 'Seminar on AI', category: 'Seminar' },
  { id: '4', imageUrl: 'https://picsum.photos/id/201/800/600', caption: 'Campus Lab', category: 'Campus' },
];

export const RESOURCE_DATA: Resource[] = [
  { id: '1', title: 'Data Structure Notes (Module 1-4)', type: 'Notes', downloadUrl: '#' },
  { id: '2', title: 'Previous Year Question - 2023', type: 'PYQ', downloadUrl: '#' },
  { id: '3', title: 'Operating System Syllabus Revised', type: 'Syllabus', downloadUrl: '#' },
];

export const HERO_SLIDES: HeroSlide[] = [
  { 
    id: '1', 
    imageUrl: 'https://picsum.photos/id/6/1600/900', 
    title: 'Shaping Future Technocrats', 
    subtitle: 'Department of Computer Applications, Medinipur College.' 
  },
  { 
    id: '2', 
    imageUrl: 'https://picsum.photos/id/48/1600/900', 
    title: 'State-of-the-Art Labs', 
    subtitle: 'Advanced computing facilities for practical learning.' 
  },
  { 
    id: '3', 
    imageUrl: 'https://picsum.photos/id/3/1600/900', 
    title: 'Excellence in Placements', 
    subtitle: 'Consistently placing students in top MNCs.' 
  }
];