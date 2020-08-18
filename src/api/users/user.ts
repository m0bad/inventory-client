import config from '../../environment/config';
import { RegisterPayload, RegisterResponse } from '../../types/user';
import { ProtectedHttpClient } from '../axios/protected-http-client';

export class UserAPi extends ProtectedHttpClient {
  public constructor() {
    super(config.baseURL);
  }

  public getCurrentUser = () => {
    return this.instance.get<RegisterResponse>(config.user.currentUser);
  };

  public setUser = (user: RegisterResponse | null): void => {
    localStorage.setItem(config.user.localStorageKey, JSON.stringify(user));
  };

  public getUser = (): RegisterPayload | null => {
    const item = localStorage.getItem(config.user.localStorageKey);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };
}
