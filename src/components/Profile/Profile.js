import React from "react";
import person from "../../images/logo .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="flex items-center">
      <img src={person} width="150px" alt="" />
      <div>
        <h4 className="text-xl font-bold">Md. Kamrujjaman</h4>
        <p style={{color: 'gray'}}>
          <FontAwesomeIcon className="pe-2" icon={faLocationDot} />
          Khulna, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default Profile;
