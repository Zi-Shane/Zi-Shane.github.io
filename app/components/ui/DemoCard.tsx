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
    <a href={link} className="lg:w-full m-w-[400px] card-bg rounded-lg">
      <div className="py-4 px-4">
        <img
          src={img}
          className="w-full h-[250px] rounded-xl object-cover object-center bg-slate-100 flex flex-col mb-4"
        ></img>
        <div className="mx-2">
          <p className="h-[4rem] my-4 text-base font-bold whitespace-pre-wrap">
            {content}
          </p>
          <div className="font-medium text-blue h-[1rem] flex justify-end items-center gap-2 my-4">
            <p>check live site</p>
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default DemoCard;
