"use client";
import Link from "next/link";
import React from "react";
function NavBar() {
  return (
    <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="navbar bg-orange-100">
        <div className="flex-1">
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
                    <a className="justify-between">Profile</a>
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
  );
}

export default NavBar;
