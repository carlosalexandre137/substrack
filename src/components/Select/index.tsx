import { SelectStyled } from "./styled";
import { LabelStyled } from "../Label";
import { ReactElement } from "react";
import { OptionProps } from "./Option";

interface SelectElementProps {
  children: ReactElement<OptionProps>[] | ReactElement<OptionProps>;
  id: string;
  label: string;
  className?: string;
}

const Select = ({ children, id, label, className }: SelectElementProps) => {
  return (
    <div className={className}>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <SelectStyled id={id}>{children}</SelectStyled>
    </div>
  );
};

export default Select;
