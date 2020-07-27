import React, { Component } from "react";
import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { loginUser } from "../redux/actions/loginAction.js";
import { connect } from "react-redux";
import "./Main.css";

class Main extends Component {
  testMe = false;
  render() {
    let { count } = this.props.counter;
    let { login } = this.props.loginUser;
    return (
      <React.Fragment>
        <div className="cover login">
          <div>
            <button onClick={() => this.props.activeLoginUser()}>Click to Login</button>
          </div>
        </div>
        <div className="cover counter">
          <div>Counter is: {count}</div>
          <div>
            <button disabled={!login} onClick={() => this.props.addOneToCounter()}>
              Add one
            </button>
          </div>
          <div>
            <button disabled={!login} onClick={() => this.props.subtractOneFromCounter()}>
              Subtract one
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  loginUser: state.loginUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addOneToCounter: () => dispatch(addOne()),
    subtractOneFromCounter: () => dispatch(subtractOne()),
    activeLoginUser: () => dispatch(loginUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
