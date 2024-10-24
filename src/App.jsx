import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/MainPage";
import Settings from "./Pages/Settings";
import Layout from "./Pages/Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route element={<Main />} path="/" />
            <Route element={<Settings />} path="/settings" />
          </Route>
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
