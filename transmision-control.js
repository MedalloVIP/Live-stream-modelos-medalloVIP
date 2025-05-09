import { connect, createLocalTracks } from "https://cdn.skypack.dev/livekit-client";

const tokenUrl = "https://backend-livekit-medallovip.vercel.app/get-token";
const roomName = "sala1";
const identity = "modelo_" + Math.floor(Math.random() * 100000);

const videoElement = document.getElementById("videoElement");
const status = document.getElementById("status");
const resolution = document.getElementById("resolucion");
const speed = document.getElementById("velocidad");
const btnTransmit = document.getElementById("startBtn");
const btnMic = document.getElementById("micBtn");

let room = null;
let micEnabled = true;
let isTransmitting = false;
let audioTrack = null;
let videoTrack = null;

btnTransmit.onclick = async () => {
  if (!isTransmitting) {
    await iniciarTransmision();
  } else {
    detenerTransmision();
  }
};

btnMic.onclick = () => {
  if (audioTrack) {
    micEnabled = !micEnabled;
    audioTrack.muted = !micEnabled;
    btnMic.textContent = micEnabled ? "Silenciar Micrófono" : "Activar Micrófono";
    btnMic.style.backgroundColor = micEnabled ? "#ff00ff" : "#ff3333";
  }
};

async function iniciarTransmision() {
  try {
    status.textContent = "Conectando...";
    status.style.color = "#ffaa00";
    btnTransmit.disabled = true;

    const res = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName, identity }),
    });

    const data = await res.json();
    if (!data.token) throw new Error("Token no recibido");

    const tracks = await createLocalTracks({ audio: true, video: true });
    audioTrack = tracks.find(t => t.kind === "audio");
    videoTrack = tracks.find(t => t.kind === "video");

    room = await connect("wss://medallovip-zxlixdwt.livekit.cloud", data.token, {
      tracks,
    });

    if (videoTrack) {
      videoTrack.attach(videoElement);
      mostrarResolucion(videoTrack);
    }

    mostrarVelocidad();

    status.textContent = "¡Transmisión activa!";
    status.style.color = "#00ff00";
    btnTransmit.textContent = "Detener Transmisión";
    btnTransmit.disabled = false;
    isTransmitting = true;
  } catch (error) {
    console.error(error);
    status.textContent = "Error: " + error.message;
    status.style.color = "#ff0033";
    btnTransmit.textContent = "Reintentar";
    btnTransmit.disabled = false;
  }
}

function detenerTransmision() {
  if (room) {
    room.disconnect();
    if (videoTrack) videoTrack.detach();
    status.textContent = "Transmisión detenida";
    status.style.color = "#aaaaaa";
    btnTransmit.textContent = "Iniciar Transmisión";
    isTransmitting = false;
  }
}

function mostrarResolucion(videoTrack) {
  const settings = videoTrack.mediaStreamTrack.getSettings();
  if (settings.width && settings.height) {
    resolution.textContent = `Resolución: ${settings.width}x${settings.height}`;
  }
}

function mostrarVelocidad() {
  setInterval(() => {
    if (navigator.connection) {
      speed.textContent = `Velocidad: ${navigator.connection.downlink.toFixed(1)} Mbps`;
    }
  }, 3000);
}
