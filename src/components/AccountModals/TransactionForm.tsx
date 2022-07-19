import React, { useState } from "react";

import Input from "../Input";

interface IAccountForm {
  accountTransaction: (event: { target: HTMLInputElement }) => void;
}

function TransactionForm({ accountTransaction }: IAccountForm) {
  const [transactionType, setTransactionType] = useState("deposit");

  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-5">
        <button
          type="button"
          onClick={() => setTransactionType("deposit")}
          className={`bg-emerald-500 hover:bg-emerald-400 transition-all flex-grow mt-2 flex justify-center items-center py-2 px-4 border border-transparent rounded-md font-bold text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-emerald-500 ${
            transactionType !== "deposit" && "opacity-20"
          } `}
        >
          Depósito
        </button>
        <button
          type="button"
          onClick={() => setTransactionType("withdraw")}
          className={`bg-emerald-500 hover:bg-emerald-400 transition-all flex-grow mt-2 flex justify-center items-center py-2 px-4 border border-transparent rounded-md font-bold text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-emerald-500 ${
            transactionType !== "withdraw" && "opacity-20"
          } `}
        >
          Saque
        </button>
      </div>
      <Input
        type="number"
        placeholder="Informe o valor"
        funcEvent={accountTransaction}
      />
    </div>
  );
}

export default TransactionForm;
