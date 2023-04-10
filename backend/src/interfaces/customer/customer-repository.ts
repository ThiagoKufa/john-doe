import { ICustomersData } from "../../domain/entities/customer/customer";

export interface ICustomerRepository {
  create(customerData: ICustomersData): Promise<ICustomersData | null>;
  getAll(): Promise<ICustomersData[]>;
}
