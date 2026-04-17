import Image from "next/image";
import FavoriteElement from "./FavoriteElement";
import Link from "next/link";

const Card = ({ id, breedGroup, origin, image }) => {
  return (
    <div className="w-57 rounded-2xl bg-gray-100 overflow-hidden m-4">
      <div className="relative">
        <Link href={`/detailview/${id}`}>
          <Image src={image} alt="Picture of the animal" width={300} height={200} className="rounded-xl object-cover" />
        </Link>
        <div className="absolute top-3 right-3 bg-white/40 backdrop-blur-md p-2 rounded-full">
          <FavoriteElement />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{breedGroup}</h2>
        <p className="text-gray-500 text-sm">{origin}</p>
      </div>
    </div>
  );
};

export default Card;
