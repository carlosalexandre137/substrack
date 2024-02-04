import { LabelStyled } from "../Input/styled";
import { SelectStyled } from "./styled";
import { SelectProps } from "./interface";

interface SelectElementProps extends SelectProps {
  label: string;
  className?: string;
}

const Select = ({ label, id, children, className }: SelectElementProps) => {
  return (
    <div className={className}>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <SelectStyled id={id}>{children}</SelectStyled>
    </div>
  );
};

export default Select;
