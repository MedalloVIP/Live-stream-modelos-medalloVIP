import { connect, createLocalTracks } from "https://cdn.skypack.dev/livekit-client";

const tokenUrl = "https://backend-livekit-medallovip.vercel.app/get-token";
const videoElement = document.getElementById("videoElement");
const status = document.getElementById("status");
const btn = document.getElementById("startBtn");

const roomName = "sala1";
const identity = "modelo_" + Math.floor(Math.random() * 100000);

let room = null;
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

    const localVideoTrack = tracks.find(t => t.kind === "video");
    if (localVideoTrack) {
      localVideoTrack.attach(videoElement);
    }

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
    status.textContent = "Transmisión detenida";
    status.style.color = "#ffffff";
    btn.textContent = "Iniciar Transmisión";
    isTransmitting = false;
  }
}
