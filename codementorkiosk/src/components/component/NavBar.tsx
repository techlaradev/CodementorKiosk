"use client";

import Link from "next/link";
import React from "react";
import LogoutButton from "@/components/component/LogoutButton"; // Importe o componente de botão de logout
import ThemeToggle from "@/components/component/ThemeToggle"; // Importe o componente de alternância de tema
import UserDetails2 from "./UserDetails2";

function NavBar() {
  const userType = UserDetails2();

  return (
    <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="navbar bg-orange-100">
        <div className="flex-1 ">
          <Link href="/internalUser/home-wave">
            <a className="btn btn-ghost text-xl">
              <img
                className="justify-between w-40 h-auto"
                src="/img/header.png"
              />
            </a>
            <title>Code Mentor</title>
          </Link>
        </div>
        <div className="space-x-4">
          <div className="flex space-x-5">
            {userType === "INT" && (
              <Link href="/externalUser/blog">
                <button className="btn glass">Criar Materia</button>
              </Link>
            )}
            <Link href="/externalUser/blog">
              <button className="btn glass">Blog</button>
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
                  className="btn btn-ghost btn-circle avatar online"
                >
                  <div className="w-10 rounded-full">
                    ,
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://cdn-icons-png.flaticon.com/512/4775/4775486.png"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <ThemeToggle />
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <LogoutButton />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
