import { LinkProps } from "react-router-dom";
import { LinkStyled } from "./styled";

interface LinkElementProps extends LinkProps {
  theme?: string;
}

const Link = ({ children, to, theme = "primary" }: LinkElementProps) => {
  return (
    <LinkStyled to={to} $theme={theme}>
      {children}
    </LinkStyled>
  );
};

export default Link;
