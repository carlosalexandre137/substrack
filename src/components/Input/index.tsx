import { LabelStyled } from "../Label";
import { InputStyled } from "./styled";

interface InputProps {
  id: string;
  label: string;
  value: string;
  set: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: boolean;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
  step?: string;
}

const Input = ({
  id,
  label,
  value,
  set,
  type = "text",
  required = false,
  autoComplete = true,
  placeholder,
  className,
  min,
  max,
  step,
}: InputProps) => {
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)}
        minLength={min}
        maxLength={max}
        required={required}
        value={value}
        autoComplete={autoComplete ? "on" : "off"}
        step={step}
      />
    </div>
  );
};

export default Input;
