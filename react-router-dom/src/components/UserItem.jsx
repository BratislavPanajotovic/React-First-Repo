import { useParams, useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UserContext";
import { useContext, useState, useEffect } from "react";

const UserItem = () => {
  const { userId } = useParams();
  const { users } = useContext(UsersContext);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(userId));
    console.log(user);
    setUser(user);
  }, []);

  return (
    <>
      {" "}
      <h1>User item: {userId}</h1>
      {user ? (
        <div>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>website: {user.website}</p>
        </div>
      ) : (
        <div>We can't find user</div>
      )}
    </>
  );
};
export default UserItem;
