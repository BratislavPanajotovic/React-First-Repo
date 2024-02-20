import { useState } from "react";

const Input = () => {
  const [person, setPerson] = useState({ name: "", age: "", errorMsg: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <h1>Hello {person.name}</h1>
      <h2>Your age is {person.age}</h2>
      <p>Enter your name:</p>
      <input type="text" name="name" onChange={handleChange} />
      <p>Enter your age</p>
      <input type="text" name="age" onChange={handleChange} />
    </form>
  );
};

export default Input;
