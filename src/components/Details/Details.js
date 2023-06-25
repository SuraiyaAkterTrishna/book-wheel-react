import React from "react";

const style = {
  backgroundColor: "rgb(242, 244, 250)",
};
const Details = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold ps-5 py-6">Study details</h1>
      <div style={style} className=" ms-4 me-6 pe-6 border-0 rounded-xl py-3 px-2 flex justify-between">
        <p className="font-bold">Reading Time</p>
        <p className=" text-gray-500">15 seconds</p>
      </div>
      <div style={style} className=" ms-4 me-6 pe-6 border-0 rounded-xl py-3 px-2 flex justify-between my-4">
        <p className="font-bold">Break Time</p>
        <p className=" text-gray-500">15 seconds</p>
      </div>
    </div>
  );
};

export default Details;
