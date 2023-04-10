import { CPFValidator } from "./cpf-validator";

describe("CPFValidator", () => {
  it("should return true for a valid CPF", () => {
    const validCPF = "529.982.247-25";
    expect(CPFValidator.isValid(validCPF)).toBeTruthy();
  });

  it("should return false for an invalid CPF", () => {
    const invalidCPF = "111.111.111-11";
    expect(CPFValidator.isValid(invalidCPF)).toBeFalsy();
  });

  it("should return false for an empty string", () => {
    const emptyCPF = "";
    expect(CPFValidator.isValid(emptyCPF)).toBeFalsy();
  });

  it("should return false for a CPF with invalid length", () => {
    const invalidLengthCPF = "529.982.247-2";
    expect(CPFValidator.isValid(invalidLengthCPF)).toBeFalsy();
  });

  // Adicione testes adicionais para outros cenários de validação, se necessário.
});
