import NavBar from "./NavBar";
import Link from "next/link";
import React from "react";
import UserDetails from "./UserDetails";

export function HomeCourseWave() {
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
          className="py-8 px-4 mx-auto text-center lg:py-16 z-10 relative"
          style={{ marginTop: "40px" }}
        >
          <h2 className="mb-1 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Meus Cursos
          </h2>

          <h3
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl flex-1 p-6"
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
                    alt="JavaScript!"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Java Script</h2>
                  <p>
                    <progress
                      className="progress progress-accent w-full"
                      value="20"
                      max="100"
                    ></progress>
                  </p>
                  <div className="card-actions justify-end">
                    <Link href="/internalUser/javascriptc">
                      <button className="btn btn-primary">Em Progresso!</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
