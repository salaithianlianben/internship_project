import userActionTypes from "../actions/action_types/userActionTypes";

const {
    FETCH_ALL_USERS,
    FETCH_ALL_USERS_FAIL,
    FETCH_ALL_USERS_SUCCESS,
    
    FETCH_USER_BY_ID,
    FETCH_USER_BY_ID_FAIL,
    FETCH_USER_BY_ID_SUCCESS,

} = userActionTypes;

let initStates = {
    all_users:[],
    is_loading:false,
    user_detail:[],
}

const authReducer = (state = initStates,action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                is_loading:true,
                all_users:[]
            }
        case FETCH_ALL_USERS_FAIL:
            return {
                ...state,
                is_loading:false,
            }
        case FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                is_loading:false,
                all_users:action.data
            }
        case FETCH_USER_BY_ID:
            return {
                ...state,
                is_loading:true,
                user_detail:[]
            }
        case FETCH_USER_BY_ID_FAIL:
            return {
                ...state,
                is_loading:false,
            }
        case FETCH_USER_BY_ID_SUCCESS:
            return {
                ...state,
                is_loading:false,
                user_detail:action.data
            }
        default:
            return state;
    }
}

export default authReducer;