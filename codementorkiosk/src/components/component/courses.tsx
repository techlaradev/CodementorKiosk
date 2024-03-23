import Link from "next/link";
import React from "react";
import NavBar from "@/components/component/NavBar";

export function HomeCourse() {
  return (
    <div className="bg-orange-100 w-full h-full flex">
      <header className="p-5 bg-orange-100 shadow-md">
        <NavBar />
      </header>

      <section
        className="bg-orange-100 flex-1 p-6"
        style={{ marginTop: "40px" }}
      >
        <div
          className="py-8 px-4 mx-auto  text-center lg:py-16 z-10 relative"
          style={{ marginTop: "40px" }}
        >
          <h2 className="mb-1 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Cursos
          </h2>
          <div>
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <div className="flex space-x-5 space-y-20 flex-wrap justify-center">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pesquise por um curso..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Pesquisar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex space-x-5 space-y-5 flex-wrap justify-center">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://areadev.com.br/wp-content/uploads/2022/10/JAVASCRIPT-416x234.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Java Script</h2>
                <p>
                  é uma linguagem de programação de alto nível, dinâmica e
                  orientada a objetos, amplamente utilizada para desenvolvimento
                  web.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Bora iniciar!</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://hermes.dio.me/articles/cover/4cb46a28-34fb-4c72-9588-b5ed52b9470f.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">HTML e CSS</h2>
                <p>
                  HTML (Hypertext Markup Language) e CSS (Cascading Style
                  Sheets) são linguagens fundamentais para a criação e
                  estilização de páginas web.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Bora iniciar!</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/05/como-instalar-o-csharp-e-nosso-primeiro-exemplo.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">C#</h2>
                <p>
                  linguagem de programação moderna e orientada a objetos
                  desenvolvida pela Microsoft como parte da plataforma .NET.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Bora iniciar!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCourse;
