import React, { useState, useEffect } from 'react'
import { reproducirSonidoRetro } from './utils/audio'
import './App.css' 

function App() {
  const [pantalla, setPantalla] = useState('login')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [tema, setTema] = useState('pink')
  const [subVista, setSubVista] = useState('menu');
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
      {/* PANTALLA FRONTAL: LOGIN (Encapsulado en su contenedor angosto nativo) */}
      {pantalla === 'login' && !mostrarRegistro && (
        <div className="contenedor-login-wrapper">
          <form onSubmit={manejarLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="texto-relieve">USUARIO</label>
              <input 
                type="text" 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="pantalla-tamagotchi"
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

          <div className="warning-esquina">
            <div className="texto-relieve warning-titulo">WARNING</div>
            <div className="texto-relieve warning-subtexto">SE RECOMIENDA F11 PARA PANTALLA COMPLETA</div>
            <div className="texto-relieve warning-subtexto">DESACTIVAR FORZAR OSCURO DE PÁGINAS</div>
          </div>
        </div>
      )}

      {/* PANTALLA FRONTAL: EL RETRO-DISPOSITIVO ANCHO (Se renderiza de forma independiente sin límites asfixiantes) */}
      {pantalla === 'menu' && (
        <div className="chasis-tamagotchi-hardware">
          
          {/* TEXTURA PARLANTE IZQUIERDO */}
          <div className="parlante-grilla-huecos izquierdo"></div>

          {/* COLUMNA DE BOTONES FÍSICOS IZQUIERDA */}
          <div className="panel-botones-lateral izquierdo">
            <div className="bocadito-control">
              <button type="button" className="boton-goma-circular" onClick={() => { reproducirSonidoRetro('click'); setSubVista('promedios'); }}></button>
              <span className="etiqueta-plastico">promedios</span>
            </div>
            <div className="bocadito-control">
              <button type="button" className="boton-goma-circular" onClick={() => { reproducirSonidoRetro('click'); setSubVista('calculadora'); }}></button>
              <span className="etiqueta-plastico">calculadora</span>
            </div>
            <div className="bocadito-control">
              <button type="button" className="boton-goma-circular" onClick={() => { reproducirSonidoRetro('click'); setSubVista('materias'); }}></button>
              <span className="etiqueta-plastico">materias</span>
            </div>
          </div>

          {/* NÚCLEO CENTRAL: CONSOLA Y PANTALLA LCD VERDE */}
          <div className="consola-centro-pantalla">
            <div className="marcador-operador">OPERADOR: {usuario.toUpperCase() || 'SDSD'}</div>
            
            {/* PANTALLA VERDE LÍQUIDO CRISTAL */}
            <div className="pantalla-verde-cristal">
              
              <div className="header-interno-lcd">
                <span>25 JUN 2026</span>
                <span>18:30 V.04</span>
              </div>

              {/* RENDERS DINÁMICOS DENTRO DE LA PANTALLA VERDE */}
              <div className="contenido-dinamico-lcd">
                
                {/* VISTA A: EL MENÚ PRINCIPAL CON LOS BICHITOS PIXEL ART */}
                {subVista === 'menu' && (
                  <div className="grid-personajes-retro">
                    <div className="bichito-celda-directa">
                      <svg width="65" height="65" viewBox="0 0 16 16" shapeRendering="crispEdges" className="bichito-pixel">
                        <g className="f1">
                          <rect x="2" y="1" width="2" height="4" fill="#042f1a" /><rect x="12" y="1" width="2" height="4" fill="#042f1a" />
                          <rect x="4" y="4" width="8" height="5" fill="#042f1a" /><rect x="5" y="5" width="1" height="1" fill="#24aa47" />
                          <rect x="10" y="5" width="1" height="1" fill="#24aa47" /><rect x="4" y="9" width="8" height="5" fill="#042f1a" />
                        </g>
                      </svg>
                      <span className="subetiqueta-lcd">LECTOR</span>
                    </div>

                    <div className="bichito-celda-directa">
                      <svg width="65" height="65" viewBox="0 0 16 16" shapeRendering="crispEdges" className="bichito-pixel">
                        <g className="f1">
                          <rect x="1" y="1" width="2" height="5" fill="#042f1a" /><rect x="13" y="1" width="2" height="5" fill="#042f1a" />
                          <rect x="4" y="4" width="8" height="5" fill="#042f1a" /><rect x="5" y="5" width="1" height="1" fill="#24aa47" />
                          <rect x="10" y="5" width="1" height="1" fill="#24aa47" /><rect x="4" y="11" width="8" height="3" fill="#042f1a" />
                        </g>
                      </svg>
                      <span className="subetiqueta-lcd">ESTUDIO</span>
                    </div>

                    <div className="bichito-celda-directa">
                      <svg width="65" height="65" viewBox="0 0 16 16" shapeRendering="crispEdges" className="bichito-pixel">
                        <g className="f1">
                          <rect x="4" y="3" width="8" height="10" fill="#042f1a" /><rect x="3" y="4" width="10" height="8" fill="#042f1a" />
                          <rect x="6" y="5" width="1" height="3" fill="#24aa47" /><rect x="9" y="5" width="1" height="3" fill="#24aa47" />
                        </g>
                      </svg>
                      <span className="subetiqueta-lcd">RESUMEN</span>
                    </div>
                  </div>
                )}

                {/* VISTA B: MATERIAS */}
                {subVista === 'materias' && (
                  <div className="modulo-pantalla-contenedor">
                    <div className="titulo-modulo-lcd">[ CARPETAS DE MATERIAS ]</div>
                    <div className="simulacion-lista-lcd">* Algebra II<br/>* Fisica Mecanica<br/>* Sistemas Operativos</div>
                    <button type="button" className="volver-menu-lcd-btn" onClick={() => setSubVista('menu')}>◀ VOLVER</button>
                  </div>
                )}

                {/* VISTA C: CALCULADORA */}
                {subVista === 'calculadora' && (
                  <div className="modulo-pantalla-contenedor">
                    <div className="titulo-modulo-lcd">[ CALC. CIENTIFICA ]</div>
                    <div className="display-calculadora-interno">0.0000000</div>
                    <button type="button" className="volver-menu-lcd-btn" onClick={() => setSubVista('menu')}>◀ VOLVER</button>
                  </div>
                )}

                {/* VISTA D: PROMEDIOS */}
                {subVista === 'promedios' && (
                  <div className="modulo-pantalla-contenedor">
                    <div className="titulo-modulo-lcd">[ CONTROL PROMEDIOS ]</div>
                    <div className="simulacion-lista-lcd">GRAL: 8.75</div>
                    <button type="button" className="volver-menu-lcd-btn" onClick={() => setSubVista('menu')}>◀ VOLVER</button>
                  </div>
                )}

                {/* VISTA E: TAREAS */}
                {subVista === 'tareas' && (
                  <div className="modulo-pantalla-contenedor">
                    <div className="titulo-modulo-lcd">[ PENDIENTES CHECK ]</div>
                    <div className="simulacion-lista-lcd">[x] Rendir Final<br/>[ ] Leer Cap 4</div>
                    <button type="button" className="volver-menu-lcd-btn" onClick={() => setSubVista('menu')}>◀ VOLVER</button>
                  </div>
                )}

                {/* VISTA F: ANOTADOR */}
                {subVista === 'anotador' && (
                  <div className="modulo-pantalla-contenedor">
                    <div className="titulo-modulo-lcd">[ MEMO / NOTAS ]</div>
                    <div className="simulacion-lista-lcd">"Comprar resina 8k..."</div>
                    <button type="button" className="volver-menu-lcd-btn" onClick={() => setSubVista('menu')}>◀ VOLVER</button>
                  </div>
                )}

                {/* VISTA G: TIEMPOS */}
                {subVista === 'tiempos' && (
                  <div className="modulo-pantalla-contenedor">
                    <div className="titulo-modulo-lcd">[ CRONOMETRO AREAS ]</div>
                    <div className="simulacion-lista-lcd">LECTOR: 45m<br/>ESTUDIO: 1h 20m</div>
                    <button type="button" className="volver-menu-lcd-btn" onClick={() => setSubVista('menu')}>◀ VOLVER</button>
                  </div>
                )}

              </div>

              {/* BARRA DE CALENDARIO INFERIOR FIJA */}
              <div className="barra-calendario-lcd-footer">
                <div className="bloque-fecha-examen">EXAM: --/--</div>
                <div className="linea-tiempo-puntos">▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪</div>
              </div>

            </div>
          </div>

          {/* COLUMNA DE BOTONES FÍSICOS DERECHA */}
          <div className="panel-botones-lateral derecho">
            {/* Botón de Deslogueo estilo Apagado de Emergencia */}
            <div className="bocadito-control">
              <button type="button" className="boton-goma-circular btn-power-off" onClick={() => { reproducirSonidoRetro('click'); setPantalla('login'); setSubVista('menu'); }}>
                ⏻
              </button>
              <span className="etiqueta-plastico-power">deslog</span>
            </div>
            <div className="bocadito-control">
              <button type="button" className="boton-goma-circular" onClick={() => { reproducirSonidoRetro('click'); setSubVista('tareas'); }}></button>
              <span className="etiqueta-plastico">tareas</span>
            </div>
            <div className="bocadito-control">
              <button type="button" className="boton-goma-circular" onClick={() => { reproducirSonidoRetro('click'); setSubVista('anotador'); }}></button>
              <span className="etiqueta-plastico">anotador</span>
            </div>
            <div className="bocadito-control">
              <button type="button" className="boton-goma-circular" onClick={() => { reproducirSonidoRetro('click'); setSubVista('tiempos'); }}></button>
              <span className="etiqueta-plastico">tiempos</span>
            </div>
          </div>

          {/* TEXTURA PARLANTE DERECHO */}
          <div className="parlante-grilla-huecos derecho"></div>

        </div>
      )}

      {/* PERILLA LATERAL (Ajustada según pantalla activa de manera fluida) */}
      {pantalla === 'login' && (
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
      )}

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