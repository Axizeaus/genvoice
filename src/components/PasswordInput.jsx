import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden mb-4">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="flex-grow p-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
        aria-label="Toggle password visibility"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
