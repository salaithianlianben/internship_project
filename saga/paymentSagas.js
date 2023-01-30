import {put, takeLatest} from 'redux-saga/effects';
import paymentActionTypes from '../actions/action_types/paymentActionTypes';
import paymentDataServices from '../api/data_services/paymentDataServices';

const {
  FETCH_ALL_PAYMENT,
  FETCH_ALL_PAYMENT_FAIL,
  FETCH_ALL_PAYMENT_SUCCESS,

  FETCH_PAYMENT_BY_ID,
  FETCH_PAYMENT_BY_ID_FAIL,
  FETCH_PAYMENT_BY_ID_SUCCESS,

} = paymentActionTypes;

function* getPaymentAllData(action) {

  try {
    let data = yield paymentDataServices.getAllPayment();
    // console.log(data);
    if (data.response ) {
      yield put({
        type: FETCH_ALL_PAYMENT_SUCCESS,
        data: data.response,
      });
    } else {
      yield put({
        type: FETCH_ALL_PAYMENT_FAIL,
      });
    }
  } catch (errors) {
    console.log(errors);
    yield put({
      type: FETCH_ALL_PAYMENT_FAIL,
    });
  }
}

export function* watchGetPaymentData() {
  yield takeLatest(FETCH_ALL_PAYMENT, getPaymentAllData);
}


function* getPaymentById(action) {
  const {
    pay_id,
  } = action;

  try {
    let data = yield paymentDataServices.getPaymentById(pay_id);
    // console.log(data);
    if (data.response ) {
      yield put({
        type: FETCH_PAYMENT_BY_ID_SUCCESS,
        data: data.response,
      });
    } else {
      yield put({
        type: FETCH_PAYMENT_BY_ID_FAIL,
      });
    }
  } catch (errors) {
    console.log(errors);
    yield put({
      type: FETCH_PAYMENT_BY_ID_FAIL,
    });
  }
}

export function* watchGetPaymentById() {
  yield takeLatest(FETCH_PAYMENT_BY_ID, getPaymentById);
}
