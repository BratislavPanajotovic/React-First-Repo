import { createContext, useReducer } from "react";
import { launchesReducer, initialState } from "../context/launchesReducer";

export const LaunchesContext = createContext();
const LaunchesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(launchesReducer, initialState);
  return (
    <LaunchesContext.Provider value={{ state, dispatch }}>
      {children}
    </LaunchesContext.Provider>
  );
};
export default LaunchesContextProvider;
