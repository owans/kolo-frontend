import React, { Component } from "react";
import axios from "axios";
import env from "../env";
import FormAccount from "./FormAccount";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: "",
      bank_list: ""
    };
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem("digisave_signin");
      const token2 = localStorage.getItem("digisave_account");
      if (!token) {
        this.props.history.push("/");
        return;
      }
      if (!token2) {
        const res = await axios.get(`${env.api}/user/id`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.setState({
          loading: false,
          user: res.data.data
        });
        const bank_list = await axios.get(`https://api.paystack.co/bank`);

        this.setState({
          loading: false,
          bank_list: bank_list
        });
      }
    } catch (err) {
      console.log(err);
      if (localStorage.getItem("digisave_signin")) {
        localStorage.removeItem("digisave_signin");
        localStorage.removeItem("digisave_account");
      }
      return this.props.history.push("/");
    }
  }

  render() {
    if (this.state.loading) {
      return <h1> </h1>;
    }
    return (
      <div>
        <Header />
        <FormAccount user={this.state.user} bank_list={this.state.bank_list} />
        <Footer />
      </div>
    );
  }
}
