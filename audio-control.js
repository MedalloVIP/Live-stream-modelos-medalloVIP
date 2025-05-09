// audio-control.js

export let audioTrack = null;
export let micEnabled = true;

export function setAudioTrack(track) {
  audioTrack = track;
}

export function toggleMic(button) {
  if (!audioTrack) {
    console.warn("No hay pista de audio disponible");
    return;
  }

  micEnabled = !micEnabled;
  audioTrack.muted = !micEnabled;

  button.textContent = micEnabled ? "Silenciar Micrófono" : "Activar Micrófono";
  button.style.backgroundColor = micEnabled ? "#ff00ff" : "#ff3333";
}
