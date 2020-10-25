

const initialState = {
    count : 0,
  };

 const rootReducer = (state=initialState,action) => {

    
    console.log('reducer',state,action);
    switch(action.type) {
      case 'INCREMENT':
        return  {count:state.count+1};
      case 'DECREMENT':
        return (state.count>0) ? {count:state.count-1} : {count:state.count};
      case 'RESET':
        return {count:0};
      default:
        return state;
    }
  
  }

  export default rootReducer ;