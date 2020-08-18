import { AxiosRequestConfig } from 'axios';

import { HttpClient } from './http-client';
import config from '../../environment/config';

export class ProtectedHttpClient extends HttpClient {
  public constructor(baseUrl: string) {
    super(baseUrl);

    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    // @ts-ignore
    this.instance.interceptors.request.use(this._handleRequest, this._handleError);
  };

  private _handleRequest = (axiosConfig: AxiosRequestConfig) => {
    axiosConfig.headers.Authorization = 'Token secret-token';

    return config;
  };
}
