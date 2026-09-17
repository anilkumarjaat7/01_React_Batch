import { useState } from "react";

function Num() {
  // let inptvalue = "";

  const [value, setValue] = useState("");

  return (
    <div className="">
      <p>{value}</p>

      <input
        placeholder="enetr one task"
        onChange={(e) => {
          setValue(e.target.value);
          console.log(value);
        }}
      />
    </div>
  );
}

export default Num;
