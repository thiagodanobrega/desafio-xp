import React from "react";

import { InputForm } from "./style";

interface IInput {
  type: string;
  placeholder: string;
}

function Input({ type, placeholder }: IInput) {
  return (
    <div>
      <InputForm
        name={type}
        type={type}
        autoComplete={type}
        required
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
