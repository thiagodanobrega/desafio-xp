// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";

import App from "../App";
import { AssetProvider } from "../contexts/Asset/AssetProvider";
import * as exports from "../contexts/Auth/AuthProvider";
import { AuthProvider } from "../contexts/Auth/AuthProvider";
import { CryptoProvider } from "../contexts/Crypto/CryptoProvider";
import Login from "../pages/Login";
import renderWithRouter from "../utils/renderWithRouter";

const EMAIL_INPUT_TEST_ID = "input-email";
const PASSWORD_INPUT_TEST_ID = "input-password";
const BUTTON_LOGIN_TEST_ID = "btn-login";
const VALID_EMAIL = "test@email.com";
const VALID_PASSWORD = "1234567";
const INVALID_EMAIL = "alguem@email.";
const INVALID_PASSWORD = "23456";
const INVALID_EMAIL_2 = "alguem@email.com";
const INVALID_PASSWORD_2 = "12345678";

describe("1 - Testando a tela de login", () => {
  test("Verifica se possui o título 'Faça login em sua conta'", () => {
    renderWithRouter(<Login />);
    const title = screen.getByText(/Faça login em sua conta/i);
    expect(title).toBeInTheDocument();
  });
  test("Verifica se os inputs de email e senha e botão são renderizados'", () => {
    renderWithRouter(<Login />);
    expect(screen.getByTestId(EMAIL_INPUT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_INPUT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(BUTTON_LOGIN_TEST_ID)).toBeInTheDocument();
  });
  test("Verifica se botão de login fica habilitado após email e senha válidos'", () => {
    renderWithRouter(<Login />, { route: "/" });
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const loginButton = screen.getByTestId(BUTTON_LOGIN_TEST_ID);

    fireEvent.change(inputEmail, INVALID_EMAIL);
    fireEvent.change(inputPassword, INVALID_PASSWORD);
    expect(loginButton).toBeDisabled();

    fireEvent.change(inputEmail, INVALID_EMAIL);
    fireEvent.change(inputPassword, VALID_PASSWORD);
    expect(loginButton).toBeDisabled();

    fireEvent.change(inputEmail, VALID_EMAIL);
    fireEvent.change(inputPassword, INVALID_PASSWORD);
    expect(loginButton).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: VALID_EMAIL } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    expect(loginButton).toBeEnabled();
  });

  test("Verifica se retorna mensagem de erro após degitar email ou senha não cadastrados", async () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const loginButton = screen.getByTestId(BUTTON_LOGIN_TEST_ID);

    fireEvent.change(inputEmail, { target: { value: INVALID_EMAIL_2 } });
    fireEvent.change(inputPassword, { target: { value: INVALID_PASSWORD_2 } });
    fireEvent.click(loginButton);
    expect(
      await screen.findByText(/Email ou senha inválidos/i)
    ).toBeInTheDocument();
  });

  test("Verifica se rerireciona para página home e salva token e usuário no localStorage", async () => {
    renderWithRouter(
      <AuthProvider>
        <AssetProvider>
          <CryptoProvider>
            <App />
          </CryptoProvider>
        </AssetProvider>
      </AuthProvider>,
      { route: "/" }
    );
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const loginButton = screen.getByTestId(BUTTON_LOGIN_TEST_ID);

    fireEvent.change(inputEmail, { target: { value: "test@email.com" } });
    fireEvent.change(inputPassword, { target: { value: "1234567" } });
    fireEvent.click(loginButton);
    expect(await screen.findByText(/Minhas ações/i)).toBeInTheDocument();
    const tokenLocalStorage = localStorage.getItem("authToken");
    const userLocalStorage = localStorage.getItem("user");

    expect(tokenLocalStorage).toBeTruthy();
    expect(userLocalStorage).toBeTruthy();
  });
});
