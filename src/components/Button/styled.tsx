import styled from "styled-components";

interface ButtonElementProps {
  type?: "button" | "submit";
  children: string | JSX.Element;
  click?: () => void;
  className?: string;
}

const ButtonElement = ({ type, className, children, click }: ButtonElementProps) => (
  <button type={type} onClick={click} className={className}>
    {children}
  </button>
);

export const ButtonStyled = styled(ButtonElement)<{ $theme: string }>`
  border-radius: 8px;
  background-color: var(--theme-background-${(props) => props.$theme});
  color: var(--theme-color-${(props) => props.$theme});
  padding: 10px 20px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  line-height: 1.3rem;
  border: none;
  cursor: pointer;
  font-family: var(--font-default);
`;
