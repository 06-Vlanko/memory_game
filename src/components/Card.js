import React from "react";
import { connect } from "react-redux";
import '../assets/card.css'

function Card(props) {
    const { id, imgText, flipped, selectedCards } = { ...props }
    console.log('selectedcardslength', selectedCards.length)
    return (
        <div className = {`card ${flipped ? 'flipped' : 'not-flipped'}`} id={ id } onClick = { !props.flipped && selectedCards.length < 2 ? props.selectCard : null} >
            <div className='front'>
            <h3>{imgText}</h3>
            </div>
            <div className='back'></div>
        </div>
    );
}

function getCardElement(event) {
    if (event.target.classList.contains('card')) {
        return event.target
    } else {
        return event.target.closest('.card')
    }
}

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
    return {
        selectCard: (event) => dispatch({ type: "FLIP_CARD", value: getCardElement(event).getAttribute('id')})
    }
};

// Map redux state values to props:
const mapStateToProps = state => {
    return {
        selectedCards: state.selectedCards,
    };
};

// Adding second argument mapDispatchToProps is optional if
// we are not dispatching actions in this component:
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
