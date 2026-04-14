import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Dog = ({ breedGroup, origin, image }) => {
  return (
    <div className="bg-white w-full rounded-2xl mb-5 pb-5 shadow-md">
      <div className="relative w-fit">
        <div className="absolute top-1 right-1 bg-white/35 rounded-full w-9 h-9 flex items-center justify-center">
          <FaRegStar className="text-white text-2xl" />
        </div>
        <Image className="rounded-2xl" src={image} alt="Picture of the author" width={500} height={500} />
      </div>

      <h2 className="text-gray-900 font-semibold text-2xl ml-5 mt-3 mb-1">{breedGroup}</h2>
      <h3 className="text-gray-400 ml-5">{origin}</h3>
    </div>
  );
};

export default Dog;
