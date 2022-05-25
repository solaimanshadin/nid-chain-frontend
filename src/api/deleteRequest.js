import axiosInstance from "./axiosInstance";

const deleteRequest = (url, headers = {}, params = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(url, { headers: { ...headers }, params: { ...params } })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response);
      });
  });
};

export default deleteRequest;
