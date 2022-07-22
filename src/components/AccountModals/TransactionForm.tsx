import React, { useContext } from "react";

import { AssetContext } from "../../contexts/Asset/AssetContext";
import InputMask from "../Input/InputMask";

interface IAccountForm {
  handleTypeTransaction: (event: { target: HTMLInputElement }) => void;
  typeTransactionOne: string;
  typeTransactionTwo: string;
  transactionType: string;
  idAsset: number | undefined;
  setTransactionType: React.Dispatch<React.SetStateAction<string>>;
}

function TransactionForm({
  handleTypeTransaction,
  typeTransactionOne,
  typeTransactionTwo,
  setTransactionType,
  transactionType,
  idAsset,
}: IAccountForm) {
  const { userAssets } = useContext(AssetContext);
  const isDisabled = () => {
    if (idAsset) return !userAssets.some((asset) => asset.idAsset === idAsset);
    return false;
  };
  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-5">
        <button
          type="button"
          onClick={() => setTransactionType(typeTransactionOne)}
          className={`transition-all flex-grow mt-2 flex justify-center items-center py-2 px-4 border border-transparent rounded-md font-bold text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-emerald-500 ${
            transactionType !== typeTransactionOne
              ? "opacity-60 border-emerald-500 bg-background text-emerald-500"
              : "bg-emerald-500 hover:bg-emerald-600"
          } `}
        >
          {typeTransactionOne}
        </button>
        <button
          type="button"
          onClick={() => setTransactionType(typeTransactionTwo)}
          disabled={isDisabled()}
          className={`transition-all flex-grow mt-2 flex justify-center items-center py-2 px-4 border border-transparent rounded-md font-bold text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-red-500 ${
            transactionType !== typeTransactionTwo
              ? "opacity-60 border-red-500 bg-background text-red-500"
              : "bg-red-500 hover:bg-red-600"
          } `}
        >
          {typeTransactionTwo}
        </button>
      </div>
      <InputMask
        placeholder={`${
          typeTransactionOne === "Comprar" ? "QTD 0" : "R$ 0.00"
        }`}
        type="text"
        prefix={`${typeTransactionOne === "Comprar" ? "QTD " : "R$ "}`}
        funcEvent={handleTypeTransaction}
      />
    </div>
  );
}

export default TransactionForm;
