import axios from "axios";
import config from "@/config.json";

const requestConfig = {
  method: "get",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "text/plain",
  //   },
  //   timeout: config.timeout,
};
let instance = axios.create(requestConfig);

instance.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "*/*",
};
instance.defaults.timeout = config.timeout;
instance.defaults.withCredentials = true;

instance.interceptors.request.use(function (config) {
  config.params = Object.assign({}, config.params || {});
  return config;
});

const self = function dispatch(urlInfo) {
  return new Promise(function (resolve, reject) {
    instance(urlInfo)
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
