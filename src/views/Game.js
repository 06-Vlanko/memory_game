import React from "react";
import { connect } from "react-redux";

import Grid from '../components/Grid'

function Game(props) {
    const size = 8
    if (props.matchedPairs === props.maxMatchedPairs) {
        alert('Congratulations, you won!')
    }
    return (
        <div className = "game-section">
            <Grid size={size} />
        </div>
    )
}

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
    return {
        gameOver: () => dispatch({ type: "GAME_OVER" }),
        addNewScore: () => dispatch({ type: "ADD_NEW_TIME" })
    };
};

// Map redux state values to props:
const mapStateToProps = state => {
    return {
        maxMatchedPairs: state.maxMatchedPairs,
        matchedPairs: state.matchedPairs
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
