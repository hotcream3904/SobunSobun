import axios, { Axios } from "axios";
import { User } from "../types/signIn";
import { findIdType, findPwType } from "../types/findUser";

const instance: Axios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use((config) => {
  const accessToken =
    document.cookie &&
    document.cookie
      .split(";")
      .filter((cookies) => cookies.includes("accessToken"))[0]
      ?.split("=")[1];
  if (accessToken) config.headers.Authorization = accessToken;
  return config;
});

export const signUp = async (newUserInfo: FormData) => {
  const response = await instance.post("/auth/signup", newUserInfo, {
    headers: { "Context-Type": "multipart/form-data" },
  });
  return response;
};

export const signIn = async (user: User) => {
  const response = await instance.post("/auth/login", user, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};

export const getMyPage = async (userId: Number) => {
  const response = await instance.get(`/auth/mypage/${userId}`);
  return response.data;
};

export const putMyPageEdit = async (
  userId: Number,
  nickname: string,
  password: string,
  phoneNumber: string
) => {
  const data = { nickname, password, phoneNumber };
  const response = await instance.put(`/auth/mypage/${userId}`, data);
  return response.data;
};

export const putMyPageEditImage = async (
  userId: Number,
  formData: FormData
) => {
  const response = await instance.put(`/auth/mypage/${userId}/image`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

export const findUserEmail = async (user: findIdType) => {
	const response = await instance.post("/auth/findemail", user);
	return response;
};

export const findPassword = async (user: findPwType) => {
  const response = await instance.post("/auth/findpassword", user);
  return response;
};
