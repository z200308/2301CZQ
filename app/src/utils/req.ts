import axios from "axios";

const http=axios.create({
    baseURL:'https://api.it120.cc/xiaochengxu/',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

http.interceptors.request.use(config=>{
    return config
})


http.interceptors.response.use(res=>{
    return res
})

export default http
