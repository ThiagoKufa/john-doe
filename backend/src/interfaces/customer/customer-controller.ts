import { ICreateCustomer } from "../../application/usecases/customer/create-customer/create-customer-interface";
import { ICustomersData } from "../../domain/entities/customer/customer";
import { IRequest } from "../../infra/adapters/http/IRequest";
import { IResponse } from "../../infra/adapters/http/IResponse";


export class CustomerController {
  private createCustomerUseCase: ICreateCustomer;

  constructor(createCustomerUseCase: ICreateCustomer) {
    this.createCustomerUseCase = createCustomerUseCase;
  }

  public createCustomer = async (req: IRequest, res: IResponse): Promise<void> => {
    try {
      const customerData: ICustomersData = req.body;
      const createdCustomer = await this.createCustomerUseCase.execute(customerData);

      res.status(201).json({
        message: "Cliente criado com sucesso.",
        data: createdCustomer,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message || "Erro ao criar o cliente.",
        });
      } else {
        res.status(400).json({
          message: "Erro desconhecido ao criar o cliente.",
        });
      }
    }
  };

  // Outros métodos do controlador para lidar com operações de cliente (get, update, delete) podem ser adicionados aqui.
}

