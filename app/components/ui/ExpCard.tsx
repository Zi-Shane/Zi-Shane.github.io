const ExpCard = ({
  title,
  content,
  pic,
  cardClassName,
}: {
  title: string;
  content: string;
  pic: string;
  cardClassName: string;
}) => {
  return (
    <div className="card-grad-bg h-[200px] flex md:flex-row flex-col md:items-center  lg:justify-normal justify-center rounded-2xl p-10 gap-2">
      <img
        src={pic}
        alt=""
        className="md:h-[150px] md:w-[120px] h-[50px] w-[40px]"
      />
      <div className="flex flex-col md:p-[20px]">
        <h3 className="md:text-2xl text-xl font-bold">{title}</h3>
        <p className="text-sm font-semibold mt-4">{content}</p>
      </div>
    </div>
  );
};

export default ExpCard;
