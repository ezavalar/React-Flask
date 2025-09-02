import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [usuarios, setUsuarios] = useState([]) // Estado para almacenar los datos de usuarios
  
  // useEffect para obtener los datos de la API del Backend al montar el componente
  useEffect(() => {
    fetch('http://localhost:5000/api/usuarios')
      .then(response => response.json())
      .then(data =>setUsuarios(data.usuarios)) // Actualiza el estado con los datos obtenidos
      .catch(error => console.error('Error al obtener los datos:', error));
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React con Vite + Python con Flask</h1>
      <div className="card">
        <h2>Lista de Usuarios</h2>
          {
            usuarios.map(usuario => (
              <p key={usuario.id}>{usuario.id} - {usuario.nombre}</p>
            ))
          }
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
