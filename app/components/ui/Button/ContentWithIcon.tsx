interface ContentWithIconProps {
  msg: string;
  icon: React.ReactNode;
}

const ContentWithIcon = ({ msg, icon }: ContentWithIconProps) => {
  return (
    <>
      <span className="mr-2">{msg}</span>
      {icon}
    </>
  );
};

export default ContentWithIcon;
