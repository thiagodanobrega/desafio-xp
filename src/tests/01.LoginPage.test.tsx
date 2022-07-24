// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";

import Login from "../pages/Login";
import renderWithRouter from "../utils/renderWithRouter";

const EMAIL_INPUT_TEST_ID = "input-email";
const PASSWORD_INPUT_TEST_ID = "input-password";
const BUTTON_LOGIN_TEST_ID = "btn-login";
const VALID_EMAIL = "test@email.com";
const VALID_PASSWORD = "1234567";
const INVALID_EMAIL = "alguem@email.";
const INVALID_PASSWORD = "23456";

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
});
export {};
