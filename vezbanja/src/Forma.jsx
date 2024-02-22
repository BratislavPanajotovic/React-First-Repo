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
  const subscribed = (e) => {
    setPerson((prevPerson) => {
      const updatedPerson = { ...prevPerson, subscribe: e.target.checked };

      if (e.target.checked) {
        document.querySelector(
          ".newsletter"
        ).textContent = `You are now subscribed for our newsletter!`;
      } else {
        document.querySelector(
          ".newsletter"
        ).textContent = `You have successfully unsubscribed from our newsletter!`;
      }

      return updatedPerson;
    });
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
