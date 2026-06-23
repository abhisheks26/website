import ProjectsClient from '@/portfolio/projects/ProjectsClient';

export const metadata = {
  title: 'My Work — Abhishek Sarkate',
  description: 'A curated showcase of video editing projects — podcasts, short-form content, and long-form stories.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
