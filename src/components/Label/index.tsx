import styled from "styled-components";

export const LabelStyled = styled.label`
  display: block;
  font-size: 0.9rem;
  color: var(--color-black-dark);
  font-weight: 600;
  padding: 12px 0;

  &::first-letter {
    text-transform: capitalize;
  }
`;
