import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserToken,
  getCurrentPassword,
  mockAuth,
  setInitialPassword,
} from "../auth";
import PasswordInput from "../components/PasswordInput";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (mockAuth(username, password)) {
      createUserToken();
      if (!getCurrentPassword()) {
        setInitialPassword();
      }
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            required
            className="border border-gray-300 dark:border-gray-600 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 dark:bg-gray-700 dark:text-white"
            aria-label="Username"
          />
          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
