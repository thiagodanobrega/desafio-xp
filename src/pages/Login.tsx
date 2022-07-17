import React from "react";

import LoginForm from "../components/FormLogin";

function Login() {
  return (
    <div className="bg-background-xp bg-cover bg-center h-screen flex items-center justify-center">
      <div className="w-[calc(100vw-2rem)] sm:w-[30rem] space-y-8">
        <div className="mt-10">
          <img
            className="mx-auto h-16 w-auto"
            src="images/logo-xpi.svg"
            alt="Logo da XP investimentos"
          />
          <h1 className="mt-6 text-center text-3xl font-extrabold">
            Faça login em sua conta
          </h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
