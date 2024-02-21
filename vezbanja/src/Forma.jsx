import { useState } from "react";

const User = () => {
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: 0,
  //   email: "",
  //   subscribe: false,
  // });
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setPerson((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const subscribed = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     setPerson((prevState) => ({ ...prevState, [name]: checked }));
  //   }
  //   if (person.subscribe) {
  //     const span = document.createElement("span");
  //     span.innerHTML = "You have successfully subscribed to our newsletter!";
  //     document.querySelector(".data").appendChild(span);
  //   }
  // };
  // subscribed();
  // return (
  //   <form>
  //     <h1>User Information</h1>
  //     <p>Enter your name:</p>
  //     <input type="text" name="name" onChange={handleChange} />
  //     <p>Enter your age</p>
  //     <input type="text" name="age" onChange={handleChange} />
  //     <p>Enter your e-mail</p>
  //     <input type="text" name="email" onChange={handleChange} />
  //     <p>Would you like to subscribe to our newsletter ?</p>
  //     <input type="checkbox" name="subscribe" onChange={handleChange} />
  //     <p className="data">
  //       Name:{person.name} <br />
  //       Age: {person.age} <br />
  //       Email: {person.email}
  //     </p>
  //   </form>
  // );
  const [state, setState] = useState(0);
  const handleDecrement = () => {
    setState(state - 1);
  };
  const handleIncrement = () => {
    setState(state + 1);
  };
  const formatState = () => {
    return state === 0 ? "Zero" : state;
  };
  return (
    <div>
      <h3>Counter</h3>
      <button onClick={handleDecrement}>-</button>
      <span>{formatState()}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default User;
