import { z } from "zod";
export const UserSchema = z.object({
  fullName: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(2, "O nome deve ter pelo menos 2 caracteres"),
  cpf: z
    .string()
    .nonempty("O CPF é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
    .min(14, "O CPF deve ter pelo menos 14 caracteres"),
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("O email deve ser válido"),
  favoriteColor: z.string().nonempty("A cor é obrigatória"),
  observation: z.string(),
});
export type CustomerData = z.infer<typeof UserSchema>;