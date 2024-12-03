const DemoCard = ({
  img,
  content,
  link,
}: {
  img: string;
  content: string;
  link: string;
}) => {
  return (
    <a href={link} className="m-w-[400px] card-bg rounded-lg lg:w-full">
      <div className="px-4 py-4">
        <img
          src={img}
          className="mb-4 flex h-[250px] w-full flex-col rounded-xl bg-slate-100 object-cover object-center"
        ></img>
        <div className="mx-2">
          <p className="my-4 h-[4rem] whitespace-pre-wrap text-base font-bold">
            {content}
          </p>
          <div className="text-blue my-4 flex h-[1rem] items-center justify-end gap-2 font-medium">
            <p>check live site</p>
            <img src="/arrow.svg" alt="->" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default DemoCard;
