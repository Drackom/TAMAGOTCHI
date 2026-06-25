// src/utils/audio.js

/**
 * Genera ondas de sonido de 8 bits matemáticamente usando la Web Audio API.
 * @param {'click' | 'exito' | 'error'} tipo - El tipo de efecto a reproducir.
 */
export const reproducirSonidoRetro = (tipo) => {
  // Inicializamos el contexto de audio del navegador
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  if (tipo === 'click') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'square'; // Onda cuadrada = Sonido Tamagotchi/GameBoy
    osc.frequency.setValueAtTime(900, audioCtx.currentTime); // Tono agudo y seco
    
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime); // Volumen bajo y controlado
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.05); // Desvanecimiento ultra rápido
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  }

  if (tipo === 'exito') {
    // Sonido doble ascendente clásico de menú retro
    const notas = [600, 900]; 
    notas.forEach((frecuencia, indice) => {
      setTimeout(() => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(frecuencia, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
      }, indice * 80); // Retraso de 80ms entre notas para el arpegio
    });
  }

  if (tipo === 'error') {
    // Zumbido rasposo de advertencia
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sawtooth'; // Onda de sierra
    osc.frequency.setValueAtTime(140, audioCtx.currentTime); // Tono grave
    
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.00001, audioCtx.currentTime + 0.2);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  }
};