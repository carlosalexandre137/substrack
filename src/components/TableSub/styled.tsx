import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  text-align: center;

  tr {
    background-color: #f0f0f0;
    &:nth-child(2n) {
      background-color: #e0d7d7;
    }

    td {
      padding: 10px;
    }
  }

  thead tr th {
    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
    background-color: #2d0a0a;
  }

  tfoot {
    tr th {
      color: black;
      background-color: #c3c1c1;
      &:first-child {
        text-align: left;
        border-radius: 0 0 0 8px;
      }
      &:last-child {
        text-align: right;
        border-radius: 0 0 8px 0;
      }
    }
  }

  thead,
  tfoot {
    color: #fff;

    tr th {
      padding: 12px;
    }
  }
`;
