import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors'

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_END_POINT,
  timeout: 10 * 1000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export const EXTERNAL_API: AxiosInstance = axios.create(axiosRequestConfig)
// EXTERNAL_API.interceptors.request.use(requestInterceptor)
// EXTERNAL_API.interceptors.response.use(successInterceptor, errorInterceptor)

export const API: AxiosInstance = axios.create({
  ...axiosRequestConfig,
  baseURL: process.env.REACT_APP_API_BASE_URL
})
API.interceptors.request.use(requestInterceptor)
API.interceptors.response.use(successInterceptor, errorInterceptor)

export const API_V2: AxiosInstance = axios.create({
  ...axiosRequestConfig,
  baseURL: process.env.REACT_APP_AUTH_BASE_URL,
  timeout: 5000
})
API_V2.interceptors.request.use(requestInterceptor)
API_V2.interceptors.response.use(successInterceptor, errorInterceptor)

export const postWithToken = async <Response, Body>(
  url: string,
  body?: Body,
  config?: AxiosRequestConfig
) => {
  return await API.post<Response>(`${url}`, body, config)
}

export const putWithToken = async <Response, Body>(url: string, body?: Body) => {
  return await API.put<Response>(`${url}`, body)
}

export const deleteWithToken = async <Response, Body>(
  url: string,
  body?: Body,
  config?: AxiosRequestConfig
) => {
  return await API.delete<Response>(`${url}`, { ...config, data: body })
}

export const getWithToken = async <Response>(url: string, config?: AxiosRequestConfig) => {
  return await API.get<Response>(`${url}`, config)
}

export const getWithTokenApiV2 = async <Response>(url: string, config?: AxiosRequestConfig) => {
  return await API_V2.get<Response>(`${url}`, config)
}
