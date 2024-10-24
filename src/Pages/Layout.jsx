import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Home, Settings, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import SliderToggle from "../components/SliderToggle";

const Layout = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("light");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode") === "true";
    setSelected(darkModePreference ? "dark" : "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", selected === "dark");
  }, [selected]);

  useEffect(() => {
    if (selected === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [selected]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        selected === "light"
          ? "bg-white text-gray-800"
          : "bg-gray-900 text-white"
      }`}
    >
      <nav
        className={`shadow-md p-4 flex justify-between items-center container mx-auto ${
          selected === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition ${
                isActive
                  ? "bg-green-100 border-b-2 border-green-500 text-green-600 dark:bg-green-800 dark:text-green-200 dark:border-green-700"
                  : "text-gray-800 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
              }`
            }
          >
            <Home className="inline mr-1" />
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition ${
                isActive
                  ? "bg-green-100 border-b-2 border-green-500 text-green-600 dark:bg-green-800 dark:text-green-200 dark:border-green-700"
                  : "text-gray-800 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
              }`
            }
          >
            <Settings className="inline mr-1" />
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <SliderToggle selected={selected} setSelected={setSelected} />
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800 transition"
          >
            <LogOut className="inline mr-1" /> Logout
          </button>
        </div>
      </nav>
      <main
        className={`flex-grow rounded-lg shadow-md mt-4 ${
          selected === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
