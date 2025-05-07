import React from "react";
import { Link } from "react-router-dom";

export default function Blanks() {
  return (
    <div className="container-fluid w-100 bg-light text-danger">
      {" "}
      <Link to="/token" className="nav-link">
        1) Token Twister
      </Link>
      <br /> <br /> <br />
      <Link to="/tiger" className="nav-link">
       2)  Dragon vs tiger
      </Link>
      <Link to="/dragon" className="nav-link">
       3)  Dragon vs tiger  (New)
      </Link>

    </div>
  );
}
