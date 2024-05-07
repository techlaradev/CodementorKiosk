import React, { useContext } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { ThemeContext } from "../theme-context"; // Importe o contexto do tema

export function HomeCourse() {
  const theme = useContext(ThemeContext); // Obtenha o tema atual do contexto

  return (
    <div className={`bg-${theme}-100 w-full h-full flex`}>
      <header className={`p-5 bg-${theme}-100 shadow-md`}>
        <nav className={`bg-${theme}-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md`}>
          {/* Conteúdo do navbar */}
        </nav>
      </header>

      <section className={`bg-${theme}-100 flex-1 p-6`} style={{ marginTop: "40px" }}>
        <div className="py-8 px-4 mx-auto text-center lg:py-16 z-10 relative" style={{ marginTop: "40px" }}>
          <h2 className="mb-1 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Cursos
          </h2>
          <h3 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white flex-1 p-6">
            Olá, [ User name ] !
          </h3>
          <div className="flex space-x-5 flex-wrap justify-center">
            {/* Seu conteúdo de cartão aqui */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCourse;
