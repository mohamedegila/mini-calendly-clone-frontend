import axios from "axios";
import { refresh } from "../redux/common/commonSlice";
// import { toast } from 'react-toastify';

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
    
    // toast.success(response.data.message)
    // <ToastContainer />
    return response; 

},
error => {
    // store.dispatch("setIsLoading", false);
    console.log('Error', error);

    store.dispatch(refresh(false));

    // toast.error(error?.response?.message)
        if (error?.response?.status === 401 && error?.response?.data?.errors?.target !== 'login') {
            sessionStorage.removeItem('user');
            window.location.reload();
        }

    // console.log('loadding end');

        return Promise.reject(error);
    }
);

export default instance;
