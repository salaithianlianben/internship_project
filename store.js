import * as toolkitRaw from '@reduxjs/toolkit';
import rootReducer from './reducers';
const { createSlice,configureStore } = toolkitRaw.default ?? toolkitRaw;
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger";
import rootSaga from './saga/index';

//create Middleware
const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger]
});
sagaMiddleware.run(rootSaga)
export {
  store
}