import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-blue-600 text-white ">
      <Link to="/" className="hover:text-yellow-300">
        Home
      </Link>

      <Link to="/matches" className="hover:text-yellow-300">
        Matches
      </Link>

      <Link to="/teams" className="hover:text-yellow-300">
        Teams
      </Link>

      <Link to="/players" className="hover:text-yellow-300">
        Players
      </Link>

      <Link to="/login" className="hover:text-yellow-300">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
