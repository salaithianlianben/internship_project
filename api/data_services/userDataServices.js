import request from '../request';
import config from '../../utils/configs';

const userDataServices = {
  getAllUser: () => {
    let path = `${config.fetchAllUsers}`;
    
    return request.sendRequestGET(path);
  },
  getUserInfo: (userid) => {
    let path = `${config.fetchUserById}${userid}`;
    
    return request.sendRequestGET(path);
  },
};

export default userDataServices;