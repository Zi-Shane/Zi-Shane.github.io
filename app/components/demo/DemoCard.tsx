const DemoCard = ({
  img,
  content,
  githubLink,
  demoLink,
}: {
  img: string;
  content: string;
  githubLink: string;
  demoLink: string;
}) => {
  return (
    <div className="m-w-[400px] card-bg rounded-lg px-4 py-4 lg:w-full">
      <img
        src={img}
        className="mb-4 flex h-[250px] w-full flex-col rounded-xl bg-slate-100 object-cover object-center"
      ></img>
      <div className="mx-2">
        <p className="my-4 h-[4rem] whitespace-pre-wrap text-base font-bold">
          {content}
        </p>
        <div className="my-4 mt-10 flex justify-between">
          <a href={githubLink}>
            <img className="h-6 w-6" src="/git.svg" />
          </a>
          <a href={demoLink} className="text-blue flex gap-2 font-medium">
            <p>check live site</p>
            <img src="/arrow.svg" alt="->" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
