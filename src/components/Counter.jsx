import { useState } from "react";

function Counter() {
  //   let year = 2025;

  let [year, setYear] = useState(2025);

  //   let year = ans[0];
  //   let setYear = ans[1];

  function handleClick() {
    // year += 1;
    setYear(year + 1);
    console.log(year);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="font-bold">{year}</h1>
      <button
        onClick={handleClick}
        className="border p-2 bg-amber-100 w-[100px]"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
