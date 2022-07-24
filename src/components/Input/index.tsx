import React from "react";

import { InputForm } from "./style";

interface IInput {
  type: string;
  placeholder: string;
  value: string;
  dataTestId: string;
  funcEvent: (event: { target: HTMLInputElement }) => void;
}

function Input({ type, placeholder, value, funcEvent, dataTestId }: IInput) {
  return (
    <div>
      <InputForm
        name={type}
        type={type}
        autoComplete={type}
        value={value}
        data-testid={dataTestId}
        required
        placeholder={placeholder}
        onChange={funcEvent}
      />
    </div>
  );
}

export default Input;
