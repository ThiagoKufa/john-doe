import "./ButtonSubmitStyles.css"

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
    children: React.ReactNode;
  }

export const ButtonSubmit: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="btn-submit" type="submit" {...props}>
      {children}
    </button>
  );
};
