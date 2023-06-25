import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <h1 className="text-primary uppercase text-3xl font-bold"><FontAwesomeIcon className="pe-2" icon={faAddressBook} /> Book-Wheel</h1>
      </div>
      {/*  */}
    </div>
  );
};

export default Navbar;
