import "../error/style.css";
import { ReactComponent as Refresh } from "../../assets/Refresh.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-wrapper">
      {" "}
      <h1>Something went wrong...</h1> <button>Please try again</button>
      <div className="refresh-icon">
        <Refresh />
      </div>
    </div>
  );
};
export default Error;
