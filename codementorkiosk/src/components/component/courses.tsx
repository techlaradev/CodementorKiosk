import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import UserDetails from "./UserDetails";

export function HomeCourse() {
  return (
    <div className="bg-orange-100 w-full h-full flex">
      <header className="p-5 bg-orange-100 shadow-md">
        <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
          <div className="navbar bg-orange-100">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">
                <img
                  className="justify-between w-40 h-auto"
                  src="/img/header.png"
                  alt="Logo"
                />
              </a>
              <title>Code Mentor: Cursos</title>
            </div>
            <div className="space-x-4">
              <div className="flex space-x-5">
                <Link href="/internalUser/home-wave">
                  <button className="btn glass">Meus Cursos</button>
                </Link>
                <Link href="/internalUser/home-courses">
                  <button className="btn glass">Cursos</button>
                </Link>
                <Link href="/externalUser/blog">
                  <button className="btn glass">Jonny me ajuda!</button>
                </Link>
                <Link href="/externalUser/blog">
                  <button className="btn glass">Meus Projetos</button>
                </Link>
              </div>
              <div className="flex space-x-5">
                <div className="flex space-x-10">
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
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
          <h3
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white flex-1 p-6"
            style={{ marginTop: "40px" }}
          >
            Olá, <UserDetails />!
          </h3>
          <div className="flex space-x-5 flex-wrap justify-center">
            <div>
              <div className="card w-96 glass">
                <figure>
                  <img
                    src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_3840,q_auto"
                    alt="car!"
                  />
                </figure>
                <div className="card-body cursor-pointer">
                  <h2 className="card-title">Guia em Java Script</h2>
                  <h3 className="text-sm text-left">
                    {" "}
                    Desenvolva habilidades sólidas em programação com uma
                    linguagem amplamente utilizada na indústria de software. Com
                    uma sintaxe simples e poderosa, o C# é ideal para iniciantes
                    e oferece um caminho claro para construir aplicativos para
                    desktop, web e dispositivos móveis.
                  </h3>
                  <div className="card-actions justify-end">
                    <svg
                      className=" w-6 h-6  text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 glass">
                <figure>
                  <img
                    src="https://hermes.dio.me/articles/cover/4cb46a28-34fb-4c72-9588-b5ed52b9470f.jpg"
                    alt="car!"
                  />
                </figure>
                <div className="card-body cursor-pointer">
                  <h2 className="card-title">HTML e CSS</h2>
                  <h3 className="text-sm text-left">
                    {" "}
                    Desenvolva habilidades sólidas em programação com uma
                    linguagem amplamente utilizada na indústria de software. Com
                    uma sintaxe simples e poderosa, o C# é ideal para iniciantes
                    e oferece um caminho claro para construir aplicativos para
                    desktop, web e dispositivos móveis.
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 glass">
                <figure>
                  <img
                    src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/05/como-instalar-o-csharp-e-nosso-primeiro-exemplo.png"
                    alt="car!"
                  />
                </figure>
                <div className="card-body cursor-pointer">
                  <h2 className="card-title">C#</h2>
                  <h3 className="text-sm text-left">
                    {" "}
                    Desenvolva habilidades sólidas em programação com uma
                    linguagem amplamente utilizada na indústria de software. Com
                    uma sintaxe simples e poderosa, o C# é ideal para iniciantes
                    e oferece um caminho claro para construir aplicativos para
                    desktop, web e dispositivos móveis.
                  </h3>
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
