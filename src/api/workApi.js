import request from '../utils/request';

export function getWorks() {
    return request({
        url: '/Work',
        method: 'GET',
    })
}
export function getCategories() {
    return request({
        url: '/Category',
        method: 'GET',
    })
}


export function login(mail, password) {
    return request({
        url: '/login',
        method: 'POST',
        data: {mail, password}
    })
}

