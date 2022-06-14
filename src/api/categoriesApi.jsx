import request from '../utils/request';

export function getCategories() {
    return request({
        url: '/Category',
        method: 'GET',
    })
}