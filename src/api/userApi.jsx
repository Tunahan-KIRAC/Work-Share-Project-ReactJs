import request from '../utils/request';



export function login(mail,password) {
    return request({
        url: '/Login',
        method: 'POST',
        data: {
            "email": mail,
            "password": password
        }
       
    })
}
