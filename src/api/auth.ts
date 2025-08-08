import storage from "../utils/storage";
import { axiosInstance } from "./axiosInstance";

export const login = async (username: string, password: string) => {
    try{
        
        const response = await axiosInstance.post('/api/auth/login', 
            { username, password }
        );
        
        console.log("Login response:", response.data);
        

        //axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        return response;

    } catch (error: any) {
        let message = error.response?.data?.message || "Đăng nhập thất bại";
        if(message.length > 100) {
            message = "Thông tin đăng nhập không hợp lệ";
        }
        return message;
        
    }
    
};

