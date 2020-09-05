const initialState = {
    messages: [],
    sent: false,
    firstLoad: true,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_MESSAGES': {
            return {
                ...state,
                messages: action.payload,
            }
        }
        case 'SEND_MESSAGE': {
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            }
        }
        case 'SENDING': {
            return {
                ...state,
                sent: true
            }
        }
        case 'SEND_DONE': {
            return {
                ...state,
                sent: false
            }
        }
        case 'CLOSE_FIRST_LOAD': {
            return {
                ...state,
                firstLoad: false
            }
        }
        default: return state;
    }
}
