"use client";

import { useState } from "react";
import { auth } from "@/app/services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await auth.login(email, password);
      alert("Login realizado com sucesso");
    } catch {
      setError("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="my-14 flex justify-center">
      <form
        onSubmit={handleLogin}
        className="w-80 my-12 rounded-xl border border-gray-200 bg-white py-8 px-4 space-y-5 shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Acesso ao sistema
        </h2>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="rounded-md bg-red-50 p-2 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white
            hover:bg-blue-700 cursor-pointer
            disabled:cursor-not-allowed disabled:opacity-60
            transition
          "
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
