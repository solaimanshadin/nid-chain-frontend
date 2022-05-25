import axiosInstance from "./axiosInstance";

const getRequest = (url, headers = {}, params = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url, { headers: { ...headers }, params: { ...params } })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response);
      });
  });
};

export default getRequest;
