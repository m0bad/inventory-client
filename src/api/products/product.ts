import config from '../../environment/config';
import { ProtectedHttpClient } from '../axios/protected-http-client';
import { IProduct, IProductPayload } from '../../types/product';

export class ProductsApi extends ProtectedHttpClient {
  public constructor() {
    super(config.baseURL);
  }

  public getAllProducts = () => this.instance.get<IProduct[]>(config.products.list);

  public getMyProducts = () => this.instance.get<IProduct[]>(config.products.my);

  public createProduct = (payload: IProductPayload) => this.instance.post<IProduct>(config.products.list, payload);
}
