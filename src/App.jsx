// src/App.jsx
import React, { useState, useEffect } from 'react'

function App() {
  const [pantalla, setPantalla] = useState('login')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [tema, setTema] = useState('pink')

  useEffect(() => {
    document.body.className = `theme-${tema}`
  }, [tema])

  const manejarLogin = (e) => {
    e.preventDefault()
    if (usuario.trim() !== '' && password.trim() !== '') {
      setPantalla('menu')
    } else {
      alert('¡Ingresa los datos en la pantalla de tu Tamagotchi!')
    }
  }

  return (
    <>
      <div style={{ width: '100%', maxWidth: '460px', padding: '20px' }}>
        
        {/* INTERFAZ DE LOGIN */}
        {pantalla === 'login' && (
          <form onSubmit={manejarLogin} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="texto-relieve">USUARIO</label>
              <input 
                type="text" 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="pantalla-tamagotchi"
                placeholder="_______________"
                autoComplete="off"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="texto-relieve">CONTRASEÑA</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pantalla-tamagotchi"
                placeholder="•••••••••••••••"
              />
            </div>

            {/* BOTONES DE GOMA CONSTANTES */}
            <div className="contenedor-botones">
              <div className="boton-goma-wrapper">
                <button type="submit" className="btn-goma" title="Iniciar Sesión" />
                <span className="texto-relieve" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                  Iniciar Sesión
                </span>
              </div>

              <div className="boton-goma-wrapper">
                <button 
                  type="button" 
                  className="btn-goma" 
                  title="Registrarse"
                  onClick={() => alert('¡Abriendo pantalla de registro!')} 
                />
                <span className="texto-relieve" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                  Registrarse
                </span>
              </div>
            </div>

          </form>
        )}

        {/* MENÚ PRINCIPAL */}
        {pantalla === 'menu' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'center' }}>
            <p className="texto-relieve" style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
              HOLA: {usuario}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <div className="boton-goma-wrapper" style={{ flexDirection: 'row', gap: '20px', width: '100%', justifyContent: 'flex-start', paddingLeft: '60px' }}>
                <button className="btn-goma" onClick={() => alert('Abriendo Lector...')} />
                <span className="texto-relieve" style={{ fontSize: '1.1rem' }}>⚡ LECTOR ⚡</span>
              </div>
              
              <div className="boton-goma-wrapper" style={{ flexDirection: 'row', gap: '20px', width: '100%', justifyContent: 'flex-start', paddingLeft: '60px' }}>
                <button className="btn-goma" onClick={() => alert('Abriendo Estudio...')} />
                <span className="texto-relieve" style={{ fontSize: '1.1rem' }}>📝 ESTUDIO 📝</span>
              </div>

              <div className="boton-goma-wrapper" style={{ flexDirection: 'row', gap: '20px', width: '100%', justifyContent: 'flex-start', paddingLeft: '60px' }}>
                <button className="btn-goma" onClick={() => alert('Abriendo Resumen...')} />
                <span className="texto-relieve" style={{ fontSize: '1.1rem' }}>📊 RESUMEN 📊</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* SWITCH IZQUIERDO */}
      <div className="panel-perilla-lateral">
        <div className="carril-perilla" onClick={() => {
          if (tema === 'blue') setTema('pink')
          else if (tema === 'pink') setTema('black')
          else setTema('blue')
        }}>
          <div className={`perilla-mecanica perilla-pos-${tema}`} />
        </div>

        <div className="etiquetas-perilla">
          <span className="texto-relieve etiqueta-click" onClick={() => setTema('blue')}>BLUE —</span>
          <span className="texto-relieve etiqueta-click" onClick={() => setTema('pink')}>PINK —</span>
          <span className="texto-relieve etiqueta-click" onClick={() => setTema('black')}>BLACK —</span>
        </div>
      </div>

      {/* ⚠️ CARTEL DE ADVERTENCIA RETRO INYECTADO */}
      <div className="contenedor-advertencia">
        <div className="hueco-plastico">
          <div className="etiqueta-blanca-retro">
            <div className="simbolo-alerta">⚠️</div>
            <p className="texto-alerta">
              SE RECOMIENDA F11 PANTALLA COMPLETA<br />
              DESACTIVAR FORZAR MODO OSCURO EN NAVEGADOR
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App