import React, { useState } from 'react';
import Link from "next/link";
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginKiosk: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      // Supondo que a resposta tenha um token ou algo semelhante
      const { token } = response.data;
      // Armazene o token em algum lugar (localStorage, context, etc.)
      console.log('Login bem-sucedido!', token);
    } catch (error) {
      console.error('Erro ao fazer login', error);
      setError('Credenciais inválidas');
    }
  };

  return (
    <div key="1" className="flex flex-col h-screen bg-[#E4C88C]">
      <header className="p-5 bg-[#f8eacd] shadow-md">
        <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/externalUser/blog" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img className="w-40 h-auto" src="img/header.png" alt="" />
            </a>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-orange-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="/externalUser/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/externalUser/qm-somos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Quem Somos?
                  </a>
                </li>

                <li>
                  <a href="/externalUser/contato" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Contate-nos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-orange-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Aprenda Programação na prática
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-orange-300 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-orange-300 dark:border-orange-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Insira seu e-mail aqui"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-orange-300 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-orange-300 dark:border-orange-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4 h-4 border-orange-300 rounded bg-orange-300 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-orange-300 dark:bg-orange-300 dark:border-orange-300"
                  />
                </div>
                <div className="ms-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="font-bold font-['Montserrat Subrayada'] font-medium text-gray-500 dark:text-gray-400"
                  >
                    Lembrar do meu Login
                  </label>
                </div>
                <a
                  href="/externalUser/esqueci-senha"
                  className="font-bold font-['Montserrat Subrayada'] ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-black-500"
                >
                  Perdi a minha senha, me ajuda!!
                </a>
              </div>
             
              <button
                type="submit"
                className="bg-orange-300 inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Começar a programar
              </button>
              {error && <div className="text-sm font-medium text-red-600">{error}</div>}
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Novo por aqui?{" "}
                <Link
                  href="/externalUser/register"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Cadastre-se já!
                </Link>
              </div>
            </form>
          </div>
          <div>
            <img
              className="h-auto max-w-lg ms-auto"
              src="img/imagemenu.png"
              alt="menu poh"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginKiosk;
