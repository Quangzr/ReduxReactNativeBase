import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './base';
import {LoginRequest, LoginResponse} from 'app/models/auth.model';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: baseQuery,

  endpoints: builder => ({
    login: builder.mutation<{result: LoginResponse}, LoginRequest>({
      query: (data: LoginRequest) => ({
        url: `/api/MemberTokenAuth/Authenticate`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
export default authApi;
