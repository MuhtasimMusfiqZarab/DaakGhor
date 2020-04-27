import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  //rendering the header according to the auth value
  renderContent() {
    //there are tree cases
    switch (this.props.auth) {
      case null:
        return "Processing";
      case false:
        return <a href="/auth/google">Login with google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            href={this.props.auth ? "/surveys" : "/"}
            className="brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
