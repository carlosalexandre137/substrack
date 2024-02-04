import { LabelStyled } from "../Label";
import { InputStyled } from "./styled";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input = ({ id, label, type = "text", placeholder, className }: InputProps) => {
  return (
    <div className={className}>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled type={type} id={id} name={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
