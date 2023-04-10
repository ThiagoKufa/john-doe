// src/frameworks-and-drivers/database/customer-repository-implementation.ts

import { ICustomersData } from "../../domain/entities/customer/customer";
import { ICustomerRepository } from "../../interfaces/customer/customer-repository";

export class CustomerRepositoryImplementation implements ICustomerRepository {
  private customers: ICustomersData[] = [];
  constructor(customers: ICustomersData[]) {
    this.customers = customers;
  }
  async create(customerData: ICustomersData): Promise<ICustomersData> {
    this.customers.push(customerData);
    return customerData;
  }
  async getAll(): Promise<ICustomersData[]> {
    return this.customers;
  }

  async findById(id: number): Promise<ICustomersData | null> {
    return null;
  }

  async findByCPF(cpf: string): Promise<ICustomersData | null> {
    return null;
  }

  async findByEmail(email: string): Promise<ICustomersData | null> {
    return null;
  }

  async update(
    id: number,
    customerData: Partial<ICustomersData>
  ): Promise<ICustomersData | null> {
    return null;
  }

  async delete(id: number): Promise<void> {
    this.customers = this.customers.filter((c) => c.id !== id);
  }
}
