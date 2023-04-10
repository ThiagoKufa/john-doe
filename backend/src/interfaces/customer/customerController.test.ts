import { ICreateCustomer } from "../../application/usecases/customer/create-customer/create-customer-interface";
import { ICustomersData } from "../../domain/entities/customer/customer";
import { IRequest } from "../../infra/adapters/http/IRequest";
import { IResponse } from "../../infra/adapters/http/IResponse";
import { CustomerController } from "./customer-controller";


const mockCustomerData: ICustomersData = {
  fullName: "John Doe",
  cpf: "1234567890",
  email: "john.doe@example.com",
  favoriteColor: "blue",
  observation: "Some observations",
};

const mockRequest = {
  body: mockCustomerData,
} as IRequest;

const mockResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as IResponse;

class MockCreateCustomerUseCase implements ICreateCustomer {
  async execute(customerData: ICustomersData): Promise<ICustomersData> {
    return customerData;
  }
}

describe("CustomerController", () => {
  const createCustomerUseCase = new MockCreateCustomerUseCase();
  const customerController = new CustomerController(createCustomerUseCase);

  it("should create a customer and return status 201", async () => {
    await customerController.createCustomer(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Cliente criado com sucesso.",
      data: mockCustomerData,
    });
  });

  // Você pode adicionar mais testes para outros casos, como erros de validação e outros métodos do controlador.
});
