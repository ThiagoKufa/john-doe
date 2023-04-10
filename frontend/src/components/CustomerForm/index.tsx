import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerData, UserSchema } from "../../entities/customers";
import { colorOptions } from "../../contants/ColorOption";
import { ButtonSubmit, Input, InputColor, TextArea } from "../";
import "./CustomerFormStyle.css";

export function CustomerForm() {

  //props
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<
  "idle" | "loading" | "success"
  >("idle");
  const createUserForm = useForm<CustomerData>({
    resolver: zodResolver(UserSchema),
  });
  const { handleSubmit } = createUserForm;

  //method
  const onSubmit = async (data: CustomerData) => {
    
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

  //view
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
