// import axiosInstance from './intercept';
// import axios from "axios";
// const token = JSON.parse(window.localStorage.getItem('token'))
// const authAxios = axios.create({
//     baseURL: 'http://localhost:8000/api',
//     headers: {
//       'Authorization': `token ${token.token}`
//     }
   
//   });


// const authAxios = axiosInstance.interceptors.request.use(function (config) {
//     const token = JSON.parse(window.localStorage.getItem('token'))
//     config.headers = { ...config.headers, Authorization: 'Token '+token.token };
//     // you can also do other modification in config
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
// });
  
// export default authAxios