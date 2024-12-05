const ExpCard = ({
  title,
  content,
  pic,
}: {
  title: string;
  content: string;
  pic: string;
  cardClassName: string;
}) => {
  return (
    <div className="card-grad-bg rounded-2xl">
      <div className="flex h-[200px] flex-col justify-center gap-2 p-10 md:flex-row md:items-center lg:justify-normal">
        <img
          src={pic}
          alt="icon"
          className="h-[50px] w-[40px] md:h-[150px] md:w-[120px]"
        />
        <div className="flex w-full flex-col md:w-[700px] md:p-[20px] lg:w-full">
          <h3 className="whitespace-pre-line text-xl font-bold md:text-2xl">
            {title}
          </h3>
          <p className="mt-4 whitespace-pre-line text-sm font-semibold">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
