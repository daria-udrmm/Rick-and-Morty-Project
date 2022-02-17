export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request('https://rickandmortyapi.com/api/character')
        .then(data => dispatch(heroesFetched(data)))
}

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const activeFilteredChange = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGE',
        payload: filter
    }
}

export const activeFilterDelete = () => {
    return{
        type: 'ACTIVE_FILTER_DELETE'
    }
}

