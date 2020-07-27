import React, {Component} from 'react';
import {addOne, subtractOne} from "../redux/actions/counterAction.js";
import {connect} from "react-redux";
import './Main.css';

class Main extends Component {

    render() {
        let {count} = this.props.counter;
        return (
            <div className="cover">
                <div>
                    Counter is: {count}
                </div>
                <div>
                    <button onClick={() => this.props.addOneToCounter()}>Add one</button>
                </div>
                <div>
                    <button onClick={() => this.props.subtractOneFromCounter()}>Subtract one</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => {
    return {
        addOneToCounter: () => dispatch(addOne()),
        subtractOneFromCounter: () => dispatch(subtractOne())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);