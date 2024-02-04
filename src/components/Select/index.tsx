import { SelectStyled } from "./styled";
import { LabelStyled } from "../Label";
import { ReactElement } from "react";
import { OptionProps } from "./Option";

interface SelectElementProps<T> {
  children: ReactElement<OptionProps>[] | ReactElement<OptionProps>;
  id: string;
  label: string;
  set: (value: T) => void;
  required?: boolean;
  className?: string;
}

const Select = <T,>({
  children,
  id,
  label,
  set,
  required = false,
  className,
}: SelectElementProps<T>) => {
  return (
    <div className={className}>
      <LabelStyled htmlFor={id} required={required}>
        {label}
      </LabelStyled>
      <SelectStyled
        id={id}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => set(e.target.value as T)}
        required={required}
      >
        {children}
      </SelectStyled>
    </div>
  );
};

export default Select;
