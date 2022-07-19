import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import React, { Fragment } from "react";

interface IOpen {
  isOpen: boolean;
  title: string;
  setIsOppen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Modal({ isOpen, setIsOppen, title }: IOpen) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOppen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative flex items-center justify-center text-xl font-bold leading-6 text-light-text
    dark:text-dark-text"
                >
                  <h2 className="text-center text-xl font-bold">{title}</h2>
                  <button
                    type="button"
                    className="absolute -top-1 right-0 rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-zinc-700 dark:hover:text-dark-text transition-all"
                    title="Fechar modal"
                    onClick={() => setIsOppen(false)}
                  >
                    <X weight="bold" />
                  </button>
                </Dialog.Title>

                <div className="w-full mt-2">oi</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
