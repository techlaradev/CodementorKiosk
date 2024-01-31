/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qT39EQwaWXD
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeCourseWave() {
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
                />
              </a>
            </div>
            <div className="flex space-x-5">
              <Link href="/externalUser/blog">
                <button className="btn glass">Meus Cursos</button>
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
        </nav>
      </header>

      <section
        className="bg-orange-100 flex-1 p-6"
        style={{ marginTop: "40px" }}
      >
        <h3
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white flex-1 p-6"
          style={{ marginTop: "40px" }}
        >
          <img src="/img/jonny/cool.png" alt="joni" className="w-13 h-11" />
          Olá, !
        </h3>
        <div
          className="py-8 px-4 mx-auto  text-center lg:py-16 z-10 relative"
          style={{ marginTop: "40px" }}
        >
          <h2 className="mb-1 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Meus Cursos
          </h2>
          <a
            href="/externalUser/blog"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-5 text-sm text-black-700 bg-orange-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-orange-300 rounded-full text-white px-4 py-1.5 me-3">
              Novo
            </span>
            <span className="text-sm font-medium">
              Confira a nova atualização
            </span>
            <svg
              className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>

          <article
            className="bg-white border rounded-lg p-4 space-y-2 max-w-sm"
            style={{ marginTop: "40px" }}
          >
            <h2 className="text-xl font-bold">
              Web Básico - HTML, CSS, e Javascript{" "}
            </h2>
            <a
              href="#"
              className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m10 8.1-3.7.3-2 2a1 1 0 0 0 .5 1.6l2.7.3M16 14l-.3 3.7-2 2a1 1 0 0 1-1.6-.5l-.4-2.7m8.2-11.1a1.4 1.4 0 0 0-1.2-1.2c-1.6-.2-4.9-.6-6.3.9a70.7 70.7 0 0 0-6.5 10.6c0 .2.2.4.3.5l.8.9.9.8a1 1 0 0 0 1 .2A71 71 0 0 0 19 11.8c1.5-1.5 1.1-4.8.9-6.4Zm-3 3.7A1.9 1.9 0 1 1 13 9a1.9 1.9 0 0 1 3.8 0Z"
                />{" "}
              </svg>
              Concluido
            </a>
            <p className="text-gray-500 dark:text-gray-400">
              Explore advanced patterns in React for managing state and side
              effects.
            </p>
            <Button className="text-white bg-black w-full disabled">
              Finalizado
            </Button>
          </article>

          <article
            className="bg-white border rounded-lg p-4 space-y-2 max-w-sm"
            style={{ marginTop: "40px" }}
          >
            <h2 className="text-xl font-bold">
              Web Básico - HTML, CSS, e Javascript{" "}
            </h2>
            <a
              href="#"
              className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-yellow-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m10 8.1-3.7.3-2 2a1 1 0 0 0 .5 1.6l2.7.3M16 14l-.3 3.7-2 2a1 1 0 0 1-1.6-.5l-.4-2.7m8.2-11.1a1.4 1.4 0 0 0-1.2-1.2c-1.6-.2-4.9-.6-6.3.9a70.7 70.7 0 0 0-6.5 10.6c0 .2.2.4.3.5l.8.9.9.8a1 1 0 0 0 1 .2A71 71 0 0 0 19 11.8c1.5-1.5 1.1-4.8.9-6.4Zm-3 3.7A1.9 1.9 0 1 1 13 9a1.9 1.9 0 0 1 3.8 0Z"
                />{" "}
              </svg>
              Em progresso
            </a>
            <p className="text-gray-500 dark:text-gray-400">
              Explore advanced patterns in React for managing state and side
              effects.
            </p>
            <Button className="text-white bg-black w-full">
              Start Tutorial
            </Button>
          </article>

          <article
            className="bg-white border rounded-lg p-4 space-y-2 max-w-sm"
            style={{ marginTop: "40px" }}
          >
            <h2 className="text-xl font-bold">
              Web Básico - HTML, CSS, e Javascript{" "}
            </h2>
            <a
              href="#"
              className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-yellow-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m10 8.1-3.7.3-2 2a1 1 0 0 0 .5 1.6l2.7.3M16 14l-.3 3.7-2 2a1 1 0 0 1-1.6-.5l-.4-2.7m8.2-11.1a1.4 1.4 0 0 0-1.2-1.2c-1.6-.2-4.9-.6-6.3.9a70.7 70.7 0 0 0-6.5 10.6c0 .2.2.4.3.5l.8.9.9.8a1 1 0 0 0 1 .2A71 71 0 0 0 19 11.8c1.5-1.5 1.1-4.8.9-6.4Zm-3 3.7A1.9 1.9 0 1 1 13 9a1.9 1.9 0 0 1 3.8 0Z"
                />{" "}
              </svg>
              Em progresso
            </a>
            <p className="text-gray-500 dark:text-gray-400">
              Explore advanced patterns in React for managing state and side
              effects.
            </p>
            <Button className="text-white bg-black w-full">
              Start Tutorial
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
}
