import paymentActionTypes from "../actions/action_types/paymentActionTypes";

const {
    FETCH_ALL_PAYMENT,
    FETCH_ALL_PAYMENT_FAIL,
    FETCH_ALL_PAYMENT_SUCCESS,

    FETCH_PAYMENT_BY_ID,
    FETCH_PAYMENT_BY_ID_FAIL,
    FETCH_PAYMENT_BY_ID_SUCCESS,

} = paymentActionTypes;

let initStates = {
    all_payment:[],
    is_loading:false,
    payment_detail:[],
}

const paymentReducer = (state = initStates,action) => {
    switch (action.type) {
        case FETCH_ALL_PAYMENT:
            return {
                ...state,
                is_loading:true,
                all_payment:[]
            }
        case FETCH_ALL_PAYMENT_FAIL:
            return {
                ...state,
                is_loading:false,
            }
        case FETCH_ALL_PAYMENT_SUCCESS:
            return {
                ...state,
                is_loading:false,
                all_payment:action.data
            }
        case FETCH_PAYMENT_BY_ID:
            return {
                ...state,
                is_loading:true,
                payment_detail:[]
            }
        case FETCH_PAYMENT_BY_ID_FAIL:
            return {
                ...state,
                is_loading:false,
            }
        case FETCH_PAYMENT_BY_ID_SUCCESS:
            return {
                ...state,
                is_loading:false,
                payment_detail:action.data
            }
        default:
            return state;
    }
}

export default paymentReducer;