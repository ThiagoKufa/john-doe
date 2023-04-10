
import { ICustomersData } from "../../../../domain/entities/customer/customer";


export class CustomerDataValidator {
  public static validate(customerData: ICustomersData): void {
    // Verificar se o campo fullName está preenchido
    if (!customerData.fullName || customerData.fullName.trim() === "") {
      throw new Error("O campo fullName é obrigatório.");
    }

    // Verificar se o campo email está preenchido e é válido
    if (!customerData.email || customerData.email.trim() === "") {
      throw new Error("O campo email é obrigatório.");
    }

    // Verificar se o campo favoriteColor está preenchido
    if (
      !customerData.favoriteColor ||
      customerData.favoriteColor.trim() === ""
    ) {
      throw new Error("O campo favoriteColor é obrigatório.");
    }
  }
}
