import axios from "axios";

  const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api'
  
  });
console.log('file fired once a time');
const token = JSON.parse(window.localStorage.getItem('token'))
if (token) {
   axiosInstance.interceptors.request.use(function (config) {
    config.headers = { ...config.headers, Authorization: 'Token '+token.token };
    // you can also do other modification in config
    return config;
  }, function (error) {
    return Promise.reject(error);
  }); 
}

// axiosInstance.interceptors.request.use(function (config) {
//     const token = JSON.parse(window.localStorage.getItem('token'))
//     config.headers = { ...config.headers, Authorization: 'Token '+token.token };
//     // you can also do other modification in config
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
// }); 

// const axiosInstance = () => {   
      
// }
export default  axiosInstance ;