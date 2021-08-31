import axios from 'axios';

console.log('process.env.REACT_APP_API_BASE',process.env.REACT_APP_API_BASE)

const instance = axios.create(
    {
        baseURL: process.env.REACT_APP_API_BASE
    }
);


instance.interceptors.response.use((response) => {
    console.log('response succcess')
    return response;
  }, (error) => {


    console.log('API response error',error.message)
    return Promise.resolve({ error });
  });

instance.defaults.headers.common = {
    ...instance.defaults.headers.common,
    
    "Content-Type": 'application/json',
 };
 instance.defaults.preflightContinue = true;
 
export default instance;