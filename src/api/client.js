import axios from "axios";
import tokenService from "@/utils/tokenService";
import config from "@/config.json";

const requestConfig = {
  method: "get",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "text/plain",
  //   },
  //   timeout: config.timeout,
};
const TokenService = tokenService.getService();
let instance = axios.create(requestConfig);

instance.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "text/plain",
};
instance.defaults.timeout = config.timeout;
// instance.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
instance.defaults.baseURL = config.BASE_URL;

instance.interceptors.request.use(function (config) {
  const accessToken = TokenService.getAccessToken();
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
  }

  config.params = Object.assign({}, config.params || {});
  return config;
});

const getDispatch = (url, options) => instance.get(url, options);
const postDispatch = (url, payload) => instance.post(url, payload);
// const putDispatch = (url, payload) => instance.put(url, payload);
// const deleteDispatch = (url, payload) =>
//   instance.delete(url, { data: payload });

const self = function dispatch(urlInfo) {
  //   let body;
  //   if (urlInfo.method === "get") body = getDispatch;
  //   if (urlInfo.method === "post") body = postDispatch;
  //   if (urlInfo.method === "put") body = putDispatch;
  //   if (urlInfo.method === "delete") body = deleteDispatch;

  return new Promise(function (resolve, reject) {
    instance(urlInfo)
      // body(urlInfo, payload)
      .then(({ data }) => {
        return resolve(data);
      })
      .catch((err) => {
        console.log("err.response", err?.response?.status);
        if (err.response) {
          reject(err.response);
          //   if (err.response.status === 403) {
          // TokenService.clearToken();
          //   } else if (err.response.status === 401) {
          // const refreshToken = TokenService.getRefreshToken();
          // instance
          //   .post(
          //     `${BASE_URL}/token/refresh-token2?state=${config.LOGIN_CONSTANS.state}`,
          //     {
          //       refreshToken: refreshToken,
          //     }
          //   )
          //   .then((res) => {
          //     TokenService.setToken(res.data);
          //     self(urlInfo, params, payload)
          //       .then((retryData) => {
          //         return resolve(retryData);
          //       })
          //       .catch((retryError) => {
          //         retryError.response && retryError.response.data
          //           ? isDemoUser(window.location.origin)
          //             ? infoNotif(
          //                 retryError.response.data.message,
          //                 false,
          //                 url,
          //                 DEMO_ERROR_TITLE
          //               )
          //             : errorNotif(
          //                 retryError.response.data.message,
          //                 false,
          //                 url,
          //                 undefined
          //               )
          //           : errorNotif(TIME_OUT, false, url);
          //         reject(retryError);
          //       });
          //   })
          //   .catch(() => {
          //     TokenService.clearToken();
          //     // window.location.reload();
          //   });
          //   } else {
          // reject(err.response);
          //   }
        } else {
          reject(err?.response);
        }
      });
  });
};

export default self;
