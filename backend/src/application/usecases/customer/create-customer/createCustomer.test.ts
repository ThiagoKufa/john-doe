import { ICustomersData } from "../../../../domain/entities/customer/customer";
import { CustomerRepositoryImplementation } from "../../../../infra/db/customer-repository-implementation-in-memory";
import { CreateCustomer } from "./create-customer";

const mockCustomerData: ICustomersData = {
  fullName: "John Doe",
  cpf: "52998224725",
  email: "john.doe@example.com",
  favoriteColor: "blue",
  observation: "Some observations",
};



describe("CreateCustomer", () => {
  const customerRepository = new CustomerRepositoryImplementation([]);
  const createCustomer = new CreateCustomer(customerRepository);

  it("should create a customer successfully", async () => {
    const createdCustomer = await createCustomer.execute(mockCustomerData);

    expect(createdCustomer).toEqual(mockCustomerData);
  });

  it("should throw an error if the provided CPF is invalid", async () => {
    const invalidCustomerData = { ...mockCustomerData, cpf: "11111111111" };

    await expect(createCustomer.execute(invalidCustomerData)).rejects.toThrow(
      "O CPF informado é inválido."
    );
  });

  it("should throw an error if the provided email is invalid", async () => {
    const invalidCustomerData = { ...mockCustomerData, email: "invalid.email" };

    await expect(createCustomer.execute(invalidCustomerData)).rejects.toThrow(
      "O email informado é inválido."
    );
  });

  // Adicione testes adicionais para outros cenários de validação, se necessário.
});
