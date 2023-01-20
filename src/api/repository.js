     import api from "./api";

export default {
  createSession() {
    console.log('createSession', `${process.env.REACT_APP_GENERAL_BACKEND_URL}`);
   let res  =  api.get(`${process.env.REACT_APP_GENERAL_BACKEND_URL}/sanctum/csrf-cookie`).then((res)=>{

    console.log({res});

   });


   return res;
  },

  login(params) {
    return api.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, params);
  },

  forgetPassword(params) {
    return api.post(`${process.env.REACT_APP_BACKEND_URL}/auth/forget-password`, params);
  },
  logout() {
    return api.get(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`);
  },

  save(data){
    return api.post(`${process.env.REACT_APP_BACKEND_URL}/save`, data);
  },

  // getPosts() {
  //   return api.get(`${process.env.VUE_APP_BACKEND_URL}/products`);
  // },


  // index(model, pagination = false, page = 1, search=false){
  //   return api.get(`${process.env.VUE_APP_BACKEND_URL}/admin/${model}`, {
  //     params:{pagination:pagination,page:page, search}});
  // },

  // create(model, data){
  //   return api.post(`${process.env.VUE_APP_BACKEND_URL}/admin/${model}`, data);
  // },
  // update(model, id,data){
  //   return api.put(`${process.env.VUE_APP_BACKEND_URL}/admin/${model}/${id}`, data);
  // },

  // show(model,id){
  //   return api.get(`${process.env.VUE_APP_BACKEND_URL}/admin/${model}/${id}`);
  // },
  
  // destroy(model,id){
  //   return api.delete(`${process.env.VUE_APP_BACKEND_URL}/admin/${model}/${id}`);
  // },

  // toggleApprove(id){
  //   return api.put(`${process.env.VUE_APP_BACKEND_URL}/admin/${'toggle-approve'}/${id}`);
  // },

  // toggleUserApprove(id){
  //   return api.put(`${process.env.VUE_APP_BACKEND_URL}/admin/${'approve-user'}/${id}`);
  // },


  // departmentsIndex(pagination = false, page = 1, type='all'){
  //   return api.get(`${process.env.VUE_APP_BACKEND_URL}/admin/departments`, {
  //     params:{pagination, page, type}});
  // },

};
