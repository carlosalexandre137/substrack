import styled from "styled-components";

interface LabelProps {
  children: string;
  htmlFor: string;
  className?: string;
}

const LabelElement = ({ children, htmlFor, className }: LabelProps) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

export const LabelStyled = styled(LabelElement)`
  display: block;
  font-size: 0.9rem;
  color: var(--color-black-dark);
  font-weight: 600;
  padding: 12px 0;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const InputStyled = styled.input`
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
