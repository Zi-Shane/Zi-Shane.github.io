import { demoGridItem } from '@/data';
import DemoCard from './ui/DemoCard';

const DemoBlock = () => {
  return (
    <div id="demo" className="py-20">
      <h1 className="text-4xl font-semibold my-4 text-center">
        A small selection of recent projects
      </h1>
      <div className="flex lg:flex-row flex-col justify-center gap-3 my-10">
        {demoGridItem.map(({ id, img, content, className, link }) => (
          <DemoCard
            key={id}
            img={img}
            content={content}
            cardClassName={className}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default DemoBlock;
