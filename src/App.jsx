// src/App.jsx
import React, { useState, useEffect } from 'react'
import { reproducirSonidoRetro } from './utils/audio'

function App() {
  const [pantalla, setPantalla] = useState('login')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [tema, setTema] = useState('pink')

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
      <div style={{ width: '100%', maxWidth: '460px', padding: '20px', position: 'relative' }}>
        
        {/* PANTALLA FRONTAL: LOGIN (Solo visible si no se está registrando) */}
        {pantalla === 'login' && !mostrarRegistro && (
          <>
            <form onSubmit={manejarLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="texto-relieve">USUARIO</label>
                <input 
                  type="text" 
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="pantalla-tamagotchi"
                  placeholder=""
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
                  placeholder=""
                />
              </div>

              <div className="contenedor-botones">
                <div className="boton-goma-wrapper">
                  <button type="submit" className="btn-goma" />
                  <span className="texto-relieve" style={{ fontSize: '0.75rem' }}>ENTRAR</span>
                </div>

                <div className="boton-goma-wrapper">
                  <button 
                    type="button" 
                    className="btn-goma" 
                    onClick={() => { reproducirSonidoRetro('click'); setMostrarRegistro(true); }} 
                  />
                  <span className="texto-relieve" style={{ fontSize: '0.75rem' }}>REGISTRARSE</span>
                </div>
              </div>
            </form>

            {/* CARTEL EN RELIEVE EN LA ESQUINA: Condicionado para que muera al salir de esta vista */}
            <div className="warning-esquina">
              <div className="texto-relieve warning-titulo">WARNING</div>
              <div className="texto-relieve warning-subtexto">SE RECOMIENDA F11 PARA PANTALLA COMPLETA</div>
              <div className="texto-relieve warning-subtexto">DESACTIVAR FORZAR OSCURO DE PÁGINAS</div>
            </div>
          </>
        )}

        {/* PANTALLA FRONTAL: MENÚ */}
        {pantalla === 'menu' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'center' }}>
            <p className="texto-relieve" style={{ fontSize: '1.1rem' }}>HOLA: {usuario}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <div className="boton-goma-wrapper" style={{ flexDirection: 'row', gap: '20px', width: '100%', justifyContent: 'flex-start', paddingLeft: '60px' }}>
                <button className="btn-goma" onClick={() => reproducirSonidoRetro('click')} />
                <span className="texto-relieve" style={{ fontSize: '1.1rem' }}>LECTOR</span>
              </div>
              <div className="boton-goma-wrapper" style={{ flexDirection: 'row', gap: '20px', width: '100%', justifyContent: 'flex-start', paddingLeft: '60px' }}>
                <button className="btn-goma" onClick={() => reproducirSonidoRetro('click')} />
                <span className="texto-relieve" style={{ fontSize: '1.1rem' }}>ESTUDIO</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* PERILLA LATERAL */}
      <div className="panel-perilla-lateral">
        <div className="carril-perilla" onClick={() => {
          if (tema === 'blue') cambiarTema('pink')
          else if (tema === 'pink') cambiarTema('black')
          else cambiarTema('blue')
        }}>
          <div className={`perilla-mecanica perilla-pos-${tema}`} />
        </div>
        <div className="etiquetas-perilla">
          <span className="texto-relieve" style={{ fontSize: '0.85rem' }}>BLUE —</span>
          <span className="texto-relieve" style={{ fontSize: '0.85rem' }}>PINK —</span>
          <span className="texto-relieve" style={{ fontSize: '0.85rem' }}>BLACK —</span>
        </div>
      </div>

      {/* CAPA TRASERA DE REGISTRO */}
      {mostrarRegistro && (
        <div className="capa-registro-trasera">
          <div className="carcasa-trasera-moldura">
            
            <div className="bloque-izquierdo-inputs">
              
              <div style={{ textAlign: 'center', marginBottom: '2px' }}>
                <h2 className="texto-relieve" style={{ fontSize: '1.1rem', margin: '0' }}>
                  REGISTRO NUMERO DE SERIE UNIDAD ID
                </h2>
                <p className="texto-relieve" style={{ fontSize: '0.65rem', opacity: 0.8, margin: '4px 0 0 0' }}>
                  REAR PANEL MODEL A-76 / LR44 BUTTON SYSTEM
                </p>
              </div>

              <input 
                type="email"
                value={regEmail}
                onChange={(e) => { setRegEmail(e.target.value); if(e.target.value.length === 1) reproducirSonidoRetro('click'); }}
                className="pantalla-tamagotchi"
                placeholder="CORREO ELECTRONICO"
                required
                autoComplete="off"
                disabled={faseMecanica !== 'abierto'}
              />

              <input 
                type="text"
                value={regUsuario}
                onChange={(e) => { setRegUsuario(e.target.value); if(e.target.value.length === 1) reproducirSonidoRetro('click'); }}
                className="pantalla-tamagotchi"
                placeholder="NOMBRE DE USUARIO"
                required
                autoComplete="off"
                disabled={faseMecanica !== 'abierto'}
              />

              <input 
                type="password"
                value={regPassword}
                onChange={(e) => { setRegPassword(e.target.value); if(e.target.value.length === 1) reproducirSonidoRetro('click'); }}
                className="pantalla-tamagotchi"
                placeholder="CONTRASEÑA"
                required
                disabled={faseMecanica !== 'abierto'}
              />

              {/* COMPARTIMENTO BATERÍAS */}
              <div className="contenedor-bloque-baterias">
                <div className="pestana-chasis-tornillo" />
                <div className="agujero-rosca-fijo" />

                <div className="receso-chasis-baterias">
                  <div className="ranuras-moneda-wrapper">
                    
                    <div className="well-circular-pila">
                      <span className="marca-polaridad-grabada">-</span>
                      <div className={`pila-coin-lr44 ${regEmail.trim() !== '' ? 'insertada' : ''}`}>
                        <span className="grabado-metal-pila" style={{fontSize: '11px'}}>LR44</span>
                        <span className="grabado-metal-pila" style={{fontSize: '7px', marginTop: '2px'}}>JAPAN</span>
                      </div>
                    </div>

                    <div className="well-circular-pila">
                      <span className="marca-polaridad-grabada">+</span>
                      <div className={`pila-coin-lr44 ${regUsuario.trim() !== '' ? 'insertada' : ''}`}>
                        <span className="grabado-metal-pila" style={{fontSize: '14px', fontWeight: 'bold'}}>+</span>
                        <span className="grabado-metal-pila" style={{fontSize: '10px'}}>LR44</span>
                      </div>
                    </div>

                    <div className="well-circular-pila">
                      <span className="marca-polaridad-grabada">-</span>
                      <div className={`pila-coin-lr44 ${regPassword.trim() !== '' ? 'insertada' : ''}`}>
                        <span className="grabado-metal-pila" style={{fontSize: '11px'}}>LR44</span>
                        <span className="grabado-metal-pila" style={{fontSize: '7px', marginTop: '2px'}}>1.5V</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* TAPA PLÁSTICA PURA */}
                <div className={`wrapper-tapa-mecanica ${faseMecanica !== 'abierto' ? 'cerrada' : ''}`}>
                  <div className="tapa-pestana-redonda" />
                  <div className="junta-plastica-ocultar" />
                  <div className="tapa-cuerpo-rectangular">
                    <div className="grabados-molde-tapa">
                      
                      <div className="bloque-industrial-texto">
                        <span className="texto-grabado-molde">MODEL: TAMAGOTCHI 2026</span>
                        <span className="texto-grabado-molde">BATTERY: LR44 x 3 1.5V</span>
                        <span className="texto-grabado-molde">MADE IN JAPAN / TOKYO CHASSIS</span>
                      </div>

                      <div className="logo-basura-molde">
                        <div className="tacho-tapa-css" />
                        <div className="tacho-cuerpo-css" />
                        <div className="tacho-x-anulacion" />
                        <div className="tacho-x-anulacion-2" />
                      </div>

                      <div className="logo-ce-moldura">CE</div>

                    </div>
                  </div>
                </div>

                {/* TORNILLO METAL */}
                <div className={`tornillo-físico-metal ${faseMecanica !== 'abierto' ? 'visible' : ''} ${faseMecanica === 'atornillando' ? 'tornillo-girando-mecanico' : ''}`} />

              </div>

            </div>

            <div className="bloque-derecho-botones">
              <div className="linea-molde-carcasa" />
              
              <div className="boton-goma-wrapper">
                <button 
                  type="button" 
                  className="btn-goma" 
                  onClick={() => { if(faseMecanica === 'abierto') { reproducirSonidoRetro('click'); setMostrarRegistro(false); } }}
                  disabled={faseMecanica !== 'abierto'}
                />
                <span className="texto-relieve" style={{ fontSize: '0.75rem' }}>ATRÁS</span>
              </div>

              <div className="boton-goma-wrapper">
                <button 
                  type="button" 
                  className="btn-goma" 
                  onClick={ejecutarRegistroMecanico}
                  disabled={faseMecanica !== 'abierto'}
                />
                <span className="texto-relieve" style={{ fontSize: '0.75rem' }}>REGISTRAR</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default App