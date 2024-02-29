import { useState, useEffect } from "react";
import instance from "../../services/api.js";
import Company from "../company/Company.jsx";
const HomeView = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined);
  useEffect(() => {
    instance.get("company").then((res) => {
      setCompanyInfo(res.data);
    });
  }, []);
  return (
    <div>{companyInfo ? <Company companyInfo={companyInfo} /> : null}</div>
  );
};
export default HomeView;
