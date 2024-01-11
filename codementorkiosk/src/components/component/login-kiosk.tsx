/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NeL1gPnuOW1
 */
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginKiosk() {
  return (
    <div key="1" className="flex flex-col h-screen bg-[#E4C88C]">
      <header className="p-5 bg-[#F8EACD] shadow-md">
        <nav className="bg-orange-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img className="w-40 h-auto" src="img/header.png" alt="iai bichah" />
            </a>
           
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-orange-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog 
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-300 md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Quem Somos?
                  </a>
                </li>

                <li>
                  <a
                    href="#"
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
      <main className="flex-1 p-10 flex justify-center">
        <div className="max-w-2xl space-x-20 flex text-semibold">
          <Card className="bg-[#F8EACD] w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl">Bem-vindo de Volta! </CardTitle>
              <img
                className="w-[244px] h-[260px] origin-top-left rotate-0"
                src="https://via.placeholder.com/244x260"
              />
              <CardDescription>
                Por favor insira seu email e senha para logar!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  className="bg-[#E4C88C] rounded-xl"
                  placeholder="Insira seu email aqui"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Input
                  className="bg-[#E4C88C] rounded-xl"
                  placeholder="Insira sua senha aqui"
                  required
                  type="password"
                />
                <Link
                  className="text-sm text-blue-500 hover:underline"
                  href="#"
                >
                  Esqueci a Senha
                </Link>
              </div>
              <Button
                className="w-full mt-4 mb-17"
                variant="outline"
                color="#fffff"
              >
                Login with Google
              </Button>
            </CardContent>
            <CardFooter>
              <Button className="w-full mt-2 bg-[#D9B56B] text-black">
                Sign in
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#F8EACD] w-1/2 ml-auto mr-10">
            <CardHeader>
              <CardTitle className="text-2xl"> É novo por aqui?</CardTitle>
              <CardTitle className="text-1xl">
                Cadastre-se agora mesmo
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Button className="w-full bg-[#D9B56B] text-black">
                Cadastre-se e aprenda já!!!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
