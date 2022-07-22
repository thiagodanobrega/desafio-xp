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
    <MaskedInput
      mask={currencyMask}
      placeholder={placeholder}
      type={type}
      onChange={funcEvent}
      className="relative w-full h-12 px-3 py-2 border rounded-md placeholder-gray-500 text-2xl text-gray-900 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-secondary "
    />
  );
}
