import styled from "styled-components";

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
    border: 1px solid #d3c3c3;
  }
`;
