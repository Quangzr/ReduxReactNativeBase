export interface LoginRequest {
  userNameOrEmailAddress: string;
  password: string;
  Rememberclient: boolean;
}

export interface LoginResponse {
  accessToken: string;
}

export interface User {
  // use data here
}
