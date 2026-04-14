import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-around items-center py-4 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <FiHome className="text-gray-400 text-3xl" />
      <FaRegStar className="text-gray-400 text-3xl" />
      <FaRegComment className="text-gray-400 text-3xl" />
      <BsPerson className="text-gray-400 text-3xl" />
    </footer>
  );
};

export default Footer;
