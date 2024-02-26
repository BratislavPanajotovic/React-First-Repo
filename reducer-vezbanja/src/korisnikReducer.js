import { ADD_USER, REMOVE_USER } from "./actions.js";

const korisnikReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      const { name } = payload;
      return [...state, { name: action.payload.name, id: Math.random() * 100 }];
    default:
      return state;
  }
};

export default korisnikReducer;
