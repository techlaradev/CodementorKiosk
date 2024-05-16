"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterKiosk() {
  const [tipoUsuario] = useState(0); // Valor fixo conforme o exemplo
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (senha.length < 7) {
      toast.error("A senha deve ter no mínimo 7 caracteres.");
      return;
    }

    if (senha !== confirmSenha) {
      toast.error("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post("https://9c0c-2804-388-c2a4-bd60-2c8d-2b4f-e5c1-b8fe.ngrok-free.app/api/Usuario", {
        tipoUsuario,
        nome,
        email,
        senha,
        telefone,
        celular,
      });

      toast.success("Registro bem-sucedido!");
      console.log("Registro bem-sucedido!", response.data);

      // Redireciona o usuário para a página de login
      window.location.href = '/internalUser/home-course';
    } catch (error) {
      console.error("Erro ao fazer registro", error);
      toast.error("Erro ao fazer registro. Tente novamente.");
    }
  };
  return (
    <div>
      <ToastContainer />
      <section className="bg-[#F8EACD] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img src="/img/header.png" alt="Header" />
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Insira seu nome aqui!"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Insira seu e-mail aqui!"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmSenha"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirmar senha
                  </label>
                  <input
                    type="password"
                    name="confirmSenha"
                    id="confirmSenha"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={confirmSenha}
                    onChange={(e) => setConfirmSenha(e.target.value)}
                  />
                </div>
                <div>
                  <InputMask
                    mask="(99) 9999-9999"
                    value={telefone}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTelefone(e.target.value)}
                  >
                    {(inputProps: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => (
                      <input
                        {...inputProps}
                        type="tel"
                        name="telefone"
                        id="telefone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Insira seu telefone aqui!"
                      />
                    )}
                  </InputMask>
                </div>
                <div>
                  <InputMask
                    mask="(99) 99999-9999"
                    value={celular}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCelular(e.target.value)}
                  >
                    {(inputProps: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => (
                      <input
                        {...inputProps}
                        type="tel"
                        name="celular"
                        id="celular"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Insira seu celular aqui!"
                        required
                      />
                    )}
                  </InputMask>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      Eu aceito os{" "}
                      <Link
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="/externalUser/term-service"
                      >
                        Termos e Serviços
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-orange-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Começar a jornada
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Já tem conta?{" "}
                  <Link
                    href="/externalUser/login-welcome"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Cola aqui!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
