"use client";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Contactkiosk() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Certifique-se de que os valores não sejam nulos antes de enviar
    if (!email || !subject || !message) {
      toast.error("Todos os campos são obrigatórios.");
      return;
    }

    try {
      // Enviar dados do formulário para a API do backend
      const response = await axios.post("/api/send-email", {
        email,
        subject,
        message
      });

      if (response.status === 200) {
        toast.success("E-mail enviado com sucesso!");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Erro ao enviar o e-mail.");
      }
    } catch (error) {
      toast.error("Erro ao enviar o e-mail. Tente novamente.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <header className="p-5 bg-[#F8EACD] shadow-md">
        <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img className="w-40 h-auto" src="/img/header.png" alt="" />
            </a>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-orange-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/externalUser/blog"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </li>
                
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Quem Somos?
                  </a>
                </li>

                <li>
                  <a
                    href="/externalUser/contato"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contate-nos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-[#f8eacd] dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Entre em Contato
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Enfrentando um problema técnico? Quer enviar feedback sobre um
            recurso beta? Precisa de detalhes sobre nosso plano de negócios? Nos
            avise.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Seu e-mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="nome@flowbite.com"
                value={email ?? ""}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Nos diga como podemos ajudar você"
                value={subject ?? ""}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Sua mensagem
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Deixe um comentário..."
                value={message ?? ""}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#E4C88C] py-3 px-5 text-sm font-medium text-center text-black rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
