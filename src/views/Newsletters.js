// /src/Newsletters.js
import React, { useEffect, useState } from 'react'; // Importar React y hooks
import ReactDOM from 'react-dom'; // Importar ReactDOM para la creación de elementos

const Newsletters = () => {
  const [name, setName] = useState([]); // Estado para almacenar suscriptores
  const [email, setEmail] = useState(''); // Estado para el email

  // Funcion para cargar suscriptores desde la API
  useEffect(() => {
    fetch('/Newsletters') // Suponiendo que tienes una ruta GET para esto
      .then(response => response.json())
      .then(data => setName(data))
      .catch(error => console.error('Error al cargar suscriptores:', error));
  }, []);

  // Funcion para manejar la suscripción
  const handleNewsletters = async (e) => {
    e.preventDefault(); // Prevenir comportamiento predeterminado del formulario

    const newNewsletters = { name, email }; // Crear un nuevo suscriptor

    try {
      const response = await fetch('/Newsletters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNewsletters), // Convertir a JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Mensaje de éxito
        setName([...Newsletters, newNewsletters]); // Actualizar el estado de suscriptores
      } else {
        console.error('Error al suscribirse');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <h1>Suscríbete a nuestro boletín</h1>
      <form onSubmit={handleNewsletters}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Suscribirse</button>
      </form>
      <h2>Suscriptores:</h2>
      <ul>
        {Newsletters.map((Newsletters, index) => (
          <li key={index}>{Newsletters.name} - {Newsletters.email}</li>
        ))}
      </ul>
    </div>
  );
};

// Renderizar el componente
ReactDOM.render(
  <React.StrictMode>
    <Newsletters />
  </React.StrictMode>,
  document.getElementById('root')
);

export default Newsletters; // Exportar el componente
