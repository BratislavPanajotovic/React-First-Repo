import "./App.css";
import { useReducer } from "react";
import korisnikReducer from "./korisnikReducer";
import { useState } from "react";
import { ADD_USER, REMOVE_USER } from "./actions.js";

const defaultUsers = [
  {
    name: "user 1",
    id: 0,
  },
];

function App() {
  const [users, dispatchUser] = useReducer(korisnikReducer, defaultUsers);
  const [inputState, setInputState] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchUser({
      type: ADD_USER,
      payload: {
        name: inputState,
      },
    });
  };

  const handleRemove = (id) => {
    dispatchUser({
      type: REMOVE_USER,
      payload: { id },
    });
  };

  return (
    <div className="App">
      <div>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleRemove(user.id)}>Remove</button>
          </li>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <input type="submit" value="dodaj korisnika" />
      </form>
    </div>
  );
}

export default App;
