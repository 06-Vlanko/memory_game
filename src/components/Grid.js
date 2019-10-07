import React from "react";
import { connect } from "react-redux";

import Card from './Card' 

function Grid(props) {
    // for (let i=0; i<props.size; i++) {
    //     grid.push({
    //         fakeId: i,
    //         flippled: false
    //         imgText: i%2 === 0 ? `img${i+1}` : `img${i}.1`,
    //         imgSrc: "https://..."
    //     })
    // }
    return (
        <div id='grid'>
            {props.grid.map(element => {
                return <Card key={element.id} flipped = {element.flipped} id={element.id} imgText={element.imgText} imgSrc={element.id}/>;
            })}
        </div>
    );
}

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
    return {
        compareSelectedCars: () => dispatch({type: 'COMPARE_SELECTED_CARDS'})
    };
};

// Map redux state values to props:
const mapStateToProps = state => {
    return {
        grid: state.grid,
        selectedCards: state.selectedCards
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);
