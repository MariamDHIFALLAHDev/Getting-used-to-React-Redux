import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement, reset } from './redux/actions/actions';


function Counter({increment,decrement,reset,count}) {

    // const increment = () => {
    //     console.log(props)
    //     props.dispatch({type:"INCEREMENT",payload:3})
    // };

    // const decrement = () => {
    //     props.dispatch({type:"DECREMENT"})
    // };
    
    // const reset = () => {
    //     props.dispatch({type:"RESET"})
    // };

    return (
        <div className="counter">
            <h2>Counter</h2>
            <div> 
                <button onClick={()=>decrement()}>-</button>
                <span className="count">{count}</span>
                <button onClick={()=>increment()}>+</button>
                <button onClick={()=>reset()}>reset</button>
            </div>
        </div>
    )





};

const mapStateToProps = state => {
    console.log(state)
    return {
      count: state.count
   
    };
   };

const mapDisptachToProps = dispatch => {
 return {
     increment : () => dispatch(increment()),
     decrement : () => dispatch(decrement()),
     reset : () => dispatch(reset())
 }
    
}

export default connect(mapStateToProps,mapDisptachToProps)(Counter);
