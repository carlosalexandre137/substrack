import { ReactElement } from "react";

export interface OptionProps {
  value: string;
  children: string;
}

export interface SelectProps {
  id: string;
  children: ReactElement<OptionProps>[] | ReactElement<OptionProps>;
}