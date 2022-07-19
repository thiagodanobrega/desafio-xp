import { createContext } from "react";

export interface IAllAssets {
  idAsset?: number;
  name: string;
  quantity: number;
  value: number;
}

export interface IUserAssets extends IAllAssets {
  idUser?: number;
}

export interface IAssetContext {
  userAssets: IUserAssets[];
  availableAssets: IAllAssets[];
  allAssets: IAllAssets[];
}

export const AssetContext = createContext({} as IAssetContext);
