import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSubmit, Input, InputColor, TextArea } from "../";
import { ColorOption } from "../ui/inputs/InputColor/ColorsInput";

import "./CustomerFormStyle.css";
import { useState } from "react";

const colorOptions: ColorOption[] = [
  {
    value: "red",
    background: "#dc3d43",
    textColor: "#fff",
    nome: "Vermelho",
  },
  {
    value: "orange",
    background: "#ed5f00",
    textColor: "#fff",
    nome: "Laranja",
  },
  {
    value: "yellow",
    background: "#f7ce00",
    textColor: "#000",
    nome: "Amarelo",
  },
  {
    value: "green",
    background: "#299764",
    textColor: "#fff",
    nome: "Verde",
  },
  {
    value: "blue",
    background: "#0081f1",
    textColor: "#fff",
    nome: "Azul",
  },
  {
    value: "indigo",
    background: "#3a5ccc",
    textColor: "#fff",
    nome: "Anil",
  },
  {
    value: "violet",
    background: "#644fc1",
    textColor: "#fff",
    nome: "Violeta",
  },
];
const createUserSchema = z.object({
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

export type CreateCustomerData = z.infer<typeof createUserSchema>;

export function CustomerForm() {
  const[error, setError] = useState<string | null>(null);
  const createUserForm = useForm<CreateCustomerData>({
    resolver: zodResolver(createUserSchema),
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { handleSubmit } = createUserForm;
  const onSubmit = async (data: CreateCustomerData) => {
    
    setStatus("loading");
    const response = await fetch("http://localhost:3000/customers/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Origin': `${window.location.origin}}`
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setStatus("success");
    } else {
    
      response.json().then((data) => {
        setError(data.message);
      });
      setStatus("idle");
     

    }

  };

  return (
    <FormProvider {...createUserForm}>
      {status === "success" ? (
        <div className="success">Parabéns!<br/>Seu cadastro foi realizado com sucesso.
        👍</div>
      ) : (
        <form
          className="customer-form-container"
          onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Cadastro</h1>
          <Input
            label="Nome Completo"
            name="fullName"
            disabled={status === "loading"}
          />
          <Input label="CPF" name="cpf" disabled={status === "loading"} />
          <Input label="Email" name="email" disabled={status === "loading"} />
          <InputColor
            label="Cor Favorita"
            name="favoriteColor"
            options={colorOptions}
            disabled={status === "loading"}
          />
          <TextArea
            label="Observações"
            name="observation"
            disabled={status === "loading"}
            />
          {error && <div className="error">{error}</div>}
          <ButtonSubmit disabled={status === "loading"}>Enviar</ButtonSubmit>
          {status === "loading" && <div className="loading">Carregando...</div>}
          </form>
      )}
    </FormProvider>
  );
}
