import React, { useContext } from "react";

import { AssetContext } from "../contexts/Asset/AssetContext";
import AccountModal from "./AccountModals/AccountModal";
import Carousel from "./Carousel";
import DropdownLogout from "./DropdownLogout";

function Header() {
  const { balance } = useContext(AssetContext);
  return (
    <header className="bg-background-xp bg-cover bg-center relative flex justify-center px-8 py-40">
      <div className="w-[calc(100vw-3rem)] lg:w-[50rem] absolute top-6 flex justify-between items-center">
        <img
          className="h-10 md:h-12 w-auto"
          src="images/logo-xpi.svg"
          alt="Logo da Xp investimentos"
        />
        <DropdownLogout />
      </div>
      <div className="absolute top-28">
        <div className="flex justify-between items-center">
          <span>Saldo</span>
        </div>
        <h1 className="text-3xl font-bold">
          {balance.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
        <AccountModal />
      </div>
      <Carousel />
    </header>
  );
}

export default Header;
