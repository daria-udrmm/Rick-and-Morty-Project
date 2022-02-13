const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}


const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle',
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_SET_LIKE':
            let likedCheck;
            state.heroes.map(item => item.id == action.payload ? likedCheck = !item.liked : null);
            return{
                ...state,
                heroes: state.heroes.map(item => item.id == action.payload ? {...item, liked: !item.liked, color: likedCheck ? 'red' : '#9dccd8'} : {...item})
            }
        default: return state
    }
}

export default heroes;