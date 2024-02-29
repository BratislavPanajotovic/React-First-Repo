import { useState, useEffect } from "react";
import instance from "../../services/api";
import LaunchesList from "./LaunchesList";
const LaunchesView = () => {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    instance.get("/launches").then((res) => setLaunches(res.data.slice(0, 10)));
  }, []);
  return (
    <>
      <h1>Launches View</h1>
      {launches ? <LaunchesList launches={launches} /> : null}
    </>
  );
};
export default LaunchesView;
