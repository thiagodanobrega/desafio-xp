import React, { useState } from "react";

import DropdownLogout from "./DropdownLogout";

function Header() {
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
    </header>
  );
}

export default Header;
