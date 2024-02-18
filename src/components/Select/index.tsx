import { SelectStyled } from "./styled";
import { LabelStyled } from "@components/Label";
import { ReactElement } from "react";
import { OptionProps } from "./Option";

interface SelectElementProps {
  children: ReactElement<OptionProps>[] | ReactElement<OptionProps>;
  id: string;
  label: string;
  value: string;
  set: (value: string) => void;
  required?: boolean;
  className?: string;
}

const Select = ({
  children,
  id,
  label,
  value,
  set,
  required = false,
  className,
}: SelectElementProps) => {
  return (
    <div className={className}>
      <LabelStyled htmlFor={id} required={required}>
        {label}
      </LabelStyled>
      <SelectStyled
        id={id}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          set(e.target.value)
        }
        required={required}
        value={value}
      >
        {children}
      </SelectStyled>
    </div>
  );
};

export default Select;
