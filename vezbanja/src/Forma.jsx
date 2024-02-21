import { useState } from "react";

const User = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    email: "",
    subscribe: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  // Stigli smo do toga da ne pogadjamo nista (najverovatnije) sa e.target.value === "checked"

  const subscribed = (e) => {
    if (e.target.value === "checked") {
      setPerson({ ...person, subscribe: true });
    }
    if (
      person.subscribe === true &&
      document.querySelector(".newsletter") == ""
    ) {
      document.querySelector(
        ".newsletter"
      ).textContent = `You are now signed up for our newsletter!`;
    }
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
      <input type="checkbox" name="subscribe" onChange={subscribed} />
      <p className="data">
        Name:{person.name} <br />
        Age: {person.age} <br />
        Email: {person.email}
      </p>
      <p className="newsletter"></p>
    </form>
  );
};

export default User;
