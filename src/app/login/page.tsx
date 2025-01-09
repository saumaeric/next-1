import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Bem-vindo
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Faça login na sua conta
        </p>
        <form className="mt-8 space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 rounded-lg border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Seu email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 p-2 rounded-lg border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Não tem uma conta?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
