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
          className="bg-skyblue w-10 aspect-square p-2 rounded-lg"
          src={path}
          alt={id}
        />
      </div>
    </a>
  );
};

export default SnsIcon;
