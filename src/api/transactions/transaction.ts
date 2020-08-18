import config from '../../environment/config';
import { ProtectedHttpClient } from '../axios/protected-http-client';
import { ITransaction } from '../../types/transaction';

export class TransactionApi extends ProtectedHttpClient {
  public constructor() {
    super(config.baseURL);
  }

  public getMyTransactions = () => this.instance.get<ITransaction[]>(config.transaction.my);
}
