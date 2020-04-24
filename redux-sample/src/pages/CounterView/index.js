import { connect } from "react-redux";
import { CounterView as Component } from "./CounterView";
import { increment, decrement, add } from "../../store/modules/counter/actions";

const mapStateProps = state => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    add: num => dispatch(add(num))
  };
};

export const CounterView = connect(
  mapStateProps,
  mapDispatchToProps
)(Component);