import CONFIG from '@/config.json';


const tokenService = (function () {
    let _service;
  
    function _getService() {
      if (!_service) {
        _service = this;
        return _service;
      }
      return _service;
    }
    async function _setAzureADToken(azureAD) {
      localStorage.setItem('azureAD', azureAD);
    }
  
    async function _setToken(tokenObj) {
      localStorage.setItem('accessToken', tokenObj.accessToken);
    //   localStorage.setItem('refreshToken', tokenObj.refreshToken);
    }
  
    function _setAccessToken(accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
  
    function _getAccessToken() {
      return localStorage.getItem('accessToken');
    }
  
    function _getRefreshToken() {
      return localStorage.getItem('refreshToken');
    }
    function _clearToken(userRequest) {
    //   const logoutRedirect = `${window.location.origin}/auth/logout`;
    //   window.location.replace(
    //     `${LOGIN_CONSTANS.logoutURL}/?post_logout_redirect_uri=${
    //       userRequest ? logoutRedirect : LOGIN_CONSTANS.redirect_url
    //     }&id_token_hint=${_getid_token()}&state=logout`,
    //   );
      localStorage.clear();
    }
    return {
      getService: _getService,
      setToken: _setToken,
      getAccessToken: _getAccessToken,
      getRefreshToken: _getRefreshToken,
      clearToken: _clearToken,
      setAccessToken: _setAccessToken,
    };
  })();
  export default tokenService;