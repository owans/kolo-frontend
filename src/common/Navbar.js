import React, { Component } from "react";
import logo from "../logo.png";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem("digisave_token");
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="navbar-brand">
              <Link to="/">
                <img
                  src={logo}
                  className="navbar-brand"
                  width="90"
                  height="50"
                  alt="Company Logo"
                />
                <span
                  className=" align-middle"
                  style={{
                    color: "#545454",
                    fontSize: 40,
                    fontFamily: "Baloo Bhai"
                  }}
                >
                  DigiSave
                </span>
              </Link>
            </div>
            <div className="navbar-nav mr-auto mt-2 mt-lg-0" />
            <div className="list-inline my-2 my-lg-0">
              <div className="btn-group list-inline-item mr-sm-2">
                <button
                  type="button"
                  style={{ fontSize: 20, fontFamily: "Montserrat" }}
                  className="btn btn-outline-warning  my-2 dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </button>
                <div
                  className="dropdown-menu"
                  style={{ backgroundColor: "#f4f6f7" }}
                >
                  <div style={{ fontFamily: "Montserrat" }}>
                    <Link to="/dashboard">
                      <button
                        type="button"
                        className="btn text-warning"
                        style={{ fontSize: 20 }}
                      >
                        Dashboard
                      </button>
                    </Link>
                  </div>
                  <div style={{ fontFamily: "Montserrat" }}>
                    <button
                      type="button"
                      className="btn text-warning"
                      style={{ fontSize: 20 }}
                    >
                      Interest
                    </button>
                  </div>
                  <div style={{ fontFamily: "Montserrat" }}>
                    <button
                      type="button"
                      className="btn text-warning"
                      style={{ fontSize: 20 }}
                    >
                      Transaction
                    </button>
                  </div>
                  <div style={{ fontFamily: "Montserrat" }}>
                    <button
                      type="button"
                      className="btn text-warning"
                      style={{ fontSize: 20 }}
                    >
                      WIthdraw
                    </button>
                  </div>
                  <div className="dropdown-divider" />
                  <div style={{ fontFamily: "Montserrat" }}>
                    <button
                      type="button"
                      className="btn text-warning"
                      style={{ fontSize: 20 }}
                    >
                      Settings
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className=" btn btn-outline-warning my-2 my-sm-0 border-0"
                style={{ fontSize: 15, fontFamily: "Montserrat" }}
                onClick={this.logout}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
