import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import { AuthContext } from "../context/AuthContext.js";

const Navbar = () => {
  const { toogleTheme } = useContext(ThemeContext);
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <button onClick={toogleTheme}> Change Theme Here</button>
      <button onClick={toggleAuth}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};
export default Navbar;
