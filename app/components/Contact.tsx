import Button from './ui/Button';
import { contactBtn, socialMediaIcon, contactBtnCopied } from '@/data';
import SocialMedia from './ui/SocialMedia';
import { CiMail } from 'react-icons/ci';

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center pt-20 pb-10">
      <div className="max-w-[90vw] md:max-w-[60vw] lg:max-w-2xl my-20 flex flex-col justify-center items-center">
        <h1 className="text-[40px] md:text-5xl lg:text-6xl font-medium text-center my-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </h1>
        <Button
          content={contactBtn}
          canCopy={true}
          copiedMessage={contactBtnCopied}
          icon={<CiMail />}
        />
      </div>
      <div className="w-full flex md:flex-row flex-col justify-between items-center">
        <p className="md:text-lg">Copyright © 2024 Zi-Shane</p>
        <div className="flex gap-3 pt-2">
          {socialMediaIcon.map(({ id, path, url }) => (
            <SocialMedia key={id} id={id} path={path} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
