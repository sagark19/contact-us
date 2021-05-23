import http from '../http-common';


export const addMessage = (data) => {
    return http.post('/addMessage',data)
}
