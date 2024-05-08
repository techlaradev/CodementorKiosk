import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from "./NavBar";

// Componente para controlar o estado do toast
function Toast() {
  const [showToast, setShowToast] = useState(false);

  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {showToast && (
        <div className="fixed bottom-0 right-0 m-5 p-3 bg-gray-900 text-white rounded-md">
          Você precisa completar o módulo anterior para acessar este.
        </div>
      )}
    </>
  );
}

export function WayLessons() {
  return (
    <div className="bg-gray-100 w-full h-full flex flex-col">
      <header className="p-5 bg-orange-100 shadow-md">
        <NavBar />
      </header>
      <section className="flex-1">
        <div className="w-full max-w-4xl mx-auto py-8 px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Caminho de Aprendizado em Programação</h1>
            <Progress className="w-full max-w-md" value={75} />
          </div>
          <div className="grid gap-6">
            {/* Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Nível Iniciante</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {/* Conteúdo */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Introdução à Programação</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Aprenda os conceitos básicos da programação.
                    </p>
                  </div>
                  <Badge className="px-2 py-1 text-sm" variant="outline" color="green">
                    Concluído
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Lógica de Programação</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Desenvolva habilidades de resolução de problemas.
                    </p>
                  </div>
                  <button className="btn btn-primary" onClick={() => console.log("Em Progresso")}>
                    Em Progresso
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Estruturas de Dados</h3>
                    <p className="text-gray-500 dark:text-gray-400">Conheça diferentes tipos de estruturas de dados.</p>
                  </div>
                  <button className="btn btn-primary" onClick={() => console.log("Não Iniciado")}>
                    Não Iniciado
                  </button>
                </div>
              </CardContent>
            </Card>
            {/* Adicione aqui os outros cards com as respectivas funções de clique */}
          </div>
        </div>
      </section>
      <Toast />
    </div>
  );
}
