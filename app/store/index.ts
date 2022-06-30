import {AnyAction, combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

// all reducer + api
const combinedReducer = combineReducers({});

// add logic
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  //   if() {} else {}
  return combinedReducer(state, action);
};

// create store
export const store = configureStore({
  reducer: rootReducer,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// add 2nd arg when call api
setupListeners(store.dispatch);

// data type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
