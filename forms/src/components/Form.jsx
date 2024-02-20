import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleChange = (value) => {
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Hello {name}</h1>

      <input type="name" onChange={handleChange} />
    </form>
  );
};
export default Form;
