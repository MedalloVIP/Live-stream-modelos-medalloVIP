let micEnabled = true;
let audioTrack = null;

export function inicializarMicrofono(tracks, btnMic) {
  audioTrack = tracks.find(t => t.kind === 'audio');

  if (audioTrack) {
    btnMic.onclick = () => {
      micEnabled = !micEnabled;
      audioTrack.muted = !micEnabled;

      btnMic.textContent = micEnabled ? "Silenciar Micrófono" : "Activar Micrófono";
      btnMic.style.backgroundColor = micEnabled ? "#ff00ff" : "#ff3333";
    };
  } else {
    console.warn("No se encontró pista de audio.");
    btnMic.disabled = true;
    btnMic.textContent = "Micrófono no disponible";
  }
}
