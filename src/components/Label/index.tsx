import styled from "styled-components";

interface LabelElementProps {
  children: string | JSX.Element;
  htmlFor: string;
  required?: boolean;
  className?: string;
}

const LabelElement = ({
  children,
  htmlFor,
  required = false,
  className,
}: LabelElementProps) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
      {!required && <span>(Opcional)</span>}
    </label>
  );
};

export const LabelStyled = styled(LabelElement)`
  display: block;
  font-size: 0.9rem;
  color: var(--color-black-dark);
  font-weight: 600;
  padding: 12px 0;

  &::first-letter {
    text-transform: capitalize;
  }

  & > span {
    margin-left: 10px;
    font-size: 0.8rem;
    color: var(--color-red-dark);
  }
`;
