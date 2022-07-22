import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background space-y-8 px-4">
      <img
        src="/images/not_found.svg"
        width={500}
        height={500}
        alt="Imagem de página não encontrada"
      />
      <h1 className="text-xl font-bold text-center">
        OPPS! PÁGINA NÃO ENCONTRADA
      </h1>
      <Button
        type="button"
        className="w-[calc(100vw-2rem)] sm:w-60"
        onClick={() => navigate("/home")}
      >
        Voltar para home
      </Button>
    </div>
  );
}

export default NotFound;
