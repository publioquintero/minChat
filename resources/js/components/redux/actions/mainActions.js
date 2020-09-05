import api from '../../api'

export const getMessages = () => async dispatch => {
    try {
        const response  = await api.get('messages');
        if(response.status === 200) {
            dispatch({
                type: 'GET_MESSAGES',
                payload: response.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const sentMessage = (data) => async dispatch => {
    try {
        const response = await api.post('messages', data);
        if(response.status === 200) {
            dispatch({
                type: 'SEND_MESSAGE',
                payload: data
            })
            dispatch({
                type: 'SENDING'
            })
        }
    } catch (error) {
        console.log(error)
    }
}