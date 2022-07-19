import React, { useState } from "react";

import Input from "../Input";

interface IAccountForm {
  handleTypeTransaction: (event: { target: HTMLInputElement }) => void;
  typeTransactionOne: string;
  typeTransactionTwo: string;
}

function TransactionForm({
  handleTypeTransaction,
  typeTransactionOne,
  typeTransactionTwo,
}: IAccountForm) {
  const [transactionType, setTransactionType] = useState(typeTransactionOne);

  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-5">
        <button
          type="button"
          onClick={() => setTransactionType(typeTransactionOne)}
          className={`bg-emerald-500 hover:bg-emerald-400 transition-all flex-grow mt-2 flex justify-center items-center py-2 px-4 border border-transparent rounded-md font-bold text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-emerald-500 ${
            transactionType !== typeTransactionOne && "opacity-20"
          } `}
        >
          {typeTransactionOne}
        </button>
        <button
          type="button"
          onClick={() => setTransactionType(typeTransactionTwo)}
          className={`bg-emerald-500 hover:bg-emerald-400 transition-all flex-grow mt-2 flex justify-center items-center py-2 px-4 border border-transparent rounded-md font-bold text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-emerald-500 ${
            transactionType !== typeTransactionTwo && "opacity-20"
          } `}
        >
          {typeTransactionTwo}
        </button>
      </div>
      <Input
        type="number"
        placeholder="Informe o valor"
        funcEvent={handleTypeTransaction}
      />
    </div>
  );
}

export default TransactionForm;
