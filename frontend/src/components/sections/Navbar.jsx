import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50  flex items-center justify-between px-8 py-6  text-white bg-transparent ">
      <div className="flex items-center space-x-2">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-primary font-bold text-xl">B</span>
          </div>
          <span className="font-bold text-xl tracking-tight">ByteSpace</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className="text-sm font-medium hover:text-gray-300 transition"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="text-sm font-medium hover:text-gray-300 transition"
        >
          Courses
        </Link>
        <Link
          to="/creators"
          className="text-sm font-medium hover:text-gray-300 transition"
        >
          Creators
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/sign-in"
          className="text-sm font-medium hover:text-gray-300 transition"
        >
          Sign In
        </Link>
        <Link to="/join-us">
          <Button
            variant="ghost"
            className="text-white border-white hover:bg-white/10"
          >
            Join Us
          </Button>
        </Link>
        <button className="hover:text-gray-300 transition">
          <ShoppingBag size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
