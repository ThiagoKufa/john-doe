import { ICustomersData } from "../../../../domain/entities/customer/customer";
import { CustomerDataValidator } from "./customer-data-validator";

const mockCustomerData: ICustomersData = {
  fullName: "John Doe",
  cpf: "529.982.247-25",
  email: "john.doe@example.com",
  favoriteColor: "blue",
  observation: "Some observations",
};

describe("CustomerDataValidator", () => {
  it("should not throw an error if all required fields are provided", () => {
    expect(() => CustomerDataValidator.validate(mockCustomerData)).not.toThrow();
  });

  it("should throw an error if fullName is not provided", () => {
    const invalidCustomerData = { ...mockCustomerData, fullName: "" };

    expect(() => CustomerDataValidator.validate(invalidCustomerData)).toThrow(
      "O campo fullName é obrigatório."
    );
  });

  it("should throw an error if email is not provided", () => {
    const invalidCustomerData = { ...mockCustomerData, email: "" };

    expect(() => CustomerDataValidator.validate(invalidCustomerData)).toThrow(
      "O campo email é obrigatório."
    );
  });

  it("should throw an error if favoriteColor is not provided", () => {
    const invalidCustomerData = { ...mockCustomerData, favoriteColor: "" };

    expect(() => CustomerDataValidator.validate(invalidCustomerData)).toThrow(
      "O campo favoriteColor é obrigatório."
    );
  });

  // Adicione testes adicionais para outros cenários de validação, se necessário.
});
