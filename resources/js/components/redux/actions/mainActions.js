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
    var  today = new Date();
    const d = today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()
    try {
        const response = await api.post('messages', data);
        if(response.status === 200) {
            dispatch({
                type: 'SEND_MESSAGE',
                payload: {
                    message: data.message,
                    time: d,
                }
            })
            dispatch({
                type: 'SENDING'
            })
        }
    } catch (error) {
        console.log(error)
    }
}