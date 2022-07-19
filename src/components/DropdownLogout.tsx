import { Popover } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import React, { useContext } from "react";

function DropdownLogout() {
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
    </Popover>
  );
}

export default DropdownLogout;
