import request from '../utils/request';



export function login(mail,password) {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            "mail": mail,
            "password": password
        }
       
    })
}