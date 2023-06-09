import React from "react";

export default function Nav({ onLogout }) {
  return (
    <div className="nav">
      <h1 className="logo">SisRepo</h1>
      <button onClick={onLogout}>Sair</button>
    </div>
  );
}
