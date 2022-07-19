import React from "react";

// eslint-disable-next-line import/named
import { ContentOfTable } from "./style";

const assets = [
  { name: "Bitcoin", qtd: 1, value: 100 },
  { name: "Bitcoin", qtd: 1, value: 100 },
  { name: "Bitcoin", qtd: 1, value: 100 },
];

function ContentTable() {
  return (
    <>
      {assets.map((asset) => (
        <ContentOfTable key={asset.name}>
          <span className="text-left">{asset.name}</span>
          <span className="text-center">{asset.qtd}</span>
          <span className="text-right">{asset.value}</span>
        </ContentOfTable>
      ))}
    </>
  );
}

export default ContentTable;
