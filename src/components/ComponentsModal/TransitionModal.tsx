import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

function TransitionModal() {
  return (
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
  );
}

export default TransitionModal;
