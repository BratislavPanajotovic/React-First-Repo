import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Page not found 404</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </>
  );
};

export default PageNotFound;
