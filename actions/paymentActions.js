import paymentActionTypes from '../actions/action_types/paymentActionTypes';

const {
    FETCH_ALL_PAYMENT,
    FETCH_PAYMENT_BY_ID
} = paymentActionTypes;

const paymentActions = {
    fetchAllPayment:()=>{
        return {
            type:FETCH_ALL_PAYMENT,
        }
    },
    fetchPaymentById:(pay_id) =>{
        return {
            type:FETCH_PAYMENT_BY_ID,
            pay_id,
        }
    }

};

export default paymentActions;