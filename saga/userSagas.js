import {put, takeLatest} from 'redux-saga/effects';
import userActionTypes from '../actions/action_types/userActionTypes';
import userDataServices from '../api/data_services/userDataServices';

const {
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_FAIL,
  FETCH_ALL_USERS_SUCCESS,

  FETCH_USER_BY_ID,
  FETCH_USER_BY_ID_FAIL,
  FETCH_USER_BY_ID_SUCCESS,

} = userActionTypes;

function* getUserAllData(action) {
  const {
    handleCallback,
  } = action;

  try {
    let data = yield userDataServices.getAllUser();
    // console.log(data);
    if (data.response ) {
      yield put({
        type: FETCH_ALL_USERS_SUCCESS,
        data: data.response,
      });
      handleCallback()
    } else {
      yield put({
        type: FETCH_ALL_USERS_FAIL,
      });
    }
  } catch (errors) {
    console.log(errors);
    yield put({
      type: FETCH_ALL_USERS_FAIL,
    });
  }
}

export function* watchGetUserData() {
  yield takeLatest(FETCH_ALL_USERS, getUserAllData);
}


function* getUserById(action) {
  const {
    user_id,
  } = action;

  try {
    let data = yield userDataServices.getUserInfo(user_id);
    // console.log(data);
    if (data.response ) {
      yield put({
        type: FETCH_USER_BY_ID_SUCCESS,
        data: data.response,
      });
    } else {
      yield put({
        type: FETCH_USER_BY_ID_FAIL,
      });
    }
  } catch (errors) {
    console.log(errors);
    yield put({
      type: FETCH_USER_BY_ID_FAIL,
    });
  }
}

export function* watchGetUserById() {
  yield takeLatest(FETCH_USER_BY_ID, getUserById);
}
