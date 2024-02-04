import { ButtonStyled } from "./styled";

interface ButtonProps {
  type?: "button" | "submit";
  children: string | JSX.Element;
  theme?: string;
  click?: () => void;
}

const Button = ({ type = "button", children, theme = "primary", click }: ButtonProps) => {
  return (
    <ButtonStyled type={type} click={click} $theme={theme}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
