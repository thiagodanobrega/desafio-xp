import { Popover } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/Auth/AuthContext";

function DropdownLogout() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    auth.signout();
    navigate("/");
  };

  return (
    <Popover className="relative text-base">
      <Popover.Button
        className="flex items-center gap-1 focus:outline-none hover:text-light-secondary dark:hover:text-light-secondary text-light-text dark:text-dark-text"
        title="Menu dropdown de login/logout"
      >
        <p className="text-center text-xl font-extrabold">
          {`Olá, ${auth.user?.name.split(" ")[0]}`}
        </p>
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute right-0 z-10">
        <div className="flex flex-col w-16 bg-background rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto">
          <button
            type="button"
            className="flex text-center items-center w-full py-2 pl-3 pr-4 transition duration-150 ease-in-out"
            onClick={logout}
            title="Botão que faz logout"
          >
            Sair
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default DropdownLogout;
