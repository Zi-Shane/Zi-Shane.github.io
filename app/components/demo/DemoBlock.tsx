import { demoGridItem } from '@/data';
import DemoCard from './DemoCard';

const DemoBlock = () => {
  return (
    <div id="demo" className="py-20">
      <h1 className="my-4 text-center text-4xl font-semibold">
        PORTFOLIO 網站作品
      </h1>
      <div className="my-10 flex flex-col items-center justify-center gap-3 lg:flex-row">
        {demoGridItem.map(({ id, img, content, link }) => (
          <DemoCard key={id} img={img} content={content} link={link} />
        ))}
      </div>
    </div>
  );
};

export default DemoBlock;
