import { aboutGridItem } from '@/data';
import ExpCard from './ExpCard';
import Button from '../ui/Button/Button';
import { FaRegFilePdf } from 'react-icons/fa6';
import ContentWithIcon from '../ui/Button/ContentWithIcon';

const About = () => {
  return (
    <div>
      <h1 className="my-4 text-center text-4xl font-semibold">
        ABOUT ME 關於我
      </h1>
      <div className="mx-4 my-10 grid auto-cols-auto grid-cols-1 gap-4 lg:grid-cols-2">
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
          <Button>
            <ContentWithIcon msg={'Resume'} icon={<FaRegFilePdf />} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default About;
