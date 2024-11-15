import Button from './ui/Button/Button';
import { contactBtn, socialMediaIcon, contactBtnCopied } from '@/data';
import SocialMedia from './ui/SNSIcon/SnsIcon';
import { CiMail } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa6';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-36">
        <h1 className="text-[30px] lg:text-5xl font-medium">與我聯繫</h1>
        <h1 className="text-[30px] lg:text-5xl font-medium">
          Let&apos;s get in touch
        </h1>
        <Button
          className="mt-6"
          content={contactBtn}
          canCopy={true}
          clickedMessage={contactBtnCopied}
          icon={<CiMail />}
          iconClicked={<FaCheck />}
        />
      </div>
      <footer className="flex sm:flex-row flex-col justify-between items-center py-4 mx-2">
        <p className="md:text-lg">Copyright © 2024 Zi-Shane</p>
        <div className="flex gap-3 mt-2">
          {socialMediaIcon.map(({ id, path, url }) => (
            <SocialMedia key={id} id={id} path={path} url={url} />
          ))}
        </div>
      </footer>
    </>
    // <div className="w-full flex flex-col items-center pt-20 pb-10">
    //   <div className="max-w-[90vw] md:max-w-[60vw] lg:max-w-2xl my-20 flex flex-col justify-center items-center">
    //     <div className="my-10">
    //       <h1 className="text-[30px] lg:text-5xl font-medium text-center">
    //         與我聯繫
    //       </h1>
    //       <h1 className="text-[30px] lg:text-5xl font-medium text-center">
    //         Let&apos;s get in touch
    //       </h1>
    //     </div>
    //     <Button
    //       content={contactBtn}
    //       canCopy={true}
    //       clickedMessage={contactBtnCopied}
    //       icon={<CiMail />}
    //       iconClicked={<FaCheck />}
    //     />
    //   </div>
    //   <div className="w-full flex md:flex-row flex-col justify-between items-center">
    //     <p className="md:text-lg">Copyright © 2024 Zi-Shane</p>
    //     <div className="flex gap-3 pt-2">
    //       {socialMediaIcon.map(({ id, path, url }) => (
    //         <SocialMedia key={id} id={id} path={path} url={url} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
