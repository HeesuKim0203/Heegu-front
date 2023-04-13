import axios from 'axios'

export const BASE_URL = "http://www.heegublog.com/api" ;

const api = axios.create({
    baseURL : BASE_URL,
    headers : {
        'Content-Type' : 'application/json'
    }
}) ;

export const login = data => api.post('/auth/login', data, {
    headers : { 'Content-Type' : 'application/json' }
}) ;
export const getProjects = () => api.get('/projects') ;
export const getCareers = () => api.get('/careers') ;
export const getBlogs = () => api.get(`/blogs`) ;
export const getBlogsId = (id) => api.get(`/blogs/${id}`) ;
