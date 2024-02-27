import { useState } from "react";

const Login = ({ onHandleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleLogin();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Login" />
    </form>
  );
};
export default Login;
