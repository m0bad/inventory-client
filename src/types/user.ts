export enum UserTypeEnum {
  CUSTOMER = 'Customer',
  SUPPLIER = 'Supplier',
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  name: string;
  user_type: UserTypeEnum;
  password: string;
}

export interface RegisterResponse {
  email: string;
  name: string;
  user_type: UserTypeEnum;
}

export interface LoginResponse {
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  user_type: UserTypeEnum;
}

export interface AuthState {
  loggedIn: boolean;
  loading: boolean;
  error: boolean;
}
