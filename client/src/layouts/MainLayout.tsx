import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
