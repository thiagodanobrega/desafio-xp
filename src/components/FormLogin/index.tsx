import { CircleNotch } from "phosphor-react";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Button } from "../Button";
import Input from "../Input";
import { FormLoginWrapper } from "./style";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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
    setIsErrorLogin(false);
    validateInputsLogin();
  };

  const handlePasswordInput = (event: { target: HTMLInputElement }) => {
    setPassword(event.target.value);
    setIsErrorLogin(false);
    validateInputsLogin();
  };

  const handleSigIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isAuthenticated = await auth.signIn({ email, password });
    if (isAuthenticated) {
      setIsErrorLogin(false);
      navigate("/home");
    } else {
      setIsErrorLogin(true);
    }
  };

  return (
    <FormLoginWrapper onSubmit={handleSigIn}>
      <Input type="email" placeholder="Email" funcEvent={handleEmailInput} />

      <Input
        type="password"
        placeholder="Senha"
        funcEvent={handlePasswordInput}
      />

      <span
        className={`${
          isErrorLogin ? "block" : "invisible "
        } text-center text-red-500`}
      >
        Email ou senha inválidos
      </span>

      <Button type="submit" disabled={disabledButton()}>
        <p>ENTRAR</p>
      </Button>
    </FormLoginWrapper>
  );
}

export default LoginForm;
