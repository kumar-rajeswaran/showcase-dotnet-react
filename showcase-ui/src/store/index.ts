import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "reducers";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "sagas/root";
const sagaMiddleWare = createSagaMiddleware();
export default configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    if (process.env.NODE_ENV === "production") {
      return getDefaultMiddleWare({ thunk: false }).concat(sagaMiddleWare);
    } else {
      return getDefaultMiddleWare({ thunk: false }).concat(logger).concat(sagaMiddleWare);
    }
  },
});
sagaMiddleWare.run(rootSaga);
