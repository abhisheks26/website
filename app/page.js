import HeroBento from '@/portfolio/home/HeroBento';
import WorkBento from '@/portfolio/home/WorkBento';
import BottomBento from '@/portfolio/home/BottomBento';
import { getProjects } from '@/shared/lib/projects';

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="w-full flex flex-col items-center gap-16 pb-24">
      <HeroBento />
      <WorkBento projects={projects} />
      <BottomBento />
    </div>
  );
}
