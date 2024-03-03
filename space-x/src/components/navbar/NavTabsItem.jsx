import { Link } from "react-router-dom";

// const NavTabsItem = ({ value }) => {
//   return (
//     <Link to={value.toLowerCase()} className="nav-tabs-item">
//       {value}
//     </Link>
//   );
// };

const NavTabsItem = ({ value }) => {
  return <Link to={value.toLowerCase()} className="nav-tabs-item"></Link>;
};

export default NavTabsItem;
