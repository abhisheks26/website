import ProjectsClient from '@/portfolio/projects/ProjectsClient';
import { getProjects } from '@/shared/lib/projects';

export const revalidate = 60;

export const metadata = {
  title: 'My Work — Abhishek Sarkate',
  description: 'A curated showcase of video editing projects — podcasts, short-form content, and long-form stories.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
