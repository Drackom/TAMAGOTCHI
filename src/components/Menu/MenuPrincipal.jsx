import React from 'react';
import { reproducirSonidoRetro } from '../../utils/audio';

function MenuPrincipal({
  usuario,
  subVista,
  setSubVista,
  setPantalla
}) {
  return (
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
  );
}

export default MenuPrincipal;