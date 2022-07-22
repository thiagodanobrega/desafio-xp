import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

interface IInput {
  type: string;
  placeholder: string;
  prefix: string;
  funcEvent: (event: { target: HTMLInputElement }) => void;
}

export default function InputMask({
  placeholder,
  type,
  funcEvent,
  prefix,
}: IInput) {
  

  return (
    
  );
}
