import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import "./TextAreaStyle.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  label: string;
}

export function TextArea(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isTextarea = props.type === "textarea";

  return (
    <div className="textarea-container">
      <label htmlFor={props.name} className="textarea-container__label">
        {props.label}
      </label>
      <textarea id={props.name} className="textarea-container__textarea" {...register(props.name)} {...props} />
      {errors[props.name] && (
        <span className="input-container__error">{errors[props.name]?.message as string}</span>
      )}
    </div>
  );
}