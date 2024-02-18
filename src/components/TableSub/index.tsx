import { useState } from "react";
import { TableStyled } from "./styled";
import Button from "@components/Button";
import { FormatPrice } from "@/utils/Price";

interface TableSubProps {
  history: string[];
  price: string;
}

const TableSub = ({ history, price }: TableSubProps) => {
  const [page, setPage] = useState(1);
  const limit = page * 20;
  const total = FormatPrice(
    Number(price.replace(",", ".")) * Number(history.length)
  );

  const records = history.slice(0, limit);
  function addRecords() {
    setPage((page) => page + 1);
  }

  return (
    <section className="table-subscription">
      <TableStyled>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record}>
              <td>{record}</td>
              <td>R$ {price}</td>
              <td>Pago</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>
              {limit < history.length && (
                <Button click={addRecords}>Veja mais</Button>
              )}
            </th>
            <th colSpan={2}>TOTAL: R$ {total}</th>
          </tr>
        </tfoot>
      </TableStyled>
    </section>
  );
};

export default TableSub;
