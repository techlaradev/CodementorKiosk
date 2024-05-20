import React, { useState, useEffect } from "react";

const Exercise = ({ question, options, correctAnswer, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    // Reset feedback and selected option when question changes
    setSelectedOption(null);
    setFeedback(null);
  }, [question]);

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === correctAnswer;
    setFeedback(isCorrect ? "Correto!" : "errado, tente novamente!");
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h3 className="mb-4 text-xl font-semibold">{question}</h3>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="form-radio"
              />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
      {feedback && <p className="mt-2">{feedback}</p>}
      {feedback === "Correto!" && (
        <button
          onClick={onNext}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Exercise;
