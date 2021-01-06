import React from "react";
import Nav from "../Nav";

export default function Header() {
  return (
    <div id="wrapper" className="d-flex bd-highlight">
      <div className="p-2 flex-shrink-1 bd-highlight">
        <Nav />
      </div>
      <div className="p-2 w-100 bd-highlight"></div>
    </div>
  );
}
