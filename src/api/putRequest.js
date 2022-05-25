import axiosInstance from "./axiosInstance";

const putRequest = (url, body, headers = {}, params = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(url, body, {
        headers: { ...headers },
        params: { ...params },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response);
      });
  });
};

export default putRequest;
