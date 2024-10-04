import { demoGridItem } from '@/data';
import DemoCard from './ui/DemoCard/DemoCard';

const DemoBlock = () => {
  return (
    <div id="demo" className="py-20">
      <h1 className="text-4xl font-semibold my-4 text-center">
        PORTFOLIO 網站作品
      </h1>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-3 my-10">
        {demoGridItem.map(({ id, img, content, link }) => (
          <DemoCard key={id} img={img} content={content} link={link} />
        ))}
      </div>
    </div>
  );
};

export default DemoBlock;
