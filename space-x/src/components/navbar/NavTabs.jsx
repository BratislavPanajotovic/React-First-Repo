import "./style.css";
import NavTabsItem from "./NavTabsItem";
import * as routes from "../constants/routes";
const Navtabs = () => {
  return (
    <div className="navtabs-wrapper">
      {/* {Object.values(routes).map((route) => (
        <NavTabsItem value={route} />
      ))} */}
      <NavTabsItem value="Home" />
      <NavTabsItem value="Launches" />
      <NavTabsItem value="Rockets" />
      <NavTabsItem value="Ships" />
    </div>
  );
};

export default Navtabs;
