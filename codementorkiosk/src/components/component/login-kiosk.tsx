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
        <nav className="flex justify-between">
          <div>
            <img
              src="/img/header.png"
              alt="Descrição da imagem"
              className="w-40 h-auto"
            />
          </div>
          <div className="space-x-4 mx-auto font-bold">
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              About
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Contact
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 p-10 flex justify-center">
        <div className="max-w-2xl space-x-20 flex">
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
