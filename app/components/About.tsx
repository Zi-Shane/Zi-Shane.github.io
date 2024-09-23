import { aboutGridItem } from '@/data';
import ExpCard from './ui/ExpCard';

const About = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold my-4 text-center">
        My work experience
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 auto-cols-auto gap-4 my-10">
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
    </div>
  );
};

export default About;
