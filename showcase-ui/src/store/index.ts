import { configureStore } from "@reduxjs/toolkit";
import { authSlice, persistedAuthReducer } from "reducers";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "sagas/root";
const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [authSlice.name]: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleWare) => {
    if (process.env.NODE_ENV === "production") {
      return getDefaultMiddleWare({ thunk: false, serializableCheck: false }).concat(sagaMiddleWare);
    } else {
      return getDefaultMiddleWare({ thunk: false, serializableCheck: false }).concat(logger).concat(sagaMiddleWare);
    }
  },
});

const persister = persistStore(store);

export { store, persister };
sagaMiddleWare.run(rootSaga);
