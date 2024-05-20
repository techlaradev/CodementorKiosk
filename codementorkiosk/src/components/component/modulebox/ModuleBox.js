import React from "react";
import Link from "next/link";

const ModuleBox = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ModuleBox;
