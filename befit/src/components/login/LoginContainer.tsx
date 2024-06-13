"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginContainer: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Przykład prostego sprawdzenia hasła
    if (login === "admin" && password === "admin") {
      // Przekierowanie po pomyślnym zalogowaniu
      window.location.href = "/panel";
    } else {
      // Ustawienie komunikatu o błędzie
      setError("Niepoprawny login lub hasło. Spróbuj ponownie.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-ziel2">
          Panel Administratora
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="login"
            >
              Login
            </label>
            <input
              id="login"
              type="text"
              value={login}
              onChange={handleLoginChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none"
              placeholder="Wprowadź login"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              placeholder="Wprowadź hasło"
            />
          </div>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-ziel2 hover:bg-ziel2/85 text-white font-bold py-2 px-4 rounded focus:outline-none ease-out transition-all duration-200"
            >
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
