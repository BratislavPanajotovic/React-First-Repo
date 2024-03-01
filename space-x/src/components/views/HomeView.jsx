import { useState, useEffect } from "react";
import instance from "../../services/api.js";
import Company from "../company/Company.jsx";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";

const HomeView = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("compansy")
      .then((res) => setCompanyInfo(res.data))
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Company companyInfo={companyInfo} />
      )}
    </>
  );
};
export default HomeView;
