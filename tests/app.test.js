const http = require('http');

// Importa o app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ mensagem: 'Hello World! CI/CD funcionando!' });
});

const server = app.listen(4000, () => {
  // Faz requisição para testar
  http.get('http://localhost:4000', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const json = JSON.parse(data);
      
      // Valida se a resposta está correta
      if (json.imagem) {
        console.log('✅ Teste passou! API respondendo corretamente');
        server.close();
        process.exit(0); 
      } else {
        console.log('❌ Teste falhou! API não retornou mensagem');
        server.close();
        process.exit(1); 
      }
    });
  });
});
