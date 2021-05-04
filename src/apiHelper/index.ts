import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: any) {
    // Do something with response data
    return response;
  },
  function (error: any) {
    // Do something with response error
    return Promise.reject(error);
  }
);

class HttpRequest {
  setHeader(header: any) {
    axiosInstance.defaults.headers.common[header.key] = header.value;
    axiosInstance.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  fetch(methodName: any, data: any) {
    return axiosInstance.get(methodName, {
      params: data,
    });
  }

  create(methodName: any, data: any) {
    return axiosInstance.post(methodName, data);
  }

  update(methodName: any, data: any) {
    return axiosInstance.put(methodName, data);
  }

  delete(methodName: any, id: any) {
    return axiosInstance.delete(methodName, { params: { id: id } });
  }

  request(type: any, url: any, data: any) {
    let promise = null;
    switch (type) {
      case "GET":
        promise = axios.get(BASE_URL + url, { params: data });
        break;
      case "POST":
        promise = axios.post(url, data);
        break;
      case "PUT":
        promise = axios.put(url, data);
        break;
      case "DELETE":
        promise = axios.delete(url, data);
        break;
      default:
        promise = axios.get(url, { params: data });
        break;
    }
    return promise;
  }
}

export default HttpRequest;
