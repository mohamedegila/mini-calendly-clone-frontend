     import api from "./api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createSession() {
    console.log('createSession', `${process.env.REACT_APP_GENERAL_BACKEND_URL}`);
   let res  =  api.get(`${process.env.REACT_APP_GENERAL_BACKEND_URL}/sanctum/csrf-cookie`).then((res)=>{

    console.log({res});

   });


   return res;
  },

  login(params) {
    return api.post(`${process.env.REACT_APP_BACKEND_URL}/login`, params);
  },

  signin(params) {
    return api.post(`${process.env.REACT_APP_BACKEND_URL}/signin`, params);
  },

  logout() {
    return api.get(`${process.env.REACT_APP_BACKEND_URL}/logout`);
  },

  get(module) {
    return api.get(`${process.env.REACT_APP_BACKEND_URL}/${module}`);
  },

  eventRegister(params){
    return api.post(`${process.env.REACT_APP_BACKEND_URL}/event/register`, params);
  }
};
