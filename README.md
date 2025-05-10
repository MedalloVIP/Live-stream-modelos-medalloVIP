# Live-stream-modelos-medalloVIP
Plataforma de trasmisiones en vivo 
# MedalloVIP - Plataforma de Streaming y Economía Digital

## Descripción General
**MedalloVIP** es una plataforma de entretenimiento en vivo de última generación. Combina transmisiones en tiempo real, interacción con inteligencia artificial, economía tokenizada y una arquitectura modular diseñada para escalabilidad, rendimiento y seguridad.  
Ideal para modelos, usuarios y administradores dentro de un ecosistema interactivo, moderno y autónomo.

---

## Arquitectura del Proyecto

### HTML (Interfaz)
- `transmitir.html` – Vista del modelo para emitir en vivo.
- `ver-transmision.html` – Sala del usuario para ver transmisiones.
- `chat.html` – Módulo de chat independiente o incrustable.
- `perfil.html` – Vista del perfil editable por el usuario o modelo.

---

### JavaScript (Módulos Funcionales)

#### Núcleo
- `transmision-control.js` – Inicia/detiene stream, conecta con LiveKit.
- `firebase-config.js` – Autenticación y base de datos en tiempo real.
- `livekit-config.js` – Conexión WebRTC a salas privadas.

#### Interacción y Comunicación
- `chat-control.js` – Envío, recepción y moderación del chat en vivo.
- `c2c-control.js` – Activación de cámara del cliente (modo privado).
- `melizza-ai.js` – Asistente con IA: voz, texto, compañía y guía.

#### Audio / Visual
- `audio-control.js` – Silenciar, activar o cambiar dispositivos.
- `velocidad-control.js` – Monitoreo de conexión del usuario.
- `resolucion-control.js` – Detección y visualización de calidad de stream.
- `modo-control.js` – Alternancia entre modo oscuro / claro.

#### Economía y Tokens
- `tokens-control.js` – Gestión de tokens, propinas y saldos.
- `historial-tokens.js` – Registro de envíos y retiros.
- `economia-config.js` – Configuración de reglas y comisiones.

#### Engagement y Comunidad
- `ranking-control.js` – Clasificaciones en tiempo real.
- `reacciones-control.js` – Animaciones y efectos visuales.
- `metas-control.js` – Visualización de objetivos y progreso.
- `clubfans-control.js` – Suscripciones premium y beneficios.
- `rewards-control.js` – Bonificaciones y premios por actividad.
- `reportes-control.js` – Sistema de alertas y reclamos.
- `moderacion-control.js` – Moderadores, baneo y filtrado.

#### Automatización e IA
- `bots-chat-control.js` – Mensajes automáticos, comandos y alertas.
- `traduccion-control.js` – Traducción automática del chat.
- `notificaciones-control.js` – Alertas visuales y de sistema.

#### Administración
- `perfil-control.js` – Edición de datos, imagen, biografía.
- `seguridad-control.js` – Captura de intentos maliciosos o grabación.
- `backup-control.js` – Respaldos automáticos.
- `configuracion-control.js` – Preferencias, ajustes y entorno.

#### Extras y UX
- `galeria-control.js` – Visualización de contenido multimedia.
- `inventario-control.js` – Control de productos o regalos virtuales.
- `eventos-control.js` – Gestión de sorteos, promociones, shows especiales.
- `soporte-control.js` – Módulo de ayuda y contacto con soporte.
- `marketing-control.js` – Referidos, promociones, banners.
- `analytics-control.js` – Estadísticas internas.
- `integraciones-control.js` – API externas, pagos, herramientas de terceros.
- `verificacion-control.js` – Verificación de identidad de modelos/usuarios.
- `medallas-control.js` – Sistema de logros y recompensas visuales.
- `logs-control.js` – Registro de actividad y errores del sistema.

---

### CSS y Diseño

- `ui-elements.css` – Componentes visuales, glassmorphism y neon style.

---

## Flujo General

1. El modelo accede a `transmitir.html` y comienza a emitir.
2. Usuarios acceden a `ver-transmision.html` y participan con tokens, chat y C2C.
3. La IA Melizza guía al usuario, modera el chat y personaliza la experiencia.
4. El sistema actualiza metas, rankings, historial y economía en tiempo real.
5. Toda interacción queda registrada para respaldo, estadísticas y seguridad.

---

## Dependencias Técnicas

- [LiveKit](https://livekit.io/) – WebRTC en tiempo real.
- [Firebase](https://firebase.google.com/) – Login, base de datos, almacenamiento.
- [OpenAI](https://openai.com/) – Asistente Melizza (voz/texto).
- [Vercel](https://vercel.com/) – Deploy instantáneo y escalable.
- Custom CSS – Glassmorphism, neon UI, dark/light modes.

---

## Créditos

- **Fundador:** David Alejandro Castrillón Díaz  
- **Arquitectura & IA:** Livia  
- **Proyecto:** MedalloVIP  
- **Ubicación del repositorio:** [Repositorio oficial en GitHub]

---

## Próximos pasos

1. Activar `firebase-config.js`, `livekit-config.js` y `melizza-ai.js`.
2. Iniciar la integración de módulos por orden funcional: audio → transmisión → tokens → chat.
3. Testeo cruzado y pruebas de carga.
4. Escalamiento y marketing global.

---

## Licencia

Proyecto privado y registrado. Prohibida su copia, reproducción o comercialización sin autorización de los fundadores.
