import React, { useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AutchContext";
import Footer from "./views/Footer";

export default function UserNavigation() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
      alert("You have loged out");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div>
      <Navbar variant="pills" className="bg-light">
        <div>
          <NavDropdown.Item className="w-100 text-left mt-2">
            <Link className="btn btn-primary" to="/dashbord">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house-door"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
              </svg>
              Dashboard
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className="w-100">
            <Link className="btn btn-primary w-100" to="/bar-inventory">
              Inventory
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className="btn btn-primary w-100" to="/update-profile">
              Profile
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className="btn btn-primary w-100" to="/status">
              Status
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              className="btn btn-primary w-100"
              variant="link"
              to=""
              onClick={handleLogout}
            >
              Log Out
            </Link>
          </NavDropdown.Item>
        </div>
      </Navbar>

      <Footer />
    </div>
  );
}
