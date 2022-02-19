const initialState = {
    activePopup: false,
    popupInfo: {}
}


const popup = (state = initialState, action) => {
    switch (action.type) {
        case 'POPUP_SHOW':
            return {
                activePopup: true,
                popupInfo: action.payload
            }
        case 'POPUP_HIDE':
            return {
                activePopup: false,
                popupInfo: {}
            }
        default: return state
    }
}

export default popup;