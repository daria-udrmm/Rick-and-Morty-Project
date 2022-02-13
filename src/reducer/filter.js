const initialState = {
    filter: {
        species: ['Human', 'Alien'],
        gender: ['Male', 'Female', 'unknown'],
        status: ['Alive', 'Dead', 'unknown'],
    },
    activeFilter: {},
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTIVE_FILTER_CHANGE':
            // Object.keys(action.payload).map(item => console.log(item, action.payload[item]));
            // Object.keys(state.activeFilter).map(item => Object.keys(item).map(one => console.log(one)));
            const newObj = state.activeFilter;
            Object.keys(action.payload).map(item => newObj[item] = action.payload[item]);
            return {
                ...state,
                activeFilter: newObj,
            }
        case 'ACTIVE_FILTER_DELETE':
            return {
                ...state,
                activeFilter: {}
            }
        default: return state
    }
    
}

export default filters;