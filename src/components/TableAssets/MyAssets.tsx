import React, { useContext } from "react";

import { AssetContext } from "../../contexts/Asset/AssetContext";
import ContentTable from "./ContentTable";
import TableHeader from "./TableHeader";

function MyAssets() {
  const { userAssets } = useContext(AssetContext);
  return (
    <section>
      <h2 className="mt-6 mb-4 text-2xl">Minhas ações</h2>
      <div className=" rounded-md bg-primary flex flex-col justify-center">
        <TableHeader />
        <div className="px-5 sm:px-10 py-5 flex flex-col justify-center gap-2">
          <ContentTable assets={userAssets} />
        </div>
      </div>
    </section>
  );
}

export default MyAssets;
