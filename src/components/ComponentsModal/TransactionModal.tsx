/* eslint-disable react/require-default-props */
import React, { useContext, useState } from "react";

import { AssetContext } from "../../contexts/Asset/AssetContext";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { CryptoContext } from "../../contexts/Crypto/CryptoContext";
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
  const {
    balance,
    allAssets,
    setRefreshPageData,
    refreshPageData,
    userAssets,
  } = useContext(AssetContext);
  const { user } = useContext(AuthContext);
  const { trendingCoins } = useContext(CryptoContext);
  const cryptoObj = trendingCoins?.find((coin) => coin.id === name);
  const assetUserObj = userAssets?.find((asset) => asset.idAsset === idAsset);
  const assetBrokerObj = allAssets?.find((asset) => asset.idAsset === idAsset);

  const profit = cryptoObj && cryptoObj?.price_change_percentage_24h >= 0;

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

  const sendDeposit = () => {
    api.postDeposit({ userId: user?.id, value: transactionValue });
    setRefreshPageData(!refreshPageData);
    setTransactionSent(true);
  };

  const sendWithdrawal = () => {
    api.postWithdraw({ userId: user?.id, value: transactionValue });
    setRefreshPageData(!refreshPageData);
    return setTransactionSent(true);
  };

  const validateWithdrawal = () => {
    if (transactionValue && transactionValue > balance) {
      return setErrorMessage("Saldo disponível insuficiente!");
    }
    return sendWithdrawal();
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
          {typeTransactionOne === "Comprar" && (
            <>
              <div className="-mt-3 mb-1 flex items-center gap-2">
                <img
                  src={cryptoObj?.image}
                  alt={`Logo do criptoativo ${name}`}
                  className="h-10"
                />
                <h2 className="uppercase text-base font-bold">{name}</h2>
              </div>
              <Graphic idCrypto={name} />
              <div className="flex justify-between items-center mt-5">
                <div>
                  <p className="font-bold">
                    {`Você possui ${
                      assetUserObj ? assetUserObj.quantity : "0"
                    } ativos`}
                  </p>
                  <p className="text-sm">{`1 ativo = R$ ${assetBrokerObj?.value} `}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 uppercase text-sm">
                    {cryptoObj?.symbol}
                    <span
                      className={`${
                        profit ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {profit && "+"}
                      {cryptoObj?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                  </div>
                  <span className="font-bold">
                    {cryptoObj?.current_price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
            </>
          )}
          <TransactionForm
            handleTransactionValueChange={handleTransactionValueChange}
            typeTransactionOne={typeTransactionOne}
            typeTransactionTwo={typeTransactionTwo}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            idAsset={idAsset}
          />
          <p
            className={`${
              errorMessage ? "block" : "invisible "
            } mt-2 text-center text-red-500`}
          >
            {errorMessage}
          </p>

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
