import { socialMediaIcon } from '@/data';
import SocialMedia from './SnsIcon';

const Footer = () => {
  return (
    <footer className="mx-2 flex flex-col items-center justify-between py-4 sm:flex-row">
      <p className="md:text-lg">Copyright © 2024 Zi-Shane</p>
      <div className="mt-2 flex gap-3">
        {socialMediaIcon.map(({ id, path, url }) => (
          <SocialMedia key={id} id={id} path={path} url={url} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
