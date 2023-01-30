import {all, fork} from 'redux-saga/effects';
import {
  watchGetUserData,
  watchGetUserById
} from './userSagas';

import {
  watchGetPaymentById,
  watchGetPaymentData,
} from './paymentSagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetUserData),
    fork(watchGetUserById),
    fork(watchGetPaymentById),
    fork(watchGetPaymentData),
  ]);
}