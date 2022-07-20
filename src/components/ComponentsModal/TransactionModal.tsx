import React, { useState } from "react";

import TransactionForm from "../AccountModals/TransactionForm";
import { Button } from "../Button";
import SuccessForm from "./SuccessForm";

interface ITransactionSent {
  transactionSent: boolean;
  setTransactionSent: React.Dispatch<React.SetStateAction<boolean>>;
}

function TransactionModal({
  transactionSent,
  setTransactionSent,
}: ITransactionSent) {
  const [transactionValue, setTransactionValue] = useState<string | null>(null);

  const accountTransaction = (event: { target: HTMLInputElement }) => {
    setTransactionValue(event.target.value);
  };
  const disabledButton = () => {
    if (transactionValue) return false;
    return true;
  };

  return (
    <div className="w-full mt-2">
      {transactionSent ? (
        <SuccessForm />
      ) : (
        <>
          <TransactionForm
            handleTypeTransaction={accountTransaction}
            typeTransactionOne="Depósito"
            typeTransactionTwo="Saque"
          />
          <div className="mt-10">
            <Button
              type="button"
              disabled={disabledButton()}
              onClick={() => setTransactionSent(true)}
            >
              Confirmar
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default TransactionModal;
