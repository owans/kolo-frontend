import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FormLogin from "./FormLogin";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormLogin />
        <Footer />
      </div>
    );
  }
}
