import React, { useContext, useEffect, useState } from "react";

import { assetApi } from "../../services/assetApi";
import { AuthContext } from "../Auth/AuthContext";
import { AssetContext, IAllAssets, IUserAssets } from "./AssetContext";

export function AssetProvider({ children }: { children: JSX.Element }) {
  const [userAssets, setUserAssets] = useState<IUserAssets[]>([]);
  const [allAssets, setallAssets] = useState<IAllAssets[]>([]);
  const [availableAssets, setAvailableAssets] = useState<IAllAssets[]>([]);
  const [balance, setBalance] = useState<number>(1000);
  const [refreshPageData, setRefreshPageData] = useState(true);
  const auth = useContext(AuthContext);
  // const { postDeposit, postPurchase, postSell, postWithdraw } = assetApi;
  const api = assetApi;
  const filteringAvailableAssets = (
    myAssets: IUserAssets[],
    assets: IAllAssets[]
  ) => {
    const filteringAssets = assets.filter(
      (asset) => !myAssets.some((myAsset) => myAsset.idAsset === asset.idAsset)
    );
    setAvailableAssets(filteringAssets);
  };

  const getAssets = async () => {
    const myAssets = await api.getMyAssets(auth.user?.id);
    const assets = await api.getAllAssets();
    setUserAssets(myAssets);
    setallAssets(assets);
    filteringAvailableAssets(myAssets, assets);
  };

  const getBalance = async () => {
    const userBalance = await api.getBalance(auth.user?.id);
    setBalance(userBalance.balance);
  };

  useEffect(() => {
    getAssets();
    getBalance();
  }, [refreshPageData]);

  return (
    <AssetContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userAssets,
        availableAssets,
        allAssets,
        balance,
        setRefreshPageData,
        refreshPageData,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}
