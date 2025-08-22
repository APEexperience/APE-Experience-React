import mongoose from 'mongoose';
import Newsletter from '../../models/newsletterSchema'; // Ajusta la ruta si es necesario

const uri = process.env.MONGODB_URI;

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    const client = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    cachedDb = client.connections[0].db;
    return cachedDb;
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ success: false, message: 'Faltan campos requeridos.' });
        }

        try {
            await connectToDatabase();
            const newNewsletter = new Newsletter({ name, email });
            await newNewsletter.save();

            res.status(201).json({ success: true, message: 'Suscripción exitosa!' });
        } catch (error) {
            if (error.code === 11000) { // Error de duplicado de MongoDB
                return res.status(409).json({ success: false, message: 'Este correo ya está suscrito.' });
            }
            console.error(error);
            res.status(500).json({ success: false, message: 'Error interno del servidor.' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Método no permitido.' });
    }
}
