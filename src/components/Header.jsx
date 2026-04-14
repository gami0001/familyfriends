import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">FamilyFriends</h1>
      <FaRegBell className="text-2xl" />
    </div>
  );
};

export default Header;
