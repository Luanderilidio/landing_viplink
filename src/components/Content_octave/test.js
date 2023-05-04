import React, { useState, useEffect } from "react";

function App() {
  const [dias, setDias] = useState([]);

  useEffect(() => {
    let contador = 1;
    const interval = setInterval(() => {
      setDias(prevDias => [...prevDias, `dia ${contador}`]);
      contador++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Lista de dias:</h1>
      <ul>
        {dias.map((dia, index) => (
          <li key={index}>{dia}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
