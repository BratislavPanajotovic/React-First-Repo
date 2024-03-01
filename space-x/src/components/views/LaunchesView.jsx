import { useState, useEffect, useContext } from "react";
import instance from "../../services/api";
import LaunchesList from "../views/LaunchesList";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { LaunchesContext } from "../../../src/context/LaunchesContext";
const LaunchesView = () => {
  const { state, dispatch } = useContext(LaunchesContext);
  const { launches, loading, error } = state;
  useEffect(() => {
    dispatch({ type: "FETCH_LAUNCHES_REQUEST" });
    instance
      .get("/launches")
      .then((res) => {
        dispatch({
          type: "FETCH_LAUNCHES_SUCCESS",
          payload: res.data.slice(0, 10),
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_LAUNCHES_FAILURE",
          error: error.response,
        });
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <h1>Launches View</h1>
      <LaunchesList launches={launches} />
    </div>
  );
};
export default LaunchesView;
