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
let localStream = null;
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

    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoElement.srcObject = localStream;

    const trackSettings = localStream.getVideoTracks()[0].getSettings();
    resolucion.textContent = `Resolución: ${trackSettings.width}x${trackSettings.height}`;
    monitorVelocidad();

    const res = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName, identity }),
    });

    const data = await res.json();
    if (!data.token) throw new Error("Token no recibido");

    const tracks = await createLocalTracks({ audio: true, video: true });
    room = await connect("wss://medallovip-zxlixdwt.livekit.cloud", data.token, { tracks });

    status.textContent = "¡Transmisión activa!";
    status.style.color = "#00ff00";
    btn.textContent = "Detener Transmisión";
    btn.disabled = false;
    isTransmitting = true;
  } catch (error) {
    console.error(error);
    status.textContent = "Error: " + error.message;
    status.style.color = "#ff0033";
    btn.textContent = "Reintentar";
    btn.disabled = false;
  }
}

function detenerTransmision() {
  if (room) {
    room.disconnect();
  }
  if (localStream) {
    localStream.getTracks().forEach(t => t.stop());
  }
  status.textContent = "Transmisión detenida";
  status.style.color = "#ffffff";
  btn.textContent = "Iniciar Transmisión";
  isTransmitting = false;
}

function monitorVelocidad() {
  setInterval(() => {
    const net = navigator.connection;
    if (net && net.downlink) {
      velocidad.textContent = `Velocidad estimada: ${net.downlink.toFixed(2)} Mbps`;
    }
  }, 2000);
}
