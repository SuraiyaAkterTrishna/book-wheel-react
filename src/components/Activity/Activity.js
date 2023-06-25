import React from "react";
import Breaks from "../Breaks/Breaks";
import Details from "../Details/Details";
import Profile from "../Profile/Profile";

const Activity = () => {
  return (
    <div>
      <Profile></Profile>
      <Breaks></Breaks>
      <Details></Details>
      <div className="text-center">
        <button className="btn btn-primary w-3/4 my-6">Activity Completed</button>
      </div>
    </div>
  );
};

export default Activity;
