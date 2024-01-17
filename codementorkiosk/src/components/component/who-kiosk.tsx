// MeuComponente.js
import React from "react";

const WhoKiosk = () => {
  return (
    <div>
      <header className="p-5 bg-[#f8eacd] shadow-md">
        <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/externalUser/blog"
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
                    href="/externalUser/qm-somos"
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
                
                <li>
                  <a href="/externalUser/contato" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    FAQ
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className=" bg-[#f8eacd] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Code Mentor, um projeto jovem 🖖👽
            </h1>
            <p className="mb-8 text-lg font-normal text-black-500 lg:text-xl dark:text-gray-400">
              Somos estudantes da FATEC Rubens Lara do período Noturno, que
              montaram o codementor com auxílio do professor orientador Valdir
              Tobias. Somos uma equipe de 4 pessoas, sendo elas: Alberth Clint
              Pastorello, Lara Ayne, Luana Ferreira e Marcelo Barbosa.
            </p>
            <div>
              <h2 className="font-bold">Nossos Valores</h2>
              <ul>
                <li>&#8226; Apoio ao Aprendizado 📚</li>
                <li>&#8226; Curiosidade 📚</li>
                <li>&#8226; Diversidade 🏳‍🌈</li>
                <li>&#8226; Inclusão</li>
                <li>&#8226; Transparência</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a
                href="/externalUser/register"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Vem aprender com a Gente!
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Fazer um tour
              </a>
            </div>
          </div>

          <div>
           
           <a> <img src="/img/logos.png" alt="" />
           </a>
            <iframe
              className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/KaLxCiilHns"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoKiosk;
