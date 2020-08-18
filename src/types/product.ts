export interface IProduct {
  id: number;
  name: string;
  supplier_id: number;
  price: number;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export interface IProductPayload {
  name: string;
  price: number;
  image: string;
}
