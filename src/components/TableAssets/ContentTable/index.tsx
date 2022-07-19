import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import React, { Fragment, useState } from "react";

// eslint-disable-next-line import-helpers/order-imports
import { IUserAssets } from "../../../contexts/Asset/AssetContext";

// eslint-disable-next-line import/named
import { ContentOfTable } from "./style";

interface IAssetProps {
  assets: IUserAssets[];
}

function ContentTable({ assets }: IAssetProps) {
  const [isOpen, setIsOppen] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {assets &&
        assets.map((asset) => (
          <ContentOfTable
            type="button"
            key={asset.idAsset}
            onClick={() => setIsOppen(true)}
          >
            <span className="text-left">{asset.name}</span>
            <span className="text-center">
              {!asset?.idUser ? 1 : asset.quantity}
            </span>
            <span className="text-right">{asset.value}</span>
          </ContentOfTable>
        ))}
    </>
  );
}

export default ContentTable;
