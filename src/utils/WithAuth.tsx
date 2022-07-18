import React from "react";
import { Navigate } from "react-router-dom";

export default function WithAuth({ children }: { children: JSX.Element }) {
  const storageToken = localStorage.getItem("authToken");
  if (!storageToken) {
    return <Navigate to="/" />;
  }

  return children;
}
