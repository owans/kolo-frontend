import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import env from "../env";

class FormAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      email: "",
      first_name: "",
      account_number: "",
      bank_name: [],
      account_name: ""
    };
    this.onChange = this.onChange.bind(this);
    this.banknameonChange = this.banknameonChange.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem("digisave_token");
      if (!token) {
        this.props.history.push("/");
        return;
      }

      const res = await axios.get(`${env.api}/user/id`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // console.log("User Data: ", res.data.data);
      this.setState({
        loading: false,
        email: res.data.data.email,
        first_name: res.data.data.first_name
      });

      const bank_name = await axios.get(`https://api.paystack.co/bank`);
      // console.log("Bank state: ", this.state.bank_name);
      this.setState({
        loading: false,
        bank_name: bank_name.data.data
      });

      let list = <option value="0">select</option>;
      this.state.bank_name.map((bank, index) => {
        return (list +=
          "<option value='" +
          bank.code +
          "'>" +
          bank.name +
          bank.code +
          "</option>");
      });

      document.getElementById("select").innerHTML = list;
    } catch (err) {
      console.log(err);
      if (localStorage.getItem("digisave_token")) {
        localStorage.removeItem("digisave_token");
      }
      return this.props.history.push("/");
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async banknameonChange(e) {
    // console.log("bankname b4 req: ", this.state);
    // console.log("paystack key: ", env.paystack_key);
    this.setState({
      bank_name: e.target.value
    });
    const res = await axios.get(
      `https://api.paystack.co/bank/resolve?account_number=${
        this.state.account_number
      }&bank_code=${e.target.value}`,
      {
        headers: {
          Authorization: `Bearer ${env.paystack_key}`
        }
      }
    );
    // console.log("verification res: ", res.data.data.account_name);
    this.setState({
      account_name: res.data.data.account_name
    });
    // console.log("bankname method: ", this.state);
  }

  isFormValid() {
    const requiredfield = ["account_number", "bank_name"];
    let emptyField = 0;

    requiredfield.forEach(field => {
      if (this.state[field] === "") {
        return ++emptyField;
      }
    });
    if (emptyField > 0) {
      return true;
    } else {
      return false;
    }
  }

  async handleSubmit(e) {
    try {
      if (this.isFormValid()) {
        return;
      }

      const token = localStorage.getItem("digisave_token");

      let headers = {
        Authorization: token
      };
      // console.log("handlesubmit method: ", this.state);
      await axios.post(
        `${env.api}/account`,
        {
          email: this.state.email,
          bank_name: this.state.bank_name,
          account_number: this.state.account_number,
          account_name: this.state.account_name
        },

        {
          headers: headers
        }
      );
      // console.log("handlesubmit res: ", res);
      this.setState({
        account_number: "",
        bank_name: "",
        account_name: ""
      });

      Swal.fire({
        text: "Account Verified",
        confirmButtonText: "OK"
      });
      this.props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.loading) {
      return <h1> </h1>;
    }
    // console.log("Account Number: ", this.state.account_number);
    // console.log("Bank Name: ", this.state.bank_name);
    // console.log("Account Name: ", this.state.account_name);

    return (
      <div className="signin_body ">
        <div className="d-flex justify-content-center">
          <h1 style={{ color: "#545454" }}>
            {this.state.first_name === ""
              ? `Welcome, set your withdrawal bank account`
              : `${this.state.first_name}, set your withdrawal bank account`}
          </h1>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <h6 style={{ color: "#545454" }}>
            Why do you have to set a withdrawal bank? It's simple, in order to
            withdraw the money you save & invest on PiggyVest, you need to set a
            withdrawal bank account. This is where your money returns to after
            saving. The bank account you set must be your own.
          </h6>
        </div>
        <div className="d-flex justify-content-center">
          <div className="main_container " style={{ width: 800 }}>
            <div className="form_container rounded">
              <div className="form-group">
                <label htmlFor="account_number">Account Number</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  className="form-control"
                  name="account_number"
                  placeholder="Account Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="bank_name">Bank Name</label>

                <select
                  id="select"
                  name="bank_name"
                  multiple={true}
                  onChange={this.banknameonChange}
                  value={this.state.bank_name}
                  className="form-control"
                  required
                />
              </div>

              <div className=" form-group">
                <label htmlFor="account_name">Account Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="account_name"
                  value={this.state.account_name}
                  placeholder={this.state.account_name}
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  value="submit"
                  onClick={this.handleSubmit}
                  className="btn btn-warning btn-block"
                  style={{ color: "#545454" }}
                >
                  Verify Bank
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FormAccount);
