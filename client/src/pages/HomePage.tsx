import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";
import type { RootState } from "../app/store";

function HomePage() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogin = () => {
    dispatch(
      login({
        name: "Sree",
      }),
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Redux Test Page</h1>

      <p>
        User:
        {user ? user.name : "Not Logged In"}
      </p>

      <button
        onClick={handleLogin}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Login
      </button>

      <button
        onClick={handleLogout}
        className="ml-4 rounded bg-red-500 px-4 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
}

export default HomePage;
