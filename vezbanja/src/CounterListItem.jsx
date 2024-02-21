import { useState } from "react";

const ListItem = (props) => {
  return (
    <text style={{ margin: 0 }}>List item has value {props.counter.value}</text>
  );
};
export default ListItem;
