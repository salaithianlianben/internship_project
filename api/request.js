import {fetchWithTimeout} from './fetchWithTimeout';

const log = (message, ...optionalParams) => {
  if (__DEV__) {
    console.log(message, optionalParams);
  }
};
const request = {

  sendRequestGET: async (path) => {
    let url = `${path}`;

    return new Promise(function (resolve, reject) {
      log('ENDPOINT URL: ', url);

      if (path === undefined) {
        return [];
      }

      let option = {
        method: 'GET',
      };
      
      fetch(url, option)
        .then((response) => {
          try {
            if (response.status >= 200 && response.status <= 299) {
              return response.json();
            } else if (response.status === 400) {
              reject({err: 400, msg: 'Bad Request!'});
            } else if (response.status === 500) {
              reject({err: 500, msg: 'Internal Error!'});
            } else {
              reject({err: 0, msg: 'Error!'});
            }
          } catch (err) {
            log('ERROR 2', err);
            reject({err: 2, msg: 'Session expired'});
          }
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          log('ERROR 1', error);
          reject({err: 1, msg: 'Check internet connection'});
        });
    });
  },
  
};

export default request;
