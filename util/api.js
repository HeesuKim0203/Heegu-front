import axios from 'axios'

export const BASE_URL = 'https://www.heegublog.com/api' ;

const api = axios.create({
    baseURL : BASE_URL,
    headers : { 'Content-Type' : 'application/json' }
}) ;

export const login = data => api.post('/auth/login', data, {
    headers : { 'Content-Type' : 'application/json' }
}) ;
export const getProjects = () => api.get('/projects') ;
export const getCareers = () => api.get('/careers') ;
export const getBlogs = () => api.get(`/blogs`) ;
export const getBlogsId = id => api.get(`/blogs/${id}`) ;

export const createBlog = (data, token) => api.post('/blogs', data, {
    headers : { 
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`, 
    }
}) ;
