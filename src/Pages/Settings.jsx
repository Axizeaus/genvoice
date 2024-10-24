import { useState } from "react";
import { changePassword, removeUserToken, getCurrentPassword } from "../auth";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(newPassword);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$/;

    const tested = passwordRegex.test(password);
    return tested;
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    console.log(getCurrentPassword());

    if (!getCurrentPassword() || currentPassword !== getCurrentPassword()) {
      setError("Current password is incorrect.");
      return;
    }

    if (!validatePassword(newPassword)) {
      setError(
        "New password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    changePassword(newPassword);
    removeUserToken();
    setMessage("Password changed successfully!");
    setError("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    navigate("/login");
  };

  return (
    <div className="flex flex-col flex-grow items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Change Password
        </h1>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <PasswordInput
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
          />
          <PasswordInput
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <PasswordInput
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm New Password"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-md w-full transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Change Password
          </button>
        </form>
        {message && (
          <p className="text-green-500 mt-4 text-center">{message}</p>
        )}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Settings;
