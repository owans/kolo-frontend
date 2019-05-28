import React, { Component } from "react";
import activatesaving from "../img/activatesaving.svg";

export default class BodyActivateSavings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <div className="row justify-content-center">
          <h1
            className="float-center text-primary"
            style={{ marginTop: "10rem", fontFamily: "Baloo Bhai" }}
          >
            The right way to save
          </h1>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ height: "45rem", backgroundColor: "#f4f6f7" }}
            >
              <img className="card-img-top " src={activatesaving} alt="Piggy" />
              <div className="card-body">
                <h5 className="mb-4">
                  Titi, build your savings on your terms using our “Kolosave”
                  wallet.
                </h5>
                <h6 className="card-text">
                  ✓ Save daily, weekly or monthly with Autosave.
                </h6>
                <h6>
                  ✓ Four free withdrawal days to build savings discipline*
                </h6>
                <h6 className="mb-5">✓ Earn 10% per annum on savings.</h6>
                <p>
                  *Withdrawals made from your “Piggybank” wallet outside your
                  set withdrawal days attract a 5% breaking fee.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className="main_container "
            style={{ width: 800, minWidth: 450 }}
          >
            <div className="form_container rounded">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="balance"
                  disabled={true}
                  placeholder="New Balance
                  ₦0"
                />
              </div>

              <div className=" form-group mb-2">
                <label htmlFor="account_name">Enter Amount</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  name="deposit"
                  placeholder="e.g 1000"
                />
              </div>
              <small>
                All funds go to your “KoloSave” wallet on KoloSave
              </small>
              <div className="form-group mt-2">
                <button
                  type="submit"
                  value="submit"
                  className="btn btn-primary btn-block"
                  style={{ color: "#545454" }}
                >
                  Submit
                </button>
              </div>

              <small>
                KoloSave uses the highest levels of Internet Security, and it
                is secured by 256 bits SSL security encryption to ensure that
                your information is completely protected.
              </small>
              <h1>
                <i className="fab fa-cc-mastercard mx-3" />
                <i className="fab fa-cc-visa" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
