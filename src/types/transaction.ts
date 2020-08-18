export interface ITransaction {
  id: number;
  trx_type: string;
  store_id: number;
  created_by: number;
  party_id: number;
  amount: number;
  created_at: Date;
}
