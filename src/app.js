const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>CI/CD Pipeline</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          background: #0d1117;
          color: #e6edf3;
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .card {
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 12px;
          padding: 48px;
          max-width: 500px;
          width: 90%;
          text-align: center;
        }
        .badge {
          background: #238636;
          color: #fff;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 24px;
        }
        h1 { font-size: 28px; margin-bottom: 8px; }
        p { color: #8b949e; margin-bottom: 24px; }
        .info {
          background: #0d1117;
          border-radius: 8px;
          padding: 16px;
          text-align: left;
          font-size: 14px;
        }
        .info div { margin-bottom: 8px; }
        .label { color: #8b949e; }
        .value { color: #58a6ff; font-weight: 600; }
        .dot {
          width: 8px; height: 8px;
          background: #238636;
          border-radius: 50%;
          display: inline-block;
          margin-right: 6px;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">🚀 Deploy realizado com sucesso</div>
        <h1>r4real/ci-cd-aula</h1>
        <p>Pipeline de CI/CD funcionando do início ao fim</p>
        <div class="info">
          <div><span class="label">Status:</span> <span><span class="dot"></span>Online</span></div>
          <div><span class="label">Versão:</span> <span class="value">1.0.0</span></div>
          <div><span class="label">Ambiente:</span> <span class="value">Kubernetes</span></div>
          <div><span class="label">Timestamp:</span> <span class="value">${new Date().toISOString()}</span></div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});