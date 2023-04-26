import moment from "moment";
import { motion } from "framer-motion";

type PostCardProps = {
  fullName: string;
  id: number;
  message: string;
  createdAt: string;
  amount: number;
  index: number;
};

export const PostCard = ({
  fullName,
  id,
  message,
  createdAt,
  amount,
  index,
}: PostCardProps) => {
  const formatDate = moment(createdAt).subtract(1, "days").calendar();
  return (
    <motion.li
      initial={{
        opacity: 0,
        translateX: index % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      id={JSON.stringify(id)}
      className="relative flex flex-col  text-center text-white border-4 border-white rounded-lg shadow-2xl bg-sky-800 w-[350px] mx-auto"
    >
      <div className="flex items-center justify-between p-4">
        <h3 className="text-sm">{fullName}</h3>
        <div className="flex items-center justify-center px-2 bg-white rounded-full text-bluePrimary w-fit">
          <p> {id}</p>
        </div>
      </div>
      <p className="py-4 text-xl">"{message}"</p>

      <div className="flex items-center justify-between p-4">
        <p className="text-sm">${amount}</p>
        <p className="self-end text-xs"> {formatDate}</p>
      </div>
    </motion.li>
  );
};
