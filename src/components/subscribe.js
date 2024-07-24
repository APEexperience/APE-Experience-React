const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb+srv://apeexperience:QJbG5GbMhlu6vMLi@ape.pvr3vqh.mongodb.net/?retryWrites=true&w=majority&appName=APE', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

// Definir el modelo de suscriptor
const subscriberSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Middleware para manejar datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para manejar la suscripción
app.post('/subscribe', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();
    res.status(200).json({ message: 'Suscripción exitosa' });
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar la suscripción' });
  }
});

// Iniciar el servidor
const PORT = 27017;
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});