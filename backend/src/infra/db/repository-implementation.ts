import { PrismaClient } from "@prisma/client";
import { ICustomerRepository } from "../../interfaces/customer/customer-repository";
import { ICustomersData } from "../../domain/entities/customer/customer";

export class CustomerRepositoryImplementation implements ICustomerRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(customerData: ICustomersData): Promise<ICustomersData> {
    // Validar dados
    if (!customerData.fullName || !customerData.cpf || !customerData.email) {
      throw new Error("Invalid customer data");
    }

    const createdCustomer = await this.prisma.customer.create({
      data: customerData,
    });
  
    return {
      id: createdCustomer.id,
      fullName: createdCustomer.fullName,
      cpf: createdCustomer.cpf,
      email: createdCustomer.email,
      favoriteColor: createdCustomer.favoriteColor,
      observation: createdCustomer.observation || "",
    };
  }
  
  async getAll(page: number = 1, pageSize: number = 20): Promise<ICustomersData[]> {
    const skip = (page - 1) * pageSize;
    const customers = await this.prisma.customer.findMany({
      skip,
      take: pageSize,
    });
    return customers;
  }


}
