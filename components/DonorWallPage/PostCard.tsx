import Image from "next/image";

type PostCardProps = {
  fullName: string;
  id: number;
  message: string;
  createdAt: string;
  amount: number;
};

export const PostCard = ({
  fullName,
  id,
  message,
  createdAt,
  amount,
}: PostCardProps) => {
  return (
    <li
      id={JSON.stringify(id)}
      className="relative flex flex-col m-8 text-center text-white border-4 border-white rounded-lg shadow-2xl bg-gradient-to-tr from-sky-400 to-bluePrimary xl:w-[500px] mx-auto"
    >
      <div className="flex items-center justify-between p-4">
        <h3 className="text-sm">{fullName}</h3>
        <div className="flex items-center justify-center px-2 bg-white rounded-full text-bluePrimary w-fit">
          <p> {id}</p>
        </div>
      </div>
      <p className="py-4 text-xl">"{message}"</p>

      {/* <Image
          src={"/nami-support-2.png"}
          alt="nami-support"
          width={50}
          height={50}
        /> */}
      <div className="flex items-center justify-between p-4">
        <p className="text-sm">${amount}</p>
        <p className="self-end text-xs"> {createdAt}</p>
      </div>
    </li>
  );
};
