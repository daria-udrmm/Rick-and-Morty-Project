export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request('https://rickandmortyapi.com/api/character')
        // .then(data => console.log(data))
        .then(data => dispatch(heroesFetched(data)))
        // .catch(() => dispatch(heroesFetchingError()))
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

export const heroesSetLike = (id) => {
    return {
        type: 'HEROES_SET_LIKE',
        payload: id
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

