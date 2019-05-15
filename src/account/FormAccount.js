import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import env from "../env";

const app = ({ touched, errors, isSubmitting, props }) => (
  <div className="signin_body ">
    <div className="d-flex justify-content-center">
      <h1 style={{ color: "#545454" }}>
        Welcome, set your withdrawal bank account
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
    <Form name="form">
      <div className="d-flex justify-content-center">
        <div className="main_container " style={{ width: 800 }}>
          <div className="form_container rounded">
            <div className="form-group">
              <label htmlFor="account_number">Account Number</label>
              <Field
                type="text"
                className="form-control"
                name="account_number"
                placeholder="Account Number"
              />
              {touched.account_number && errors.account_number && (
                <p className="error-message">{errors.account_number}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="bank_name">Bank Name</label>
              <Field
                className="form-control"
                component="select"
                name="bank_name"
                required
              >
                <option defaultValue value="">
                  --please select an option--
                </option>
                <option value="Male">male</option>
                <option value="Female">female</option>
              </Field>
            </div>

            <div className=" form-group">
              <label htmlFor="account_name">Account Name</label>
              <Field
                type="text"
                className="form-control"
                name="account_name"
                placeholder="Account Name"
                disabled={true}
              />
              {touched.account_name && errors.account_name && (
                <p className="error-message">{errors.account_name}</p>
              )}
            </div>

            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-warning btn-block"
                style={{ color: "#545454" }}
              >
                Verify Bank
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
);

const SigninFormAccount = withFormik({
  mapPropsToValues(props) {
    return {
      bank_name: "",
      account_number: "",
      account_name: "",
      props: props.user
    };
  },
  validationSchema: Yup.object().shape({
    bank_name: Yup.string().required("Required"),
    account_number: Yup.string().required("Required"),
    account_name: Yup.string()
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    console.log("Form Account Values: ", values);
    try {
      const res = await axios.post(`${env.api}/account`, values);
      console.log("Res.data: ", res.data.status);
      if (res.data.status === "error ❗️ ❗️ ❗️ ") {
        setErrors({
          account_number: "Account Number Already Exist"
        });
        setSubmitting(false);
        return;
      }

      const token = res.data.data.token;

      localStorage.setItem("digisave_account", token);
      resetForm();

      Swal.fire({
        text: "Verification Successful",
        confirmButtonText: "OK"
      });
      props.history.push("/dashboard");
    } catch (err) {
      setSubmitting(false);
      console.log(err);
    }
  }
})(app);

function FormAccount(props) {
  // console.log("From child: ", props.user);
  // console.log("From child: ", props.bank_list);
  return (
    <div>
      <SigninFormAccount
        history={props.history}
        user={props.user}
        bank_list={props.bank_list}
      />
    </div>
  );
}

export default withRouter(FormAccount);
