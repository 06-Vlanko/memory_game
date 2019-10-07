////////// Redux Store ////////////

const initialState = {
    bestScores: ["0:05:00", "0:15:00", "0:33:00"],
    clickedCards: 0,
    maxMatchedPairs: 4,
    matchedPairs: 0,
    selectedCards: [],
    grid: [
        { id: 0, flipped: false, imgText: 1, matched: false },
        { id: 1, flipped: false, imgText: 1, matched: false },
        { id: 2, flipped: false, imgText: 2, matched: false },
        { id: 3, flipped: false, imgText: 2, matched: false },
        { id: 4, flipped: false, imgText: 3, matched: false },
        { id: 5, flipped: false, imgText: 3, matched: false },
        { id: 6, flipped: false, imgText: 4, matched: false },
        { id: 7, flipped: false, imgText: 4, matched: false },
    ]
};

const updateSelectedCards = (selectedCards, cardId) => {
    if (selectedCards.length < 2) {
        selectedCards.push(cardId)
    }

    return selectedCards
}

const flipCard = (grid, cardId) => {
    let card = grid.find( element => {
        return element.id === parseInt(cardId)
    })

    card.flipped = true

    return grid
}

const pause = (milliseconds) => {
    let date = new Date();
    while ((new Date()) - date <= milliseconds) { /* Do nothing */ }
}

const addNewScore = (bestScores, newScore) => {
    bestScores.push(newScore)
    return bestScores
}

// Function to accept state and actions. Default
// param used is initialState if one is not specified:
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FLIP_CARD": {
            return {
                ...state,
                selectedCards: updateSelectedCards([...state.selectedCards], action.value),
                grid: flipCard([...state.grid], action.value)
            };
        };
        case "ADD_NEW_SCORE":
            return {
                ...state,
                bestTimes: addNewScore(...state.bestScores, action.value)
        };
        default:
            return state;
    }
};
  
export default reducer;