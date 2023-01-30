import userActionTypes from '../actions/action_types/userActionTypes';

const {
    FETCH_ALL_USERS,
    FETCH_USER_BY_ID
} = userActionTypes;

const userActions = {
    fetchAllUsers:(handleCallback)=>{
        return {
            type:FETCH_ALL_USERS,
            handleCallback
        }
    },
    fetchUserById:(user_id) =>{
        return {
            type:FETCH_USER_BY_ID,
            user_id,
        }
    }

};

export default userActions;