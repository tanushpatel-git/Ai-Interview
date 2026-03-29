import axiosInstance from "../utils/axios.js";

export const createUser = async (data) => {
    const result = await axiosInstance.post("/user/create", data)
    return result.data;
}

export const userLogin = async (data) => {
    const result = await axiosInstance.post("/user/login", data)
    return result.data;
}

export const userLogout = async () => {
    const result = await axiosInstance.get("/user/logout")
    return result.data;
}

export const getCurrentUser = async () => {
    const result = await axiosInstance.get("/user/current-user")
    return result.data;
}