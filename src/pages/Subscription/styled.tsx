import styled from "styled-components";
import { ContainerBase } from "../../components/Containers";

export const ContainerSubscriptionDetailsStyled = styled(ContainerBase).attrs({
  as: "main",
})`
  display: grid;
  column-gap: 10px;
  row-gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr minmax(100px, 300px);
    grid-template-areas:
      "header actions"
      "details details"
      "table table";

    .header-subscription {
      grid-area: header;
    }

    .details-subscription {
      grid-area: details;
    }

    .actions-subscription {
      grid-area: actions;
    }

    .table-subscription {
      grid-area: table;
    }
  }
`;
