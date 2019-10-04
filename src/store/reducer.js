////////// Redux Store ////////////

const initialState = {
    count: 0,
    name: "Abdul"
  };
  
  // Function to accept state and actions. Default
  // param used is initialState if one is not specified:
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return {
          ...state,
          name: action.value
        };
      case "INCREMENT_COUNT":
        return {
          ...state,
          count: state.count + 1
        };
      case "DECREMENT_COUNT":
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  };
  
  export default reducer;