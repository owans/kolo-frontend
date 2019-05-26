import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import "./header.css";
import logo from "../img/undraw_savings_hjfl.svg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top border-bottom navbar-light"
          style={{ backgroundColor: "#f4f6f7" }}
        >
          <div className="container">
            <div className=" col-sm d-flex justify-content-start">
              <Link to="/" style={{textDecoration: "none"}}>
                <img
                  src={logo}
                  className="navbar-brand"
                  width="90"
                  height="50"
                  alt="Company Logo"
                />
                <span
                  className="align-middle"
                  style={{
                    color: "#144499",
                    fontSize: 25,
                    fontFamily: "Varela Round"
                  }}
                >
                  KoloSave
                </span>
              </Link>
            </div>

            <div style={{ fontFamily: "Varela Round" }}>
              <button
                type="button"
                className="btn text-primary"
                style={{ fontSize: 16 }}
              >
                About
              </button>
            </div>

            <div style={{ fontFamily: "Varela Round" }}>
              <button
                type="button"
                className="btn text-primary"
                style={{ fontSize: 16 }}
              >
                Stories
              </button>
            </div>

            <div style={{ fontFamily: "Varela Round" }}>
              <button
                type="button"
                className="btn text-primary"
                style={{ fontSize: 16 }}
              >
                FAQ
              </button>
            </div>

            <div style={{ fontFamily: "Varela Round" }}>
              <button
                type="button"
                className="btn text-primary"
                style={{ fontSize: 16 }}
              >
                Blog
              </button>
            </div>

            <div style={{ fontFamily: "Varela Round" }}>
              <Link to="/login">
                <button
                  type="button"
                  className="btn text-primary"
                  style={{ fontSize: 16 }}
                >
                  Login
                </button>
              </Link>
            </div>

            <Animated
              animationIn="shake"
              animationOut="shake"
              animationInDuration={1000}
              animationOutDuration={1000}
              animationOutDelay={10000}
              animationInDelay={5000}
            >
              <div style={{ fontFamily: "Varela Round" }}>
                <Link to="/signup">
                  <button
                    type="button"
                    id="create"
                    className="btn btn-outline-primary px-3 py-3"
                  >
                    Create a Free Account
                  </button>
                </Link>
              </div>
            </Animated>
          </div>
        </nav>
      </div>
    );
  }
}
