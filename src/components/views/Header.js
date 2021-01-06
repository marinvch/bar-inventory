import React from "react";
import Nav from "../Nav";
import "../../styles/main.css";

export default function Header() {
  return (
    <div className="d-flex bd-highlight wrapper">
      <div className="p-2 flex-shrink-1 bd-highlight">
        <Nav />
      </div>
      <div className="p-2 w-100 bd-highlight"></div>
    </div>
  );
}
