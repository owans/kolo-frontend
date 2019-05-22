import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ContentDashboard extends Component {
  render() {
    return (
      <div>
        <h1 style={{ marginTop: "5rem", padding: "3rem", color: "#545454" }}>
          Savings & Investments{" "}
          <Link to="#">
            <i className="fas fa-sync-alt text-warning" />
          </Link>
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div
                className="card my-5 rounded border-warning border-top-0 border-left-0"
                style={{
                  backgroundColor: "#FFF9C4"
                  // width: "30rem"
                }}
              >
                <Link
                  to="/savings"
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontFamily: "Montserrat"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">₦ 0.00</h5>
                    <p className="card-text">
                      View, manage or topup your savings
                    </p>
                    <h6
                      className="btn btn-outline-warning"
                      style={{
                        fontFamily: "Montserrat"
                      }}
                    >
                      My Savings
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm">
              {" "}
              <div
                className="card my-5 rounded border-warning border-top-0 border-left-0"
                style={{ backgroundColor: "#B2EBF2" }}
              >
                <Link
                  to="/investment"
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontFamily: "Montserrat"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">₦ 0.00</h5>
                    <p className="card-text">
                      Manage, trade or track your investments
                    </p>
                    <h6
                      className="btn btn-outline-warning"
                      style={{
                        fontFamily: "Montserrat"
                      }}
                    >
                      My Investments
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              {" "}
              <div
                className="card rounded border-warning border-top-0 border-left-0"
                style={{ backgroundColor: "#F0FFFF" }}
              >
                <Link
                  to="/activate"
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontFamily: "Montserrat"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Activate Your Account</h5>
                    <p className="card-text">
                      Activate Your Account to Start Saving/Earning
                    </p>
                    <h6
                      className="btn btn-outline-warning"
                      style={{
                        fontFamily: "Montserrat"
                      }}
                    >
                      Activate
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-sm">
            <div className="card" style={{ backgroundColor: "#f4f6f7" }}>
              <div className="card-header">Recent Activities</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#">view more activity >></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ContentDashboard);
