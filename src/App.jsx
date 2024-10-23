import { useState } from 'react';
import Saludo from './components/Saludo';
import Card from './components/Card';

const App = () => {
  const [mensaje, setMensaje] = useState('');

  const manejarClic = (texto) => {
    setMensaje(texto);
  };

  return (
    <div>
      <Saludo nombre="Mathias">Hola</Saludo>

      {/* Card con el texto y un botón */}
      <Card texto="Este es el contenido de la tarjeta 1">
        <button onClick={() => manejarClic('Botón 1 clicado')}>Agregar</button>
      </Card>

      {/* Otra Card con un texto diferente y con botón */}
      <Card texto="Este es el contenido de la tarjeta 2">
        <button onClick={() => manejarClic('Botón 2 clicado')}>Agregar</button>
      </Card>

      {/* Otra Card con un texto diferente y botón */}
      <Card texto="Este es el contenido de la tarjeta 3">
        <button onClick={() => manejarClic('Botón 3 clicado')}>Agregar</button>
      </Card>

      {/* Mostrar el mensaje del botón clicado */}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default App;
