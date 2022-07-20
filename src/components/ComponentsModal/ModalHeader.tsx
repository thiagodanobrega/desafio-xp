import { Dialog } from "@headlessui/react";
import { X } from "phosphor-react";
import React from "react";

interface ICLose {
  title: string;
  setIsOppen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalHeader({ setIsOppen, title }: ICLose) {
  return (
    <Dialog.Title
      as="h2"
      className="relative flex items-center justify-center text-xl font-bold leading-6 text-light-text
        dark:text-dark-text"
    >
      {title}
      <button
        type="button"
        className="absolute -top-1 right-0 rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-zinc-700 dark:hover:text-dark-text transition-all"
        title="Fechar modal"
        onClick={() => setIsOppen(false)}
      >
        <X weight="bold" />
      </button>
    </Dialog.Title>
  );
}

export default ModalHeader;
