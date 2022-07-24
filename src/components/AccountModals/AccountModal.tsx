/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useState } from "react";

import { AssetContext } from "../../contexts/Asset/AssetContext";
import ModalHeader from "../ComponentsModal/ModalHeader";
import TransactionModal from "../ComponentsModal/TransactionModal";
import TransitionModal from "../ComponentsModal/TransitionModal";

export default function AccountModal() {
  const [isOpen, setIsOppen] = useState(false);
  const [transactionSent, setTransactionSent] = useState(false);
  const { balance } = useContext(AssetContext);

  function openModal() {
    setTransactionSent(false);
    setIsOppen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-secondary hover:text-amber-300  transition-all text-center w-full"
      >
        Ver conta
      </button>

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
                  <ModalHeader
                    setIsOppen={setIsOppen}
                    title={`Saldo: ${
                      balance &&
                      balance.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    }`}
                    transactionSent={transactionSent}
                  />
                  <TransactionModal
                    transactionSent={transactionSent}
                    setTransactionSent={setTransactionSent}
                    typeTransactionOne="Depósito"
                    typeTransactionTwo="Saque"
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
