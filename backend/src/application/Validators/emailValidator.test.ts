import { EmailValidator } from "./email-validator";


describe("EmailValidator", () => {
  it("should return true for a valid email", () => {
    const validEmail = "john.doe@example.com";
    expect(EmailValidator.isValid(validEmail)).toBeTruthy();
  });

  it("should return false for an invalid email", () => {
    const invalidEmail = "john.doe@example";
    expect(EmailValidator.isValid(invalidEmail)).toBeFalsy();
  });

  it("should return false for an empty string", () => {
    const emptyEmail = "";
    expect(EmailValidator.isValid(emptyEmail)).toBeFalsy();
  });

  // Adicione testes adicionais para outros cenários de validação, se necessário.
});
