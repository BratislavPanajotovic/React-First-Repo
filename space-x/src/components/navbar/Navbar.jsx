import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/SpaceX-Logo.svg";
import Navtabs from "./NavTabs";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="navbar">
//       <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
//       <Navtabs />
//     </div>
//   );
// };

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
      <Navtabs />
    </div>
  );
};

export default Navbar;
