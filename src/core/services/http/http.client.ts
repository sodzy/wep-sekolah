import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import environment from '../../../environments/config';


const headerss = {
  Authorization: `Bearer`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const instance = axios.create({
  baseURL: environment.baseApiUrl,
  headers: headerss,
});

type HTTPRequestConfig = AxiosRequestConfig;

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, query?: any, config: HTTPRequestConfig = {}) => {
      let urlAdd = '';
      if (query) {
        for (const key in query) {
          if (key) {
            urlAdd += `&${key}=${query[key]}`;
          }
        }
      }
      if (urlAdd) {
        url += urlAdd.replace('&', '?');
      }
      return axios.get<T>(url, config);
    },
    delete: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.delete<T>(url, config);
    },
    put: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.put<T>(url, body, config);
    },
    patch: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.patch<T>(url, body, config);
    },
    post: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.post<T>(url, body, config);
    },
  };
};

const Http = api(instance);


export { Http};
