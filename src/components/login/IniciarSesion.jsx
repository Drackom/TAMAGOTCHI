import React from 'react';
import { reproducirSonidoRetro } from '../../utils/audio';

function IniciarSesion({
  usuario,
  setUsuario,
  password,
  setPassword,
  manejarLogin,
  setMostrarRegistro,
  tema,
  cambiarTema,
  mostrarRegistro
}) {
  return (
    <>
      {/* PANTALLA FRONTAL: LOGIN */}
      {!mostrarRegistro && (
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
    </>
  );
}

export default IniciarSesion;