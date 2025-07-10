const {axiosInstance} = require('.')

//register a new user

export const RegisterUser = async (payload)=>{
    try {
         const response = await axiosInstance.post('http://localhost:8085/api/users//register' , payload)
         return response.data
    } catch (error) {
       return error
    }
 }

 //LoginUser

 export const LoginUser = async (payload)=>{
   try {
      const response = await axiosInstance.post('http://localhost:8085/api/users/login',payload)
      return response.data
   } catch (error) {
      return error
   }
 }


 export const GetCurrentUser = async () => {
   try {
      console.log(localStorage.getItem('token'))
       const response = await axiosInstance.get("http://localhost:8085/api/users/get-current-user");
       return response.data;
   } catch (error) {
       return error;
   }
}