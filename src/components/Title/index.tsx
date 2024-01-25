import { ReactNode } from "react";
import { TitleStyled } from "./styled";

interface TitleProps {
  justifyContent?: string;
  children: ReactNode;
}

const Title = ({ justifyContent = "space-between", children }: TitleProps) => {
  return <TitleStyled $justifyContent={justifyContent}>{children}</TitleStyled>;
};

export default Title;
