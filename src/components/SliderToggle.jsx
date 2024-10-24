import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const TOGGLE_CLASSES =
  "flex items-center justify-center w-10 h-10 rounded-full transition-colors relative z-10";
const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "bg-gray-200" : "bg-transparent"
        }`}
        onClick={() => setSelected("light")}
      >
        <Sun className="text-lg" />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "bg-gray-700" : "bg-transparent"
        }`}
        onClick={() => setSelected("dark")}
      >
        <Moon className="text-lg" />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default SliderToggle;
