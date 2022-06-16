import request from '../utils/request';

export function getWorks() {
    return request({
        url: '/Work',
        method: 'GET',
    })
}


export function getWorksByWorkid(id) {
    return request({
        url: '/Work/'+id,
        method: 'GET',
        data:{id}
    })
}

export function addWork(input) {  
    return request({
        url: '/Work',
        method: 'Post',
        data:input
    })
}



