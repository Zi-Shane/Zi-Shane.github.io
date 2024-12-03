const SnsIcon = ({
  id,
  path,
  url,
}: {
  id: string;
  path?: string;
  url: string;
}) => {
  return (
    <a href={url}>
      <div className="">
        <img
          className="bg-skyblue aspect-square w-10 rounded-lg p-2"
          src={path}
          alt={id}
        />
      </div>
    </a>
  );
};

export default SnsIcon;
