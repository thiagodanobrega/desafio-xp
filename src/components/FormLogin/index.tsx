import React, { useState, useContext } from "react";

import { Button } from "../Button";
import Input from "../Input";
import { FormLoginWrapper } from "./style";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event: { target: HTMLInputElement }) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: { target: HTMLInputElement }) => {
    setPassword(event.target.value);
  };

  return (
    <FormLoginWrapper>
      <Input type="email" placeholder="Email" funcEvent={handleEmailInput} />

      <Input
        type="password"
        placeholder="Senha"
        funcEvent={handlePasswordInput}
      />

      <Button type="submit">
        <p>ENTRAR</p>
      </Button>
    </FormLoginWrapper>
  );
}

export default LoginForm;
