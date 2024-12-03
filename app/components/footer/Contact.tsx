import { contactBtn, socialMediaIcon, contactBtnCopied } from '@/data';
import { CiMail } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa6';
import CopiedButton from '../ui/Button/CopiedButton';
import ContentWithIcon from '../ui/Button/ContentWithIcon';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-36">
        <h1 className="text-4xl font-medium lg:text-5xl">與我聯繫</h1>
        <h1 className="text-4xl font-medium lg:text-5xl">
          Let&apos;s get in touch
        </h1>
        <CopiedButton
          className="mt-6"
          originalChildren={
            <ContentWithIcon msg={contactBtn} icon={<CiMail />} />
          }
          clickedChildren={
            <ContentWithIcon msg={contactBtnCopied} icon={<FaCheck />} />
          }
        ></CopiedButton>
      </div>
    </>
  );
};

export default Contact;
