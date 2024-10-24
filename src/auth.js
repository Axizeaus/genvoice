export const mockAuth = (username, password) => {
  const validUsername = "genvoice";
  const validPassword = localStorage.getItem("password") || "GenVoice123!";
  return username === validUsername && password === validPassword;
};

export const changePassword = (newPassword) => {
  localStorage.setItem("password", newPassword);
};

export const getCurrentPassword = () => {
  return localStorage.getItem("password");
};

export const setInitialPassword = () => {
  localStorage.setItem("password", "GenVoice123!");
};

export const createUserToken = () => {
  localStorage.setItem("user", true);
};

export const getUserToken = () => {
  return localStorage.getItem("user");
};

export const removeUserToken = () => {
  localStorage.removeItem("user");
};
