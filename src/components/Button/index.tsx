import { ButtonStyled } from "./styled";

interface ButtonProps {
  children: string | JSX.Element;
  type?: "button" | "submit";
  theme?: string;
  click?: () => void;
}

const Button = ({ children, type = "button", theme = "primary", click }: ButtonProps) => {
  return (
    <ButtonStyled type={type} onClick={click} $theme={theme}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
