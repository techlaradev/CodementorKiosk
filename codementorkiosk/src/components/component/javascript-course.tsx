import React from "react";
import Link from "next/link";
import ModuleBox from "@/components/component/modulebox/modulebox";
import ModulePath from "@/components/component/modulebox/modulepath";
import NavBar from "./NavBar";

const modules = [
  {
    title: "Módulo 1",
    description: "Aprenda os conceitos básicos da programação.",
    link: "/internalUser/lessons-path",
  },
  {
    title: "Módulo 2",
    description: "Desenvolva habilidades de resolução de problemas.",
    link: "/modulo2",
  },
  {
    title: "Módulo 3",
    description: "Conheça diferentes tipos de estruturas de dados.",
    link: "/modulo3",
  },
];

export function JavaScriptCourse() {
  return (
    <div className="">
      <header className="p-5 bg-orange-100 shadow-md">
        <NavBar />
      </header>

      <section
        className="p-5 bg-orange-100 shadow-md"
        style={{ marginTop: "40px" }}
      >
        <h1 className="flex items-start text-3xl font-bold text-gray-900">
          JavaScript
        </h1>

        <div className="flex flex-col items-center p-4 space-y-8">
          {modules.map((module, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link href={module.link}>
                <>
                  <ModuleBox
                    title={module.title}
                    description={module.description}
                  />
                </>
              </Link>
              {index < modules.length - 1 && <ModulePath />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default JavaScriptCourse;
