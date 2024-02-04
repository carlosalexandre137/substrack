import { ReactNode } from "react";
import { TitleStyled } from "./styled";

interface TitleProps {
  children: ReactNode;
  justifyContent?: string;
}

const Title = ({ children, justifyContent = "space-between" }: TitleProps) => {
  return <TitleStyled $justifyContent={justifyContent}>{children}</TitleStyled>;
};

export default Title;
