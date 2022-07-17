import React from "react";

import { Button } from "../Button";
import Input from "../Input";
import { FormLoginWrapper } from "./style";

function LoginForm() {
  return (
    <FormLoginWrapper className="bg-primary mt-8 flex flex-col gap-4 rounded-lg shadow-sm p-10 sm:p-16">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Button type="submit">ENTRAR</Button>
    </FormLoginWrapper>
  );
}

export default LoginForm;
