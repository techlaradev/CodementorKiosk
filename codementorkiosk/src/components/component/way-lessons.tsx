import Link from "next/link";
import NavBar from "./NavBar";

export function WayLessons() {
  return (
    <div>
      <header className="p-5 bg-orange-100 shadow-md">
        <NavBar />
      </header>

      <section className="flex-1 p-5" style={{ marginTop: "40px" }}>
        <h1 className="flex items-start text-3xl font-bold text-gray-900">
          Módulo 1
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Introdução ao JavaScript</h2>
              <Link href="/internalUser/javascript-module1">
                <button className="btn btn-primary">Exercicios</button>
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Programação Orientada a Objetos em JavaScript
              </h2>
              <Link href="/internalUser/javascript-module1">
                <button className="btn btn-primary">Exercicios</button>
              </Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Manipulação de Eventos</h2>
              <Link href="/internalUser/javascript-module1">
                <button className="btn btn-primary">Exercicios</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default WayLessons;
