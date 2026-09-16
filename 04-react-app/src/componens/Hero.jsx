import { useState } from "react";

function Hero() {
  const [count, setcount] = useState(0);

  //   let count = 0;
  return (
    <div className="">
      <p>Count ={count} </p>

      <button
        onClick={() => {
          setcount(count + 1);
          console.log(count);
        }}
      >
        Add ++
      </button>

      <button
        onClick={() => {
          setcount(count - 1);
          console.log(count);
        }}
      >
        -- Sub
      </button>
    </div>
  );
}

export default Hero;
