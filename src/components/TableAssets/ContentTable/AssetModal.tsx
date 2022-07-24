/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import { IUserAssets } from "../../../contexts/Asset/AssetContext";
import ModalHeader from "../../ComponentsModal/ModalHeader";
import TransactionModal from "../../ComponentsModal/TransactionModal";
import TransitionModal from "../../ComponentsModal/TransitionModal";
import { ContentOfTable } from "./style";

interface IOpen {
  name: string;
  asset: IUserAssets;
  idAsset: number | undefined;
}
export default function AssetModal({ asset, name, idAsset }: IOpen) {
  const [isOpen, setIsOppen] = useState(false);
  const [transactionSent, setTransactionSent] = useState(false);

  function openModal() {
    setTransactionSent(false);
    setIsOppen(true);
  }

  return (
    <>
      <ContentOfTable
        type="button"
        key={idAsset}
        onClick={openModal}
        data-testid={`${
          asset.idUser ? `userAsset-${asset.name}` : `asset-${asset.name}`
        }`}
      >
        <p className="text-left uppercase">{asset.name}</p>
        <span className="text-center">
          {!asset?.idUser ? 1 : asset.quantity}
        </span>
        <span className="text-right">{asset.value}</span>
      </ContentOfTable>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOppen(false)}
        >
          <TransitionModal />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-5 text-left align-middle shadow-xl transition-all">
                  <ModalHeader setIsOppen={setIsOppen} />
                  <TransactionModal
                    transactionSent={transactionSent}
                    setTransactionSent={setTransactionSent}
                    typeTransactionOne="Comprar"
                    typeTransactionTwo="Vender"
                    name={name}
                    idAsset={idAsset}
                    qtdeAsset={asset.quantity}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
