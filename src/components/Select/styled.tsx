import styled from "styled-components";
import { SelectProps } from "./interface";

interface SelectElementProps extends SelectProps {
  className?: string;
}

const SelectElement = ({ className, children, id }: SelectElementProps) => (
  <select className={className} id={id}>
    {children}
  </select>
);

export const SelectStyled = styled(SelectElement)`
  font-size: 0.95rem;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  line-height: 1.2rem;
  box-shadow: 1px 1px 3px #e4dfdf;

  &:focus-visible {
    outline: none;
    border: 1px solid #b09393;
  }
`;
