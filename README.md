# Live-stream-modelos-medalloVIP
Plataforma de trasmisiones en vivo 
# MedalloVIP - Plataforma de Streaming y Economía Digital

## Descripción General
MedalloVIP es una plataforma de entretenimiento en vivo que combina transmisiones en tiempo real, interacción con IA, sistema tokenizado, control de usuarios y un ecosistema completo de herramientas para modelos, usuarios y administradores.

---

## Arquitectura del Proyecto

### HTML
- `transmitir.html` → Vista de emisión para modelos.
- `ver-transmision.html` → Vista de observación para usuarios.
- `chat.html` → Chat externo o adicional.
- `perfil.html` → Configuración y visualización del perfil.

---

### JavaScript (Controladores Modulares)

- `transmision-control.js` → Encargado de iniciar, detener y controlar la transmisión.
- `tokens-control.js` → Manejo de propinas, saldo y metas.
- `chat-control.js` → Envío y recepción de mensajes en vivo.
- `c2c-control.js` → Activación de cámara del usuario (modo privado).
- `audio-control.js` → Activar/silenciar micrófono.
- `velocidad-control.js` → Muestra la velocidad de conexión.
- `resolucion-control.js` → Muestra la calidad de resolución del stream.
- `modo-control.js` → Alterna entre modo oscuro/claro.
- `perfil-control.js` → Permite configurar nombre, descripción, imagen, etc.
- `melizza-ai.js` → Integra la IA asistente (voz, respuestas y acompañamiento).
- `reacciones-control.js` → Controla animaciones y efectos en el chat.
- `bots-chat-control.js` → Mensajes automáticos, comandos, bienvenida.
- `marketing-control.js` → Herramientas de promoción, referidos, enlaces.
- `clubfans-control.js` → Sistema de suscripciones premium por niveles.
- `ranking-control.js` → Muestra top modelos y usuarios destacados.
- `reportes-control.js` → Manejo de reportes y alertas de usuarios.
- `moderacion-control.js` → Control de comportamiento y bloqueo.
- `traduccion-control.js` → Traducción automática en tiempo real.
- `metas-control.js` → Objetivos de tokens, animaciones de progreso.
- `notificaciones-control.js` → Alertas en pantalla.
- `eventos-control.js` → Sistema de sorteos, concursos o promociones.
- `backup-control.js` → Sincronización y respaldo de datos.
- `inventario-control.js` → Gestión de galería, productos o regalos.
- `galeria-control.js` → Visualizador de fotos o contenido multimedia.
- `soporte-control.js` → Módulo de contacto o ayuda.
- `seguridad-control.js` → Detección de capturas, grabaciones o accesos.

---

### Configuración
- `firebase-config.js` → Autenticación, base de datos y almacenamiento.
- `economia-config.js` → Comisiones, porcentajes y reglas del sistema económico.
- `livekit-config.js` → Conexión al servidor WebRTC.
- `ui-elements.css` → Estilos generales (futuristas, glassmorphism).

---

## Flujo General

1. El modelo inicia sesión y accede a `transmitir.html`.
2. Se conecta a la sala LiveKit y transmite en vivo.
3. Los usuarios acceden a `ver-transmision.html`, ven el show y envían tokens.
4. Chat en tiempo real, animaciones, propinas, ranking y metas se actualizan.
5. La IA Melizza asiste en todo momento con voz y texto.
6. Toda la economía queda registrada y auditada.

---

## Dependencias
- LiveKit (transmisión)
- Firebase (base de datos, login)
- OpenAI (IA Melizza)
- Vercel (despliegue)
- CSS personalizado (Glassmorphism, DarkMode, etc.)

---

## Créditos

- Fundador: **David Alejandro Castrillón Díaz**
- Arquitectura: **Livia AI**
- Proyecto: **MedalloVIP**

---

## Próximos pasos

1. Terminar instalación de los módulos base.
2. Implementar `melizza-ai.js`, `tokens-control.js`, `chat-control.js`.
3. Verificar rendimiento, conexión y comportamiento.

---

Este archivo debe llamarse `README.md` y dejarse en la raíz de tu repositorio. ¿Quieres que sigamos ahora con el primer módulo funcional base, como `tokens-control.js` o `melizza-ai.js`? ¿O prefieres empezar por el chat?
