import { PrismaClient } from "@prisma/client";
import { ICustomerRepository } from "../../interfaces/customer/customer-repository";
import { ICustomersData } from "../../domain/entities/customer/customer";

export class CustomerRepositoryImplementation implements ICustomerRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(customerData: ICustomersData): Promise<ICustomersData> {
    const createdCustomer = await this.prisma.customer.create({
      data: customerData,
    });
  
    if (!createdCustomer) {
      throw new Error("Failed to create customer");
    }
  
    return {
      id: createdCustomer.id,
      fullName: createdCustomer.fullName,
      cpf: createdCustomer.cpf,
      email: createdCustomer.email,
      favoriteColor: createdCustomer.favoriteColor,
      observation: createdCustomer.observation || "",
    };
  }
  
  async getAll(): Promise<ICustomersData[]> {
    const customers = await this.prisma.customer.findMany();
    return customers;
  }

 
}
