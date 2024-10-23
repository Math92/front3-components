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

      
      <Card texto="Este es el contenido de la tarjeta 1">
        <button onClick={() => manejarClic('Botón 1 clicado')}>Agregar</button>
      </Card>

      
      <Card texto="Este es el contenido de la tarjeta 2">
        <button onClick={() => manejarClic('Botón 2 clicado')}>Agregar</button>
      </Card>

      
      <Card texto="Este es el contenido de la tarjeta 3">
        <button onClick={() => manejarClic('Botón 3 clicado')}>Agregar</button>
      </Card>

      
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default App;
