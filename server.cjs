// const express = require('express');
// const path = require('path');
// const app = express();

// // Defina a porta que o servidor vai rodar
// const PORT = process.env.PORT || 3000;

// // Sirva os arquivos estáticos da pasta dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Para qualquer rota que não seja API, retorne o index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// // Inicie o servidor na porta definida
// app.listen(PORT, () => {
//   console.log(`Servidor ouvindo na porta ${PORT}`);
// });
