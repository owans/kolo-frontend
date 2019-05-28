import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
import env from "../env";

const app = ({ touched, errors, isSubmitting }) => (
  <div className="signin_body ">
    <div className="d-flex justify-content-center">
      <h1 style={{ color: "#144499" }}>Secure Login</h1>
    </div>
    <div className="d-flex justify-content-center mb-5">
      <h6 style={{ color: "#144499" }}>It's time to Save & Invest</h6>
    </div>
    <Form name="form">
      <div className="d-flex justify-content-center">
        <div className="main_container " style={{ width: 800, minWidth: 450 }}>
          <div className="form_container rounded">
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
            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-block"
                style={{ color: "#fff" }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>

    <div className="d-flex justify-content-center mt-1">
      <Link to="/signup">
        <button
          type="button"
          className="btn btn-primary px-3 "
          style={{ color: "#fff", fontSize: 20 }}
        >
          Create an Account Instead
        </button>
      </Link>
    </div>
    <div className="d-flex justify-content-center mt-2">
      <h6 style={{ color: "144499" }}>Forgot Password?</h6>
    </div>
  </div>
);

const LoginFormUser = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email Is Required"),
    password: Yup.string()
      .min(6, "Minimum 6 Characters")
      .required("Password Is Required")
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    // console.log("login values: ", values);
    try {
      const res = await axios.post(`${env.api}/user/login`, values);

      const token = res.data.token;

      // console.log("response after post: ", res);

      if (res.data.message === "invalid account") {
        setErrors({
          email: "Incorrect login details",
          password: "Incorrect login details"
        });
        setSubmitting(false);
        return;
      }

      if (res.data.message === "account not verified") {
        Swal.fire({
          text: "Please Verify Account",
          confirmButtonText: "OK"
        });
        // console.log("response after account not found: ", res);
        localStorage.setItem("kolosave_token", token);
        resetForm();
        props.history.push("/account");
        return;
      }

      localStorage.setItem("kolosave_token", token);
      resetForm();

      Swal.fire({
        text: "Welcome",
        confirmButtonText: "👍"
      });

      props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
  }
})(app);

function FormLogin(props) {
  return (
    <div>
      <LoginFormUser history={props.history} />
    </div>
  );
}

export default withRouter(FormLogin);
