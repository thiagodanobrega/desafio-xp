import React, { useState, useContext } from "react";

import { Button } from "../Button";
import Input from "../Input";
import { FormLoginWrapper } from "./style";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputsLogin = () => {
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
    const emailValidation = regexEmail.test(email);
    const minPassword = 6;
    const passwordValidation = password.length > minPassword;
    if (emailValidation && passwordValidation) {
      return false;
    }
    return true;
  };

  const disabledButton = () => {
    return validateInputsLogin();
  };

  const handleEmailInput = (event: { target: HTMLInputElement }) => {
    setEmail(event.target.value);
    validateInputsLogin();
  };

  const handlePasswordInput = (event: { target: HTMLInputElement }) => {
    setPassword(event.target.value);
    validateInputsLogin();
  };

  return (
    <FormLoginWrapper>
      <Input type="email" placeholder="Email" funcEvent={handleEmailInput} />

      <Input
        type="password"
        placeholder="Senha"
        funcEvent={handlePasswordInput}
      />

      <Button type="submit" disabled={disabledButton()}>
        <p>ENTRAR</p>
      </Button>
    </FormLoginWrapper>
  );
}

export default LoginForm;
