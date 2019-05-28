import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import weathfarm from "../img/weathfarm.svg";
import poltry from "../img/poltry.svg";
import realestate from "../img/realestate.svg";
import deposit from "../img/deposit.svg";

class ContentInvestment extends Component {
  render() {
    return (
      <div
        style={{
          padding: "3rem",
          color: "#545454",
          backgroundColor: "#f4f6f7"
        }}
      >
        <h4
          style={{ marginTop: "5rem", marginBottom: "5rem", color: "#545454" }}
        >
          <Link to="/dashboard">
            <i className="fas fa-arrow-left" />
            Back:{" "}
          </Link>
          Investify™
          <Link to="#">
            <i className="fas fa-sync-alt text-primary" />
          </Link>
        </h4>
        <div className="card-columns">
          <div className="card border-0" style={{ backgroundColor: "#f4f6f7" }}>
            <img className="card-img-top" src={weathfarm} alt="weath farm" />
            <div className="card-body">
              <h5 className="card-title">Weath Farm in Jos</h5>
              <p className="card-text">20% returns in 9 months</p>
              <div className="card-footer text-muted">
                ₦10,000 Per farm share 724 Investors
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ backgroundColor: "#f4f6f7" }}>
            <img className="card-img-top" src={deposit} alt="weath farm" />
            <div className="card-body">
              <h5 className="card-title">Secure Fixed Income Investment</h5>
              <p className="card-text">18% returns in 12 months</p>
            </div>
            <div className="card-footer text-muted">
              ₦10,000 Per Unit 292 Investors
            </div>
          </div>

          <div
            className="card shadow-lg border-0"
            style={{ backgroundColor: "#f4f6f7" }}
          >
            <img className="card-img-top" src={realestate} alt="" />
            <div className="card-body">
              <h5 className="card-title">Own a piece of Lagos</h5>
              <p className="card-text">
                Long term investment 60% return in five years
              </p>
              <p className="card-text">
                <small className="text-muted">
                  ₦10,000 Per farm share 724 Investors
                </small>
              </p>
            </div>
          </div>

          <div className="card border-0" style={{ backgroundColor: "#f4f6f7" }}>
            <img className="card-img" src={poltry} alt="" />
            <div className="card-body">
              <p className="card-text">Poultry farm at Ogun</p>
              <p className="card-text">
                <small className="text-muted">8% return in 12 months</small>
              </p>
              <div className="card-footer text-muted">
                ₦10,000 Per farm share 724 Investors
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ContentInvestment);
