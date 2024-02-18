import { LabelStyled } from "@components/Label";
import { InputStyled } from "./styled";

interface InputProps {
  id: string;
  label: string;
  value: string;
  set: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
  step?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

const Input = ({
  id,
  label,
  value,
  set,
  type = "text",
  required = false,
  className,
  ...props
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          set(e.target.value)
        }
        required={required}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
