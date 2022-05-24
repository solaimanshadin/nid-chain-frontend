import axiosInstance from "./axiosInstance";

const postRequest = (url, body, headers = {}, params = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, body, {
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

export default postRequest;
