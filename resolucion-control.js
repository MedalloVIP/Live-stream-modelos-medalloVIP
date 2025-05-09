export function mostrarResolucion(videoTrack) {
  if (!videoTrack || !videoTrack.mediaStreamTrack) return;

  const settings = videoTrack.mediaStreamTrack.getSettings();
  const resolucionElement = document.getElementById("resolucion");

  if (settings.width && settings.height) {
    resolucionElement.textContent = `Resolución: ${settings.width}x${settings.height}`;
  } else {
    resolucionElement.textContent = "Resolución: desconocida";
  }
}
