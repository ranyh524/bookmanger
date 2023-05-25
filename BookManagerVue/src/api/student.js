import request from '@/utils/request'

export function getStudent(){
  return request({
    url: '/students/{id}',
    method: 'get'
  })
}

export function updateStudent(){
  return request({
    url: '/students/{id}',
    method: 'put'
  })
}
