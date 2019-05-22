import React from "react";
import { Link, withRouter } from "react-router-dom";
import Sidebar from "react-sidebar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ContentDashboard from "./ContentDashboard";
import axios from "axios";
import env from "../env";

const mql = window.matchMedia(`(min-width: 800px)`);

class BodyDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      first_name: "",
      email: ""
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  // componentWillUnmount() {
  //   this.state.mql.removeListener(this.mediaQueryChanged);
  // }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
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

      this.setState({
        first_name: res.data.data.first_name,
        email: res.data.data.email
      });
    } catch (err) {
      console.log(err);
      if (localStorage.getItem("kolosave_token")) {
        localStorage.removeItem("kolosave_token");
      }
      return this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <Sidebar
          sidebar={
            <div style={{ color: "#545454", fontFamily: "Montserrat" }}>
              <h1 style={{ color: "#545454", fontFamily: "Sriracha" }}>
                Hi {this.state.first_name}
              </h1>
              <h5>{this.state.email}</h5>
              <div style={{ marginTop: "5rem" }}>
                <i className="fas fa-tachometer-alt mx-3" />
                <Link to="/dashboard">
                  <button
                    type="button"
                    className=" btn btn-outline-warning  border-0"
                    style={{ fontSize: 20 }}
                  >
                    Dashboard
                  </button>
                </Link>
              </div>
              <div>
                <i className="fas fa-chart-pie mx-3" />
                <button
                  type="button"
                  className="btn btn-outline-warning  border-0"
                  style={{ fontSize: 20 }}
                >
                  Interest
                </button>
              </div>
              <div>
                <i className="fas fa-money-bill-wave mx-3" />
                <button
                  type="button"
                  className="btn btn-outline-warning border-0"
                  style={{ fontSize: 20 }}
                >
                  Transaction
                </button>
              </div>
              <div>
                <i className="fas fa-piggy-bank mx-3" />
                <button
                  type="button"
                  className="btn btn-outline-warning border-0"
                  style={{ fontSize: 20 }}
                >
                  WIthdraw
                </button>
              </div>
              <div>
                <i className="fas fa-cogs mx-3" />
                <button
                  type="button"
                  className="btn btn-outline-warning border-0"
                  style={{ fontSize: 20 }}
                >
                  Settings
                </button>
              </div>
            </div>
          }
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            sidebar: {
              color: "#545454",
              fontFamily: "Baloo Bhai",
              marginTop: "5.5rem",
              padding: "1rem",
              backgroundColor: "#f4f6f7"
            }
          }}
        >
          <Navbar />
          <ContentDashboard />
          <Footer />
        </Sidebar>
      </div>
    );
  }
}

export default withRouter(BodyDashboard);
