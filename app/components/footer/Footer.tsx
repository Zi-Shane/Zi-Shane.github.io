import { socialMediaIcon } from '@/data';
import SocialMedia from './SnsIcon';

const Footer = () => {
  return (
    <footer className="flex sm:flex-row flex-col justify-between items-center py-4 mx-2">
      <p className="md:text-lg">Copyright © 2024 Zi-Shane</p>
      <div className="flex gap-3 mt-2">
        {socialMediaIcon.map(({ id, path, url }) => (
          <SocialMedia key={id} id={id} path={path} url={url} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
