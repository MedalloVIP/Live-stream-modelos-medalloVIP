import { connect, createLocalTracks } from "https://cdn.skypack.dev/livekit-client";

const tokenUrl = "https://backend-livekit-medallovip.vercel.app/get-token";
const videoElement = document.getElementById("videoElement");
const status = document.getElementById("status");
const btn = document.getElementById("startBtn");
const resolucion = document.getElementById("resolucion");
const velocidad = document.getElementById("velocidad");

const roomName = "sala1";
const identity = "modelo_" + Math.floor(Math.random() * 100000);

let room = null;
let mediaStream = null;
let isTransmitting = false;

btn.onclick = async () => {
  if (!isTransmitting) {
    await iniciarTransmision();
  } else {
    detenerTransmision();
  }
};

async function iniciarTransmision() {
  try {
    status.textContent = "Solicitando acceso...";
    status.style.color = "#ffaa00";
    btn.disabled = true;

    const res = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName, identity }),
    });

    const data = await res.json();
    if (!data.token) throw new Error("Token no recibido");

    const tracks = await createLocalTracks({ audio: true, video: true });

    room = await connect("wss://medallovip-zxlixdwt.livekit.cloud", data.token, {
      tracks,
    });

    // Adjuntar video
    const videoTrack = tracks.find(t => t.kind === "video");
    if (videoTrack) {
      videoTrack.attach(videoElement);
    }

    // Obtener resolución real
    mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const settings = mediaStream.getVideoTracks()[0].getSettings();
    resolucion.textContent = `Resolución: ${settings.width}x${settings.height}`;

    // Monitorear velocidad estimada
    monitorVelocidad();

    status.textContent = "¡Transmisión activa!";
    status.style.color = "#00ff00";
    btn.textContent = "Detener Transmisión";
    btn.disabled = false;
    isTransmitting = true;
  } catch (err) {
    console.error(err);
    status.textContent = "Error: " + err.message;
    status.style.color = "#ff0033";
    btn.textContent = "Reintentar";
    btn.disabled = false;
  }
}

function detenerTransmision() {
  if (room) {
    room.disconnect();
    mediaStream?.getTracks().forEach(track => track.stop());
    status.textContent = "Transmisión detenida";
    status.style.color = "#ffffff";
    btn.textContent = "Iniciar Transmisión";
    isTransmitting = false;
  }
}

function monitorVelocidad() {
  setInterval(() => {
    const downlink = navigator.connection?.downlink;
    if (downlink) {
      velocidad.textContent = `Velocidad estimada: ${downlink.toFixed(2)} Mbps`;
    }
  }, 3000);
}
