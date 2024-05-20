"use client";
import React, { useState } from "react";
import NavBar from "@/components/component/NavBar";
import Exercise from "@/components/component/Exercise";
import CompletionPopup from "@/components/component/CompletionPopup";

const exercisesData = [
  {
    question:
      "O que é JavaScript? JavaScript é uma linguagem de programação amplamente utilizada tanto no desenvolvimento de aplicativos para web quanto para aplicações de servidor. Ela é conhecida por ser uma linguagem de script de alto nível, dinâmica e interpretada, o que significa que ela é executada diretamente no navegador da web do usuário sem a necessidade de compilação prévia. JavaScript é fundamental para a construção de páginas da web interativas, adicionando comportamentos dinâmicos, interatividade e funcionalidades avançadas aos sites. Além disso, ela também é amplamente utilizada em diversas outras áreas, como o desenvolvimento de aplicativos móveis, aplicações de desktop e até mesmo em servidores, graças ao Node.js.",
    options: [
      "Uma linguagem de programação",
      "Um tipo de café",
      "Um planeta",
      "Um filme",
    ],
    correctAnswer: "Uma linguagem de programação",
  },
  {
    question:
      "Qual empresa desenvolveu o JavaScript? JavaScript foi desenvolvido pela Netscape Communications Corporation no início da década de 1990. Inicialmente, era conhecido como Mocha e, posteriormente, foi renomeado para LiveScript. Finalmente, em dezembro de 1995, foi lançado como JavaScript junto com o navegador Netscape Navigator 2.0. JavaScript foi projetado como uma linguagem de script leve para adicionar interatividade às páginas da web. Desde então, tornou-se uma das linguagens de programação mais populares e amplamente utilizadas, tanto no desenvolvimento de aplicativos para web quanto para aplicativos de servidor.",
    options: ["Microsoft", "Apple", "Netscape", "Google"],
    correctAnswer: "Netscape",
  },
  // Adicione mais exercícios conforme necessário
];

const JvscModule1 = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNext = () => {
    if (currentExercise < exercisesData.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setIsPopupOpen(true);
    }
  };

  return (
    <div>
      <header className="p-5 bg-orange-100 shadow-md">
        <NavBar />
      </header>

      <section
        className="flex-1 p-6 bg-orange-100"
        style={{ marginTop: "40px" }}
      >
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Introdução ao JavaScript</h2>

          <Exercise
            question={exercisesData[currentExercise].question}
            options={exercisesData[currentExercise].options}
            correctAnswer={exercisesData[currentExercise].correctAnswer}
            onNext={handleNext}
          />
        </div>
      </section>

      <CompletionPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default JvscModule1;
