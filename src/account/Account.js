import React, { Component } from "react";
import FormAccount from "./FormAccount";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default class Account extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormAccount />
        <Footer />
      </div>
    );
  }
}
