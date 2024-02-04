import { InputStyled, LabelStyled } from "./styled";

interface InputProps {
  type?: string;
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
}

const Input = ({ type = "text", label, id, placeholder, className }: InputProps) => {
  return (
    <div className={className}>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled type={type} id={id} name={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
