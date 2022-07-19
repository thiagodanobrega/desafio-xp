import React from "react";

// eslint-disable-next-line import/named
import { TableOfHeader } from "./style";

function TableHeader() {
  return (
    <TableOfHeader>
      <span className="text-left">Criptomoeda</span>
      <span className="text-center">Qtd</span>
      <span className="text-right">Valor (R$)</span>
    </TableOfHeader>
  );
}

export default TableHeader;
