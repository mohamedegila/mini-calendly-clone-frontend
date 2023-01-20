import axios from "axios";
import { refresh } from "../redux/common/commonSlice";
import { useDispatch } from "react-redux";

import store from "../redux/store";


let instance = axios.create({
    withCredentials: true,
});

instance.interceptors.request.use(async request => {
    // const dispatch = useDispatch();

    console.log({request});
    request.headers['Accept']       = 'application/json';
    request.headers['Content-Type'] = 'application/json';
    request.headers['Authorization'] = `Bearer ${sessionStorage.user ? JSON.parse(sessionStorage.getItem('user'))['token'] : null}`

    console.log('loadding start');
    store.dispatch(refresh(true));
    // dispatch(refresh(true));

    return request;
});

instance.interceptors.response.use(
async response => { 
    // const dispatch = useDispatch();

    console.log('loadding end');
    store.dispatch(refresh(false));
    

    return response; 

},
error => {
    // store.dispatch("setIsLoading", false);
    console.log('Error');

    store.dispatch(refresh(false));

        if (error?.response?.status === 401) {
            sessionStorage.removeItem('user');
            window.location.reload();
        }

    // console.log('loadding end');

        return Promise.reject(error);
    }
);

export default instance;
