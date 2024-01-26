const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Por favor, forneça um nome para o componente >>> ');
  process.exit(1);
}

const filePath = path.join(__dirname, '../src/components/component', `${componentName}.tsx`);

// Verifica se o arquivo do componente já existe
if (fs.existsSync(filePath)) {
  console.error('O componente já existe.');
  process.exit(1);
}

// Cria o arquivo do componente (.tsx)
fs.writeFileSync(filePath, `
  import React from 'react';

  function ${componentName}() {
    return (
      <div>
        <p>${componentName} component</p>
      </div>
    );
  }

  export default ${componentName};
`);

console.log(`Componente ${componentName} gerado com sucesso! Paranbéns!`);
