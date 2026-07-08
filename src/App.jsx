import React, { useState, useEffect } from 'react'
import { reproducirSonidoRetro } from './utils/audio'
import IniciarSesion from './components/Login/IniciarSesion'
import Registrarse from './components/Login/Registrarse'
import MenuPrincipal from './components/Menu/MenuPrincipal'
import './App.css' 

function App() {
  const [pantalla, setPantalla] = useState('login')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [tema, setTema] = useState('pink')
  const [subVista, setSubVista] = useState('menu')
  
  // Estados mecánicos de la tapa trasera
  const [mostrarRegistro, setMostrarRegistro] = useState(false)
  const [regEmail, setRegEmail] = useState('')
  const [regUsuario, setRegUsuario] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [faseMecanica, setFaseMecanica] = useState('abierto') 

  useEffect(() => {
    document.body.className = `theme-${tema}`
  }, [tema])

  const cambiarTema = (nuevoTema) => {
    reproducirSonidoRetro('click')
    setTema(nuevoTema)
  }

  const manejarLogin = (e) => {
    e.preventDefault()
    if (usuario.trim() !== '' && password.trim() !== '') {
      reproducirSonidoRetro('exito')
      setPantalla('menu')
    } else {
      reproducirSonidoRetro('error')
      alert('INGRESE LOS DATOS EN LA PANTALLA PRINCIPAL')
    }
  }

  const ejecutarRegistroMecanico = (e) => {
    e.preventDefault()
    if (regEmail.trim() === '' || regUsuario.trim() === '' || regPassword.trim() === '') {
      reproducirSonidoRetro('error')
      return
    }

    setFaseMecanica('cerrando')
    reproducirSonidoRetro('click')

    setTimeout(() => {
      setFaseMecanica('atornillando')
      reproducirSonidoRetro('click')
    }, 450)

    setTimeout(() => {
      reproducirSonidoRetro('exito')
      setUsuario(regUsuario)
      setMostrarRegistro(false)
      setFaseMecanica('abierto')
      setRegEmail('')
      setRegUsuario('')
      setRegPassword('')
    }, 1450)
  }

  return (
    <>
      {pantalla === 'login' && (
        <IniciarSesion 
          usuario={usuario}
          setUsuario={setUsuario}
          password={password}
          setPassword={setPassword}
          manejarLogin={manejarLogin}
          setMostrarRegistro={setMostrarRegistro}
          tema={tema}
          cambiarTema={cambiarTema}
          mostrarRegistro={mostrarRegistro}
        />
      )}

      {pantalla === 'menu' && (
        <MenuPrincipal 
          usuario={usuario}
          subVista={subVista}
          setSubVista={setSubVista}
          setPantalla={setPantalla}
        />
      )}

      {mostrarRegistro && (
        <Registrarse 
          regEmail={regEmail}
          setRegEmail={setRegEmail}
          regUsuario={regUsuario}
          setRegUsuario={setRegUsuario}
          regPassword={regPassword}
          setRegPassword={setRegPassword}
          faseMecanica={faseMecanica}
          ejecutarRegistroMecanico={ejecutarRegistroMecanico}
          setMostrarRegistro={setMostrarRegistro}
        />
      )}
    </>
  )
}

export default App