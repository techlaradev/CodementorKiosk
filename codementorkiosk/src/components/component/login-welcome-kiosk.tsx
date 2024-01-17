/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/iI4gtHLRQUF
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginWelcome() {
  return (
    <div>
      <header className="p-5 bg-[#F8EACD] shadow-md">
        <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className="w-40 h-auto" src="/img/header.png" />
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
                    href="/externalUser/contato"
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
              </ul>
            </div>
          </div>
        </nav>
      </header>

      
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-orange-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
                <img
                  className="flex flex-1 justify-center "
                  src="/img/header.png"
                />
              </div>
              <div className="flex flex-1 justify-center">
              <h3 className="text-1xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-3xl/none">
                Bem vindo de volta!
              </h3>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="">
                <div className="flex flex-col items-center">
                  <Input
                    className="max-w-lg mb-4"
                    placeholder="Enter your email"
                    type="email"
                  />

                  <Button className="bg-orange-300 mx-auto" type="submit">
                    Bora codar!
                  </Button>
                </div>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <Link className="underline underline-offset-2" href="/externalUser/register">
                  Quero criar uma nova conta!
                </Link>
              </p>
              <p>    
                 <Link className="underline underline-offset-2" href="/externalUser/esqueci-senha">
                 não lembro minha senha/conta
                </Link>
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}