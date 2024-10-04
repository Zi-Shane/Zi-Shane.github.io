import { aboutGridItem } from '@/data';
import ExpCard from './ui/ExpCard/ExpCard';
import Button from './ui/Button/Button';
import { FaRegFilePdf } from 'react-icons/fa6';

const About = () => {
  return (
    <div className="w-[4/5]">
      <h1 className="text-4xl font-semibold my-4 text-center">
        ABOUT ME 關於我
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 auto-cols-auto gap-4 mx-4 my-10">
        {aboutGridItem.map(({ id, title, content, pic, className }) => (
          <ExpCard
            key={id}
            title={title}
            content={content}
            pic={pic}
            cardClassName={className}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <a href="IOT_cv.pdf">
          <Button content="Resume" icon={<FaRegFilePdf />} />
        </a>
      </div>
    </div>
  );
};

export default About;
