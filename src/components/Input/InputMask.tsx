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
  const defaultMaskOptions = {
    prefix,
    suffix: "",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: `${prefix === "R$ " ? "." : ""}`,
    allowDecimal: false,
    decimalSymbol: ".",
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
  };

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
   
  );
}
