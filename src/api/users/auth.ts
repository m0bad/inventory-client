import config from '../../environment/config';
import { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from '../../types/user';
import { HttpClient } from '../axios/http-client';

export class AuthAPi extends HttpClient {
  public constructor() {
    super(config.baseURL);
  }

  public registerUser = (payload: RegisterPayload) =>
    this.instance.post<RegisterResponse>(config.auth.registerEndpoint, payload);

  public loginUser = (payload: LoginPayload) => {
    return this.instance.post<LoginResponse>(config.auth.loginEndpoint, payload);
  };

  public setToken = (token: string): void => {
    localStorage.setItem(config.auth.localStorageKey, token);
  };

  public getToken = (): string | null => {
    return localStorage.getItem(config.auth.localStorageKey);
  };

  public removeToken = (): void => {
    localStorage.removeItem(config.auth.localStorageKey);
  };
}
