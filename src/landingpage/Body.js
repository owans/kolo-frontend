import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";
import playstore01 from "../img/android.webp";
import applestore from "../img/ios.webp";
import shield from "../img/shield.png";
import "./landingpage.css";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem("kolosave_token");

      if (!token) {
        this.props.history.push("/");
        return;
      }
      this.props.history.push("/account");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <section className="container px-lg-4">
            <div className="row py-5 my-5 mr-auto" id="bg-image">
              
                <div id="savings">
                    <h1 class="font-weight-bold">The Better Way To<br/>
                    Save & Invest
                    </h1>
                    <p>Kolosave (<Link href="https://piggybank.ng">formerly piggybank.ng</Link>) helps you stop excessive<br/>spending by allowing you save and invest money you would<br/>normally be tempted to spend.</p>
                    <p>Earn Over 10% Interests On Savings.<br/>Earn Over 13% Return On Investments.</p>
                    <Animated
                      animationIn="shake"
                      animationOut="shake"
                      animationInDuration={1000}
                      animationOutDuration={1000}
                      animationOutDelay={10000}
                      animationInDelay={5000}
                      >
                    <button className="btn btn-lg px-4 py-2 mb-3" 
                    id="create2"><Link to="/signup" 
                    style={{textDecoration: "none"}}
                    >
                    Create a Free Account
                    </Link>
                    </button>
                    </Animated>
                    <div className="my-4">
                        <Link href="#"><img src={applestore} 
                        alt="ios"></img></Link><Link href="#" 
                        className="ml-1"><img src={playstore01} 
                        alt=""></img></Link>
                    </div>
                </div>
            </div>
        </section>

        <div className="col-sm-auto d-flex justify-content-left">
          <span
            className="align-middle"
            style={{
              color: "#545454",
              fontSize: 18,
              fontFamily: "Varela Round"
            }}
          >
            <h2 style={{color: '#545454'}}>Your Security is our Priority </h2>

            <p className="mt-2">
              KoloSave uses the highest levels of Internet Security,
            </p>

            <p> and it is secured by 256 bits SSL security encryption</p>
            <p>
              {" "}
              to ensure that your information is completely protected from
              fraud.
            </p>
          </span>
          <img src={shield} alt="" />
        </div>
        <div className="col-sm-auto d-flex justify-content-end top_margin">
          <span
            className="align-middle"
            style={{
              color: "#545454",
              fontSize: 18,
              fontFamily: "Varela Round"
            }}
          >
            <h2 style={{color: '#545454'}}>Save Smart & Responsibly</h2>

            <p className="mt-2">
            KoloSave helps you reach your savings target much faster with various savings types.
            </p>
          </span>
        </div>
        <div className="row d-flex justify-content-between p-2">
          <div className=" border-warning m-3" style={{ maxWidth: 400 }}>
            <div className="card-body text-warning">
              <h5
                className="card-title"
                style={{
                  fontSize: 20,
                  fontFamily: "Varela Round",
                  fontWeight: "bolder"
                }}
              >
                Enjoy quarterly savings
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: 20,
                  fontFamily: "Varela Round",
                  color: "#545454"
                }}
              >
                Join over 100,000 users that use our quarterly savings feature
                called "KoloSave" to reach their general/personal savings goals
                more quickly.
              </p>
            </div>
          </div>
          <div className="border-warning m-3" style={{ maxWidth: 400 }}>
            <div className="card-body text-warning">
              <h5
                className="card-title"
                style={{
                  fontSize: 20,
                  fontFamily: "Varela Round",
                  fontWeight: "bolder"
                }}
              >
                Reach multiple targets
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: 20,
                  fontFamily: "Varela Round",
                  color: "#545454"
                }}
              >
                Set and reach multiple saving goals you set using our "Target
                Savings" feature, you can save for holidays, fees or even
                special events.
              </p>
            </div>
          </div>
          <div className="border-warning m-3" style={{ maxWidth: 400 }}>
            <div className="card-body text-warning">
              <h5
                className="card-title"
                style={{
                  fontSize: 30,
                  fontFamily: "Varela Round",
                  fontWeight: "bolder"
                }}
              >
                Lock funds away
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: 20,
                  fontFamily: "Varela Round",
                  color: "#545454"
                }}
              >
                Use our "SafeLock" feature to lock funds away so you don't have
                access until your set date. You also earn over 13% p.a.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Body);
