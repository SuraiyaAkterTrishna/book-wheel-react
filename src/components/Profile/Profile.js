import React from "react";
import person from "../../images/logo .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const style = {
  backgroundColor: 'rgb(242, 244, 250)',
}

const Profile = () => {
  return (
    <div>
      <div className="flex items-center py-6">
        <img
          className="border-0 rounded-full"
          src={person}
          width="100px"
          alt=""
        />
        <div>
          <h4 className="text-xl font-bold">Md. Kamrujjaman</h4>
          <p style={{ color: "gray" }}>
            <FontAwesomeIcon className="pe-2" icon={faLocationDot} />
            Khulna, Bangladesh
          </p>
        </div>
      </div>
      {/* stat starts here */}
      <div style={style} className="grid grid-cols-3 gap-2 ms-4 me-6 pe-6 border-0 rounded-xl">
        <div className="stat place-items-center">
          <div className="stat-value"><span className="text-2xl">75</span><span className="text-sm text-gray-400">kg</span></div>
          <div className="stat-desc text-xl">Weight</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-value"><span className="text-2xl">6.2</span></div>
          <div className="stat-desc text-xl">Height</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-value"><span className="text-2xl">25</span><span className="text-sm text-gray-400">yrs</span></div>
          <div className="stat-desc text-xl">Age</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
