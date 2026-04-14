import Card from "../components/Card";
import { IoSearchSharp } from "react-icons/io5";

export default function Home() {
  return (
    <section className="p-4">
      <div className="sticky top-0 z-50 bg-white flex items-center gap-4 mb-6 py-3">
        <div className="bg-red-300 p-4 rounded-full flex items-center justify-center">
          <IoSearchSharp className="text-white text-2xl scale-x-[-1]" />
        </div>

        <input type="text" placeholder="Søg..." className="border border-black rounded-full px-4 py-3 w-full text-lg" />
      </div>

      <Card />
    </section>
  );
}
