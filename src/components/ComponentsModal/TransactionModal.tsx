/* eslint-disable react/require-default-props */
import React, { useContext, useState } from "react";

import { AssetContext } from "../../contexts/Asset/AssetContext";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { assetApi } from "../../services/assetApi";
import TransactionForm from "../AccountModals/TransactionForm";
import { Button } from "../Button";
import Graphic from "../Graphic";
import SuccessForm from "./SuccessForm";

interface ITransactionSent {
  idAsset?: number;
  name?: string;
  qtdeAsset?: number;
  transactionSent: boolean;
  typeTransactionOne: string;
  typeTransactionTwo: string;
  setTransactionSent: React.Dispatch<React.SetStateAction<boolean>>;
}

function TransactionModal({
  idAsset,
  name = "",
  qtdeAsset,
  transactionSent,
  typeTransactionOne,
  typeTransactionTwo,
  setTransactionSent,
}: ITransactionSent) {
  const [transactionValue, setTransactionValue] = useState<number>(0);
  const [transactionType, setTransactionType] = useState(typeTransactionOne);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const api = assetApi;
  const { balance, allAssets, setRefreshPageData, refreshPageData } =
    useContext(AssetContext);
  const { user } = useContext(AuthContext);

  const handleTransactionValueChange = (event: {
    target: HTMLInputElement;
  }) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setTransactionValue(Number(value));
  };

  const disabledButton = () => {
    if (transactionValue && transactionValue > 0) return false;
    return true;
  };

  const sendPurchase = () => {
    api.postPurchase({
      userId: user?.id,
      idAsset,
      quantity: transactionValue,
    });
    setRefreshPageData(!refreshPageData);
    return setTransactionSent(true);
  };

  const validatePurchase = () => {
    if (transactionValue && transactionValue * 100 > balance) {
      return setErrorMessage("Saldo disponível insuficiente!");
    }
    const assetObj = allAssets.find((asset) => asset.idAsset === idAsset);
    if (assetObj && transactionValue && transactionValue > assetObj?.quantity) {
      return setErrorMessage("Quantidade insuficiente na corretora!");
    }
    return sendPurchase();
  };

  const sendSale = () => {
    api.postSell({
      userId: user?.id,
      idAsset,
      quantity: transactionValue,
    });
    setRefreshPageData(!refreshPageData);
    return setTransactionSent(true);
  };

  const validateSell = () => {
    if (qtdeAsset && transactionValue && transactionValue > qtdeAsset) {
      return setErrorMessage("Quantidade insuficiente na sua carteira!");
    }
    return sendSale();
  };

  const validateTransactionType = () => {
    switch (transactionType) {
      case "Depósito":
        sendDeposit();
        break;
      case "Saque":
        validateWithdrawal();
        break;
      case "Comprar":
        validatePurchase();
        break;
      case "Vender":
        validateSell();
        break;
      default:
        setErrorMessage("Qual transação deseja realizar?");
    }
  };

  const sendTransaction = () => {
    validateTransactionType();
  };

  return (
    <div className="w-full mt-2">
      {transactionSent ? (
        <SuccessForm />
      ) : (
        <div>
          {typeTransactionOne === "Comprar" && <Graphic idCrypto={name} />}
          <TransactionForm
            handleTransactionValueChange={handleTransactionValueChange}
            typeTransactionOne={typeTransactionOne}
            typeTransactionTwo={typeTransactionTwo}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            idAsset={idAsset}
          />

          <div className="mt-10">
            <Button
              type="button"
              disabled={disabledButton()}
              onClick={sendTransaction}
            >
              Confirmar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionModal;
