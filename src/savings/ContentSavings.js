import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ContentSavings extends Component {
  render() {
    return (
      <div
        style={{
          padding: "3rem",
          color: "#545454",
          backgroundColor: "#f4f6f7",
          fontFamily: "Montserrat"
        }}
      >
        <h4
          style={{ marginTop: "5rem", marginBottom: "5rem", color: "#545454" }}
        >
          <Link to="/dashboard">
            <i className="fas fa-arrow-left" />
            Back:{" "}
          </Link>
          Savings™
          <Link to="#">
            <i className="fas fa-sync-alt text-warning" />
          </Link>
        </h4>

        <div className="row">
          <div className="col-sm">
            <div
              className="card border-success mb-3  "
              style={{ backgroundColor: "#f4f6f7" }}
            >
              <div className="card-header">
                <i className="fas fa-piggy-bank mx-3" />
                Piggybank™ (10% p.a)
              </div>
              <div className="card-body text-success">
                <h5 className="card-title">
                  ₦0.00 <i className="fas fa-arrow-right" />
                </h5>
                <p className="card-text">This Month ₦0.00 AutoSave ₦1,000.00</p>{" "}
                <Link to="#" className="card-link">
                  Quick Save
                </Link>
                <Link to="#" className="card-link">
                  Auto Save
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="card border-warning mb-3"
              style={{ backgroundColor: "#f4f6f7" }}
            >
              <div className="card-header">
                <i className="fas fa-bullseye mx-3" />
                Target Savings (10% p.a)
              </div>
              <div className="card-body text-warning">
                <h5 className="card-title">
                  ₦0.00 <i className="fas fa-arrow-right" />
                </h5>
                <p className="card-text">
                  Interest Earned ₦0.00 Total Balance ₦0.00
                </p>{" "}
                <Link to="#" className="card-link">
                  New Target
                </Link>
                <Link to="#" className="card-link">
                  Manage
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="card border-secondary mb-3 "
              style={{ backgroundColor: "#f4f6f7" }}
            >
              <div className="card-header">
                <i className="fas fa-lock mx-3" />
                SafeLock (13% p.a)
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  ₦0.00 <i className="fas fa-arrow-right" />
                </h5>
                <p className="card-text">
                  Total Earned ₦0.00 Invested Funds ₦0.00
                </p>{" "}
                <Link to="#" className="card-link">
                  Lock Funds
                </Link>
                <Link to="#" className="card-link">
                  Manage
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div
              className="card border-primary mb-3"
              style={{ backgroundColor: "#f4f6f7" }}
            >
              <div className="card-header">
                <i className="fas fa-signature mx-3" />
                PiggyFlex™
              </div>
              <div className="card-body text-primary">
                <h5 className="card-title">
                  ₦0.00 <i className="fas fa-arrow-right" />
                </h5>
                <p className="card-text">Last Credit ₦0.00 Last Use ₦0.00</p>{" "}
                <Link to="#" className="card-link">
                  Use Flex
                </Link>
                <Link to="#" className="card-link">
                  History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ContentSavings);
