import { LabelStyled } from "../Label";
import { InputStyled } from "./styled";

interface InputProps<T> {
  id: string;
  label: string;
  set: (value: T) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
}

const Input = <T,>({
  id,
  label,
  set,
  type = "text",
  required = false,
  placeholder,
  className,
  min,
  max,
}: InputProps<T>) => {
  return (
    <div className={className}>
      <LabelStyled htmlFor={id} required={required}>
        {label}
      </LabelStyled>
      <InputStyled
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value as T)}
        minLength={min}
        maxLength={max}
        required={required}
      />
    </div>
  );
};

export default Input;
