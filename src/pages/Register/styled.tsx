import styled from "styled-components";

export const FormStyled = styled.form`
  max-width: 900px;
  margin: auto;
  padding: 20px 0;

  display: grid;
  gap: 10px 20px;
  grid-template-areas:
    "name"
    "link"
    "plan"
    "price"
    "date"
    "modality"
    "buttons";

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr) minmax(140px, 20%);

    grid-template-areas:
      "name name link link"
      "plan plan plan price"
      "date date modality modality"
      "buttons buttons buttons buttons";
  }

  .input_name {
    grid-area: name;
  }
  .input_link {
    grid-area: link;
  }
  .input_plan {
    grid-area: plan;
  }
  .input_price {
    grid-area: price;
  }
  .input_date {
    grid-area: date;
  }
  .input_modality {
    grid-area: modality;
  }
  .container_buttons {
    grid-area: buttons;
  }
`;

export const ContainerButtonsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
