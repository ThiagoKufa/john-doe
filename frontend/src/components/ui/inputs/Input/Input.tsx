import { InputHTMLAttributes, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import "./InputStyles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const [cpf, setCPF] = useState("");

  useEffect(() => {
    setValue(props.name, cpf);
  }, [cpf, props.name, setValue]);

  function handleCPFChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;

    // Remove tudo que não é dígito
    value = value.replace(/\D/g, "");

    // Adiciona pontos e traço conforme o padrão de CPF
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCPF(value);
  }

  if (props.name === "cpf") {
    return (
      <div className="input-container">
        <label htmlFor={props.name} className="input-container__label">
          {props.label}
        </label>
        <input
          id={props.name}
          className="input-container__input"
          maxLength={14}
          value={cpf}
          onChange={handleCPFChange}
          {...props}
        />
        {errors[props.name] && (
          <span className="input-container__error">
            {errors[props.name]?.message as string}
          </span>
        )}
      </div>
    );
  }
  return (
    <div className="input-container">
      <label htmlFor={props.name} className="input-container__label">
        {props.label}
      </label>
      <input
        id={props.name}
        className="input-container__input"
        {...register(props.name)}
        {...props}
      />
      {errors[props.name] && (
        <span className="input-container__error">
          {errors[props.name]?.message as string}
        </span>
      )}
    </div>
  );
}
