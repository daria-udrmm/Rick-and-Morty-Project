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