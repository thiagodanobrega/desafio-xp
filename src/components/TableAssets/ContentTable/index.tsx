import React from "react";

import { IUserAssets } from "../../../contexts/Asset/AssetContext";
import AssetModal from "./AssetModal";

interface IAssetProps {
  assets: IUserAssets[];
}

function ContentTable({ assets }: IAssetProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {assets.length ? (
        assets.map((asset) => (
          <AssetModal
            asset={asset}
            key={asset.name}
            idAsset={asset.idAsset}
            name={asset.name}
          />
        ))
      ) : (
        <span className="text-center rounded-md bg-background text-white px-4 py-3">
          Não há criptoativos
        </span>
      )}
    </>
  );
}

export default ContentTable;
