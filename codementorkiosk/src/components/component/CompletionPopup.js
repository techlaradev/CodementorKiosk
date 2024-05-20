import React from "react";
import Link from "next/link";

const CompletionPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Parabens!</h2>
        <p className="mb-4">Voce completou todos os exercicios!</p>
        <div className="flex space-x-4">
          <Link href="/internalUser/lessons-path">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              sou o melhor!
            </button>
          </Link>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionPopup;
