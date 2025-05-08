const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// IMPORTANTE: as rotas precisam ser definidas após inicializar o app
const caoRoutes = require('./routes/caoRoutes');
app.use('/caes', caoRoutes);

const adocaoRoutes = require('./routes/adocaoRoutes');
app.use('/adocoes', adocaoRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
});

