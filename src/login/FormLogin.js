import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
// import "./signin.css";

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
    <div className="d-flex justify-content-center">
      <div class="" style={{ maxWidth: 1000 }}>
        <div class="main_container">
          <Form name="form" className="form_container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                className="form-control"
              />
              {touched.email && errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            <div class="form-row">
              <div className="form-group col-md-6">
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
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                class="btn btn-warning btn-block"
                style={{ color: "#545454" }}
              >
                Create
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-5">
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

const LoginFormUser = withFormik({
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
    email: Yup.string()
      .email("Invalid Email")
      .required("Email Is Required"),
    password: Yup.string()
      .min(6, "Minimum 6 Characters")
      .required("Password Is Required")
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    console.log(values);
    try {
      const res = await axios.post(`/employee/signup`, values);
      console.log(res.data);
      if (res.data.Status === "Error") {
        setErrors({ email: "Email Already Exist" });
        setSubmitting(false);
        return;
      }

      const token = res.data.data.token;

      localStorage.setItem("akoko_token", token);
      resetForm();

      Swal.fire({
        text: "Signup Successful",
        confirmButtonText: "OK"
      });
      props.history.push("/dashboard");
    } catch (err) {
      setSubmitting(false);
      console.log(err);
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
