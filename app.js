const express = require('express');
const dotenv = require('dotenv'); 


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send(`La variable de entorno PORT es: ${port}`);
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});