import { Link } from "react-router-dom";

const NavTabsItem = ({ value }) => {
  return (
    <Link to={value.toLowerCase()} className="nav-tabs-item">
      {value}
    </Link>
  );
};

export default NavTabsItem;
