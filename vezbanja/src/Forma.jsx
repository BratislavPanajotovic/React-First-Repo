import { useState } from "react";

const User = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    email: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const age = e.target.age;
    const email = e.target.email;

    const value = e.target.value;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <h1>User Information</h1>
      <p>Enter your name:</p>
      <input type="text" name="name" onChange={handleChange} />
      <p>Enter your age</p>
      <input type="text" name="age" onChange={handleChange} />
      <p>Enter your e-mail</p>
      <input type="text" name="email" onChange={handleChange} />
      <p>Would you like to subscribe to our newsletter ?</p>

      <p>
        Name:{person.name} <br />
        Age: {person.age} <br />
        Email: {person.email}
      </p>
    </form>
  );
};

export default User;
