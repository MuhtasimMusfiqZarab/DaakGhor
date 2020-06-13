import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  //rendering the header according to the auth value
  renderContent() {
    //there are tree cases
    switch (this.props.auth) {
      case null:
        return 'Processing';
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        //return an array of elements without using only one parent div (without creating any extra div)
        return [
          //provideding static keys becasue we know that we are rendering two List items
          <li key="Payment_button">
            <Payments />
          </li>,
          <li key="Logout_button" href="/api/logout">
            Logout
          </li>,
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
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
