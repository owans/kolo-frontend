import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import env from "../env";

class BodyActivate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      first_name: ""
    };
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem("kolosave_token");
      if (!token) {
        this.props.history.push("/");
        return;
      }

      const res = await axios.get(`${env.api}/user/id`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // console.log("User Data: ", res.data.data._id);
      this.setState({
        loading: false,
        first_name: res.data.data.first_name
      });

      const verified = await axios.get(`${env.api}/account/id`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (verified.data.data === null) {
        this.props.history.push("/account");
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="" style={{ marginTop: "10rem", color: "#545454" }}>
        <div className="d-flex justify-content-center">
          <h1>{this.state.first_name}, pick an option.</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h6>You can manage all aspects of your finances with Kolosave.</h6>
        </div>
        <div className="d-flex justify-content-center">
          <h6>Tap one of the options below and let's get started.</h6>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="card my-5 rounded border-warning border-top-0 border-left-0"
                style={{
                  backgroundColor: "#FFF9C4"
                }}
              >
                <Link
                  to="/activatesavings"
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontFamily: "Montserrat"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">I Want to Build My Savings</h5>
                    <p className="card-text">Free Quarterly Withdrawal</p>
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
            <div className="col">
              <div
                className="card my-5 rounded border-warning border-top-0 border-left-0"
                style={{ backgroundColor: "#B2EBF2" }}
              >
                <Link
                  to="/activateinvestment"
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontFamily: "Montserrat"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">I Want to Invest Gradually</h5>
                    <p className="card-text">
                      Invest in Real Estate, Bonds, Agriculture, ect.
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
            <div className="w-100" />
            <div className="col">
              <div
                className="card my-5 rounded border-warning border-top-0 border-left-0"
                style={{ backgroundColor: "#F0FFFF" }}
              >
                <Link
                  to="/activatefixmoney"
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontFamily: "Montserrat"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      I Want to Fix Money For a While
                    </h5>
                    <p className="card-text">
                      You Can Select The Duration. Interest Paid Upfront
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
            <div className="col">
              <div
                className="card my-5 rounded border-warning border-top-0 border-left-0"
                style={{ backgroundColor: "#E7F2ED" }}
              >
                <Link
                  to="/activatesavinggoal"
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontFamily: "Montserrat"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      I Want to Save Towards a Goal
                    </h5>
                    <p className="card-text">
                      Reach Saving Goals, Personal or as a Group
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
      </div>
    );
  }
}

export default withRouter(BodyActivate);
