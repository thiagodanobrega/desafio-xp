import { Eye, EyeSlash } from "phosphor-react";
import React, { useState } from "react";

import { AccountModal } from "./AccountModals/AccountModal";
import Carousel from "./Carousel";
import DropdownLogout from "./DropdownLogout";

function Header() {
  const [isVisibleValue, setIsVisibleValue] = useState(true);

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
          <button
            type="button"
            onClick={() => setIsVisibleValue(!isVisibleValue)}
          >
            {isVisibleValue ? (
              <Eye size={20} color="white" weight="bold" />
            ) : (
              <EyeSlash size={20} color="white" weight="bold" />
            )}
          </button>
        </div>
        <h1 className="text-3xl font-bold">
          {isVisibleValue ? "R$ 2.000,00" : "* * * * * * *"}
        </h1>
        <AccountModal />
      </div>
      <Carousel />
    </header>
  );
}

export default Header;