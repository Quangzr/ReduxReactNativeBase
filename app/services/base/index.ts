import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from 'app/store';
import Config from 'react-native-config';

export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,

  prepareHeaders: (headers: Headers, {getState}) => {
    // Mark requests as XMLHttpRequest
    headers.set('X-Requested-With', `XMLHttpRequest`);

    // Add authorization token to header if exists
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
