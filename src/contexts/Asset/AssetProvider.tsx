import React, { useContext, useEffect, useState } from "react";

import { assetApi } from "../../services/assetApi";
import { AuthContext } from "../Auth/AuthContext";
import { AssetContext, IAllAssets, IUserAssets } from "./AssetContext";

export function AssetProvider({ children }: { children: JSX.Element }) {
  const [userAssets, setUserAssets] = useState<IUserAssets[]>([]);
  const [allAssets, setallAssets] = useState<IAllAssets[]>([]);

  const auth = useContext(AuthContext);
  const api = assetApi();

  useEffect(() => {
    const getAssets = async () => {
      const myAssets = await api.getMyAssets(auth.user?.id);
      const assets = await api.getAllAssets();
      setUserAssets(myAssets);
      setallAssets(assets);
    };
    getAssets();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AssetContext.Provider value={{ userAssets, allAssets }}>
      {children}
    </AssetContext.Provider>
  );
}
