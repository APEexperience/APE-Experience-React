export default function handler(req, res) {
  // Esta función se ejecutará cuando alguien haga una solicitud a /api/users
  if (req.method === 'GET') {
    res.status(200).json({ users: ['Alice', 'Bob', 'Charlie'] });
  } else {
    // Si la solicitud no es GET, enviamos un error
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
