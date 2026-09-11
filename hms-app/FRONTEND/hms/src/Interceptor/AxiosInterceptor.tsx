import axios, { type InternalAxiosRequestConfig } from 'axios'
const axiosInstance = axios.create({
    baseURL: "http://localhost:9000"
    //baseURL: "https://hms-gateway-service.livelycoast-b05a0b25.uaenorth.azurecontainerapps.io"
})

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // console.log("interceptor: ", config)
        const token = localStorage.getItem("token");
        if(token && config.headers){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }
)

export default axiosInstance;