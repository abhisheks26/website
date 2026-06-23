import HeroBento from '@/portfolio/home/HeroBento';
import WorkBento from '@/portfolio/home/WorkBento';
import BottomBento from '@/portfolio/home/BottomBento';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-16 pb-24">
      <HeroBento />
      <WorkBento />
      <BottomBento />
    </div>
  );
}
