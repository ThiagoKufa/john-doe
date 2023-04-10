import { InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";
import "./ColorsInputStyle.css";

export interface ColorOption {
  value: string;
  nome:  string;
  background: string;
  textColor: string;
}

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: ColorOption[];
}

export function InputColor(props: InputProps) {

  const {
    register,
    formState: { errors },
    getValues,
    watch
  } = useFormContext();

  return (
    <div className="input-container">
      <label htmlFor={props.name} className="input-container__label">
        {props.label}
      </label>
      <select
        id={props.name}
        className="input-container__input"

        {...register(props.name)}
        {...props}
      >
        <option value="">Selecione uma cor</option>
        {props.options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            style={{
              backgroundColor: option.background,
              color: option.textColor,
            }}
          >{option.nome}</option>
        ))}
      </select>
      {errors[props.name] && (
        <span className="input-container__error">
          {errors[props.name]?.message as string}
        </span>
      )}
    </div>
  );
}
