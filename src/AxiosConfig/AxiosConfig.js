import axios from "axios";
import store from "../store/store";
import { changeLoader } from "../store/slices/loader";


const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});


axiosInstance.interceptors.request.use(

  (confg) => {
    console.log(confg);
    store.dispatch(changeLoader(true))
    return confg
  },
  (err) => {
    console.log(err);
    return Promise.reject(err)
  }
)

axiosInstance.interceptors.response.use(
  (res) => { 
    store.dispatch(changeLoader(false))

    return res },
  (err) => { return Promise.reject(err) }
)


export default axiosInstance;
