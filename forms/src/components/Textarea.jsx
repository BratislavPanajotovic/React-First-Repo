import { useState } from "react";

const Textarea = () => {
  const [descr, setDescr] = useState("Context of text area");

  return (
    <form>
      {" "}
      <textarea
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      ></textarea>
    </form>
  );
};

export default Textarea;
