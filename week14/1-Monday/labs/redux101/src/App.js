
import './App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react'
import increaseAction from './actions/increaseAction';
import decreaseAction from './actions/decreaseAction';
// import addPerson from './actions/addPerson';
// import deletePerson from './actions/deletePerson';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Counter Reducer",
      
    }
  }

  // handleIncrease = () => {
  //   this.setState ({
  //     count: this.state.count + 1
  //   })
  // }

  // handleDecrease = () => {
  //   this.setState ({
  //     count: this.state.count - 1
  //   })
  // }

  handleCount = () => {
    //update global and local state
    this.setState({
      count: this.state.count + 5
    })
    this.props.onIncreaseClick();
  }

  render() {
    return (
      <>
      <h1>{this.props.title}</h1>
      <h1>Global{this.props.counter}</h1>
      <h1>Local{this.state.count}</h1>
      <button onClick={this.handleCount}>Increment</button>
      <button onClick={this.props.onDecreaseClick}>Decrement</button>
      </>
    )
  }
}//end of component
const mapStateToProps = (state) => {
  
  return{
    counter: state.count,
    title: state.title
  }

}
const mapDispatchToProps = (dispatch) => {
  
  return{
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
