import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full overflow-hidden">
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
