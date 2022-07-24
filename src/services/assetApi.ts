// import axios from "axios";
import { delay } from "./auth";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API,
// });

const allAssets = [
  {
    idAsset: 1,
    name: "bitcoin",
    quantity: 5,
    value: 100,
  },
  {
    idAsset: 2,
    name: "ethereum",
    quantity: 4,
    value: 100,
  },
  {
    idAsset: 3,
    name: "ripple",
    quantity: 2,
    value: 100,
  },
  {
    idAsset: 4,
    name: "solana",
    quantity: 3,
    value: 100,
  },
  {
    idAsset: 5,
    name: "dogecoin",
    quantity: 2,
    value: 100,
  },
  {
    idAsset: 6,
    name: "tron",
    quantity: 2,
    value: 100,
  },
];

let myAssets = [
  {
    idAsset: 1,
    idUser: 1,
    name: "bitcoin",
    quantity: 3,
    value: 100,
  },
  {
    idAsset: 2,
    idUser: 1,
    name: "ethereum",
    quantity: 1,
    value: 100,
  },
];

let myBalance = {
  id: 1,
  balance: 1000,
};

// simulando requisição a api

export async function getAllAssets() {
  await delay();
  return allAssets;
  // const response = await api.get("/assets");
  // return respoexport const assetApi = {nse.data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getUserAssets(userId: any) {
  await delay();
  return myAssets;
  // const response = await api.get(`/assets/${userId}`);
  // return response.data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getBalance(userId: any) {
  await delay();
  return myBalance;
  // const response = await api.get(`/assets/${userId}`);
  // return response.data;
}

export async function postDeposit(infosDeposit: {
  userId: any;
  value: number;
}) {
  await delay();
  const newBalance = myBalance.balance + infosDeposit.value;
  myBalance = { ...myBalance, balance: newBalance };
  // const response = await api.get(`/assets/${userId}`);
  // return response.data;
}

export async function postWithdraw(infosWithdraw: {
  userId: any;
  value: number;
}) {
  await delay();
  const newBalance = myBalance.balance - infosWithdraw.value;
  myBalance = { ...myBalance, balance: newBalance };
  // const response = await api.get(`/assets/${userId}`);
  // return response.data;
}

export async function postPurchase(infosPurchase: {
  idAsset: number | undefined;
  quantity: number;
  userId: number | undefined;
}) {
  await delay();
  allAssets.forEach((asset) => {
    if (asset.idAsset === infosPurchase.idAsset) {
      // eslint-disable-next-line no-param-reassign
      asset.quantity -= infosPurchase.quantity;
      const purchaseValue = infosPurchase.quantity * asset.value;
      const newBalance = myBalance.balance - purchaseValue;
      myBalance = { ...myBalance, balance: newBalance };
    }
  });
  const boolean = myAssets.some(
    (asset) => asset.idAsset === infosPurchase.idAsset
  );

  if (!boolean) {
    const asset = allAssets.find(
      (asset) => asset.idAsset === infosPurchase.idAsset
    );
    if (asset && infosPurchase.userId && infosPurchase.idAsset) {
      const newAsset = {
        idAsset: infosPurchase.idAsset,
        idUser: 1,
        name: asset.name,
        quantity: infosPurchase.quantity,
        value: 100,
      };
      myAssets.push(newAsset);
    }
  } else {
    myAssets.forEach((asset) => {
      if (asset.idAsset === infosPurchase.idAsset) {
        // eslint-disable-next-line no-param-reassign
        asset.quantity += infosPurchase.quantity;
      }
    });
  }
  // const response = await api.get(`/assets/${userId}`);
  // return response.data;
}

export async function postSell(infosPurchase: {
  idAsset: number | undefined;
  quantity: number;
  userId: number | undefined;
}) {
  await delay();

  allAssets.forEach((asset) => {
    if (asset.idAsset === infosPurchase.idAsset) {
      // eslint-disable-next-line no-param-reassign
      asset.quantity += infosPurchase.quantity;
      const purchaseValue = infosPurchase.quantity * asset.value;
      const newBalance = myBalance.balance + purchaseValue;
      myBalance = { ...myBalance, balance: newBalance };
    }
  });

  const asset = myAssets.find(
    (asset) => asset.idAsset === infosPurchase.idAsset
  );

  if (infosPurchase.quantity === asset?.quantity) {
    myAssets = myAssets.filter(
      (asset) => asset.idAsset !== infosPurchase.idAsset
    );
  }
  if (asset && infosPurchase.quantity < asset?.quantity) {
    asset.quantity -= infosPurchase.quantity;
  }
  // const response = await api.get(`/assets/${userId}`);
  // return response.data;
}
