import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.addOne}>+1</button>
                <button onClick={this.props.removeOne}>-1</button>
                <button onClick={this.props.addTen}>+10</button>
                <button onClick={this.props.removeTen}>-10</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state,
    }
}

const matchDispatchToProps = dispatch => {
    return {
        addOne: () => dispatch({ type: "ADD" }),
        addTen: () => dispatch({ type: "ADD_TEN"}),
        removeOne: () => dispatch({ type: "REMOVE"}),
        removeTen: () => dispatch({ type: "REMOVE_TEN"}),
        reset: () => dispatch({ type: "RESET"}),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);