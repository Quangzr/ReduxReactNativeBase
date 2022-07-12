import {AnyAction, combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import authApi from 'app/services/auth.service';
import authSlice from './auth.slice';

// all reducer + api
const combinedReducer = combineReducers({
  // services
  [authApi.reducerPath]: authApi.reducer,

  // slices
  [authSlice.name]: authSlice.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  // if else here to controll the reducer
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
