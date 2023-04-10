import { ICustomersData } from "../../../../domain/entities/customer/customer";

export interface ICreateCustomer {
  execute(customerData: ICustomersData): Promise<ICustomersData>;
}