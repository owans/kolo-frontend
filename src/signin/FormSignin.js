import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
import env from "../env";
import "./signin.css";

const nameRegex = RegExp(/^[a-zA-Z]+$/);
const phoneRegex = RegExp(/^[0]\d{10}$/);

const app = ({ touched, errors, isSubmitting }) => (
  <div className="signin_body ">
    <div className="d-flex justify-content-center">
      <h1 style={{ color: "#545454" }}>Create a Secure Account</h1>
    </div>
    <div className="d-flex justify-content-center mb-5">
      <h6 style={{ color: "#545454" }}>
        Welcome to the future of Savings & Investments
      </h6>
    </div>
    <Form name="form">
      <div className="d-flex justify-content-center">
        <div className="main_container " style={{ width: 800 }}>
          <div className="form_container rounded">
            <div className="form-row">
              <div className=" form-group col-sm">
                <label htmlFor="first_name">First Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="First Name"
                />
                {touched.first_name && errors.first_name && (
                  <p className="error-message">{errors.first_name}</p>
                )}
              </div>

              <div className=" form-group col-sm">
                <label htmlFor="last_name">Last Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Last Name"
                />
                {touched.last_name && errors.last_name && (
                  <p className="error-message">{errors.last_name}</p>
                )}
              </div>
              <p id="emailHelp" style={{ fontFamily: "Cutive Mono" }}>
                NB: First Name and Last Name should match bank account name.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
              {touched.email && errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone_number">Phone</label>
              <Field
                type="text"
                className="form-control"
                name="phone_number"
                placeholder="Phone"
              />
              {touched.phone_number && errors.phone_number && (
                <p className="error-message">{errors.phone_number}</p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group col-sm">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                {touched.password && errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>

              <div className="form-group col-sm">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <Field
                  type="password"
                  className="form-control"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />
                {touched.confirmpassword && errors.confirmpassword && (
                  <p className="error-message">{errors.confirmpassword}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-warning btn-block"
                style={{ color: "#545454" }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
    <div className="d-flex justify-content-center mt-1">
      {" "}
      <h3 style={{ color: "#545454" }}>
        Already have an Account?{" "}
        <Link to="/login" className="text-warning">
          Login
        </Link>
      </h3>
    </div>
    <div className="d-flex justify-content-center">
      <h6 style={{ color: "#545454" }}>
        By continuing, I agree to PiggyVest's Terms of Use & Privacy.
      </h6>
    </div>
  </div>
);

const SigninFormUser = withFormik({
  mapPropsToValues(props) {
    return {
      first_name: "",
      last_name: "",
      email: props.email || "",
      phone_number: "",
      password: "",
      confirmpassword: ""
    };
  },
  validationSchema: Yup.object().shape({
    first_name: Yup.string()
      .required("Required")
      .matches(nameRegex, "Alphabets Only"),
    last_name: Yup.string()
      .required("Required")
      .matches(nameRegex, "Alphabets Only"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email Is Required"),
    phone_number: Yup.string()
      .required("Required")
      .matches(phoneRegex, "Nigerian Phone Numbers Only"),
    password: Yup.string()
      .min(6, "Minimum 6 Characters")
      .required("Password Is Required"),
    confirmpassword: Yup.string()
      .required("Confirm Password")
      .when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Must Match Password")
      })
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    // console.log(values);
    try {
      const res = await axios.post(`${env.api}/user`, values);
      // console.log("Res.data: ", res.data.status);
      if (res.data.status === "error ❗️ ❗️ ❗️ ") {
        setErrors({
          email: "Email May Already Exist",
          phone_number: "Phone Number May Already Exist"
        });
        setSubmitting(false);
        return;
      }

      const token = res.data.data.token;

      localStorage.setItem("digisave_signin", token);
      resetForm();

      Swal.fire({
        text: "Signup Successful",
        confirmButtonText: "OK"
      });
      props.history.push("/account");
    } catch (err) {
      setSubmitting(false);
      console.log(err);
    }
  }
})(app);

function FormSignin(props) {
  return (
    <div>
      <SigninFormUser history={props.history} />
    </div>
  );
}

export default withRouter(FormSignin);
