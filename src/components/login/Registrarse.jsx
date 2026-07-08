import React from 'react';
import { reproducirSonidoRetro } from '../../utils/audio';

function Registrarse({
  regEmail,
  setRegEmail,
  regUsuario,
  setRegUsuario,
  regPassword,
  setRegPassword,
  faseMecanica,
  ejecutarRegistroMecanico,
  setMostrarRegistro
}) {
  return (
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
  );
}

export default Registrarse;