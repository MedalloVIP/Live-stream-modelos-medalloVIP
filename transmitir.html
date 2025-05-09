<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Transmitir en Vivo (Modelo)</title>
  <style>
    body {
      background: black;
      color: white;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    h1 {
      color: #00ffff;
      margin-bottom: 20px;
    }
    video {
      width: 80%;
      max-width: 720px;
      border: 3px solid #00ffff;
      border-radius: 10px;
    }
    #status {
      margin-top: 15px;
      color: #ff00ff;
      font-weight: bold;
    }
    button {
      margin-top: 15px;
      padding: 10px 20px;
      background: #00ffff;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      color: black;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Transmitiendo en Vivo (Modelo)</h1>
  <video id="videoElement" autoplay muted playsinline></video>
  <div id="status">Esperando iniciar...</div>
  <button id="startBtn">Iniciar Transmisión</button>

  <script type="module">
    import { connect, createLocalTracks } from "https://cdn.skypack.dev/livekit-client";

    const tokenUrl = "https://backend-livekit-medallovip.vercel.app/get-token";
    const roomName = "sala1";
    const identity = "modelo_" + Math.floor(Math.random() * 10000);
    const videoElement = document.getElementById("videoElement");
    const status = document.getElementById("status");
    const btn = document.getElementById("startBtn");

    let room = null;

    btn.onclick = async () => {
      try {
        status.textContent = "Solicitando acceso...";

        const res = await fetch(tokenUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomName, identity }),
        });

        const data = await res.json();
        if (!data.token) throw new Error("Token no recibido");

        const tracks = await createLocalTracks({ audio: true, video: true });

        room = await connect("wss://medallovip-zxlixdwt.livekit.cloud", data.token, { tracks });

        const videoTrack = tracks.find(t => t.kind === "video");
        if (videoTrack) videoTrack.attach(videoElement);

        status.textContent = "¡Transmisión activa!";
        status.style.color = "#00ff00";
      } catch (err) {
        console.error(err);
        status.textContent = "Error: " + err.message;
        status.style.color = "#ff0000";
      }
    };
  </script>
</body>
</html>
