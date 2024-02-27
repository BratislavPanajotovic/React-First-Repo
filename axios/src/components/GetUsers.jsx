import axios from "axios";
import { useState, useEffect } from "react";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //response
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default GetUsers;
