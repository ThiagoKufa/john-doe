// src/use-cases/customer/create-customer/create-customer.ts

import { ICustomersData } from "../../../../domain/entities/customer/customer";
import { ICustomerRepository } from "../../../../interfaces/customer/customer-repository";
import { CPFValidator } from "../../../Validators/cpf-validator";
import { EmailValidator } from "../../../Validators/email-validator";
import { ICreateCustomer } from "./create-customer-interface";
import { CustomerDataValidator } from "./customer-data-validator";


export class CreateCustomer implements ICreateCustomer {
  private customerRepository: ICustomerRepository;

  constructor(customerRepository: ICustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute(customerData: ICustomersData): Promise<ICustomersData> {
    CustomerDataValidator.validate(customerData);

    if (!CPFValidator.isValid(customerData.cpf)) {
      throw new Error("O CPF informado é inválido.");
    }
    if (!EmailValidator.isValid(customerData.email)) {
      throw new Error("O email informado é inválido.");
    }

    const createdCustomer = await this.customerRepository.create(customerData);

    return createdCustomer || customerData;
  }
}
