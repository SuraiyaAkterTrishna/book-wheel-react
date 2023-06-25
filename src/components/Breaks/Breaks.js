import React from "react";
import Break from "../Break/Break";

const style = {
  backgroundColor: "rgb(242, 244, 250)",
};
const Breaks = () => {
  const breakTimes = [10, 20, 30, 40, 50];
  return (
    <div>
      <h1 className="text-2xl font-semibold ps-5 py-6">Add a break</h1>
      <div
        style={style}
        className="grid grid-cols-5 gap-2 ms-4 me-6 pe-6 border-0 rounded-xl"
      >
        
      {
        breakTimes.map(time => <Break time = {time}></Break>)
      }
      </div>
    </div>
  );
};

export default Breaks;
