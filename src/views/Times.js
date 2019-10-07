import React from "react";
import { connect } from "react-redux";


function Times(props) {

  const style = {
      'list-style-type': 'none',
      padding: '0px',
      margin: '0px'
  }
  return (
      <div className="times">
            <p>Your best scores:</p>
            <ul style={style}>
                {props.bestScores.map ( element => {
                    return <li>{element}</li>
                })}
            </ul>
      </div>
  );
}

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
    return {
        addNewTime: () => dispatch({ type: "ADD_NEW_TIME" })
    }
};

// Map redux state values to props:
const mapStateToProps = state => {
    return {
        bestScores: state.bestScores,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Times);
