// Chatbot JavaScript

// Create and append styles
const style = document.createElement("style");
style.textContent = `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .canarias-chatbot {
      width: 400px;
      height: 644px;
      border-radius: 20px;
      box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 0 0;
      align-self: stretch;
      position: fixed;
      bottom: 20px;
      right: 0px;
      display: none;
      z-index: 99999;
    }

    .canarias-chatbot-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      padding: var(--size-16, 16px);
      align-self: stretch;
      border-bottom: 2px solid var(--Borders-blue-border, #6f93cc);
      background: var(--Brand-main-color, #3a68b1);
      color: var(--Texts-text-inverted, #fff);
      text-align: center;
      font-family: "Raleway", Sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .canarias-chatbot-header .canarias-chatbot-dots,
    .canarias-chatbot-header .canarias-chatbot-close {
      width: 32px;
      height: 32px;
    }

    .canarias-chatbot-body {
      display: flex;
      padding: 32px var(--size-16, 16px) var(--size-24, 24px)
        var(--size-16, 16px);
      flex-direction: column;
      align-items: center;
      gap: 8px;
      flex: 1 0 0;
      align-self: stretch;
      background: var(--Backgrounds-bg-secondary, #f1f5f9);
      height: 300px;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    .canarias-chatbot-msg {
      display: flex;
      padding: 16px var(--size-16, 16px) var(--size-16, 16px)
        var(--size-16, 16px);
      flex-direction: column;
      align-items: center;
      gap: var(--size-16, 16px);
      align-self: stretch;
      border-radius: 8px;
      border: 1px solid var(--Borders-grey-border, #cbd5e1);
      background: var(--Backgrounds-bg-main, #fff);
    }

    .canarias-chatbot-btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      align-self: stretch;
    }

    .canarias-chatbot-btns button {
      display: flex;
      height: 40px;
      padding: 4px 20px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      align-self: stretch;
      color: var(--Texts-text-inverted, #fff);
      text-align: center;
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 4px;
      background: var(--Brand-main-color, #3a68b1);
      border: 0px;

      cursor: pointer;
    }

    .canarias-chatbot-text {
      color: var(--Texts-text, #33363c);
      text-align: left;
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .canarias-chatbot-text ul{
      padding-left: 20px;
    }

    .canarias-chatbot-text ul li{
      margin-bottom: 8px;
    }

    .canarias-chatbot-img {
      margin-top: -70px;
      text-align: center;
    }
    .canarias-chatbot-initial {
      margin-top: 20px;
      text-align: center;
      padding-top: 40px;
    }

    .canarias-chatbot-initial p {
      text-align: center;
    }

    .canarias-chatbot-input {
      display: flex;
      width: 100%;
      height: 64px;
      padding: 0px 16px;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--Borders-grey-border, #cbd5e1);
      background: var(--Backgrounds-bg-main, #fff);
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    .canarias-chatbot-input input {
      width: 100%;
      height: 95%;
      color: var(--Texts-text, #33363c);
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border: 0px;
      outline: none;
    }

    .canarias-chatbot-text a {
      word-break: break-all;
      color: var(--Texts-text-link, #2a6496);
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
    }

    .canarias-chatbot-close {
      cursor: pointer;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    .canarias-chatbot-overlay {
      position: fixed;
      bottom: 32px;
      right: 32px;
      z-index:9999;
    }

    .canarias-chatbot-overlay-text {
      position: absolute;
      right: 10px;
      bottom: 85px;
      width: 270px;
      display: flex;
      padding: var(--size-16, 16px) 32px var(--size-16, 16px)
        var(--size-16, 16px);
      justify-content: flex-end;
      align-items: flex-start;
      gap: 4px;
      align-self: stretch;
      border-radius: 8px;
      border: 1px solid var(--Borders-grey-border, #cbd5e1);
      background: var(--Backgrounds-bg-main, #fff);
    }

    .canarias-chatbot-desc p {
      color: var(--Backgrounds-bg-brand-light, #33363c);
      -webkit-text-stroke-width: 1;
      -webkit-text-stroke-color: var(--Texts-text, #33363c);
      font-family: "Raleway", Sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .canarias-chatbot-overlay-close {
      position: absolute;
      right: 8px;
      top: 8px;
      cursor: pointer;
    }

    .triangule {
      position: absolute;
      right: 16px;
      bottom: -10px;
    }

    .canarias-chatbot-img {
      cursor: pointer;
    }

    .canarias-chatbot-img img {
      border-radius: 99px;
      border: 1px solid var(--Borders-grey-border, #cbd5e1);
      object-fit: cover;
      width: 64px;
      height: 64px;
    }

    .canarias-chatbot-has-message {
      position: absolute;
      right: 3px;
      bottom: 52px;
      display: flex;
      width: var(--size-16, 16px);
      height: var(--size-16, 16px);
      padding: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      border-radius: 99px;
      background: #c81717;
    }

    .canarias-chatbot-has-message span {
      color: var(--Texts-text-inverted, #fff);
      text-align: center;
      leading-trim: both;
      text-edge: cap;
      font-family: "Raleway", Sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 12px; /* 100% */
    }

    .user-msg p {
      color: var(--Backgrounds-bg-brand-light, #3a68b1);
      -webkit-text-stroke-width: 1;
      -webkit-text-stroke-color: var(--Borders-brand-border, #3a68b1);
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .user-msg {
      border-radius: 8px;
      border: 1px solid var(--Borders-brand-border, #3a68b1);
      background: var(--Backgrounds-bg-brand-light, #e4eaf4);
      position: relative;
    }

    .user-msg::after {
      position: absolute;
      right: -12px;
      bottom: 10px;
    }

    .canarias-chatbot-msg-system-msg {
      display: flex;
      align-items: flex-end;
      gap: var(--size-16, 16px);
      width: 347px;
    }

    .canarias-chatbot-mg-img {
      width: var(--size-24, 24px);
      height: var(--size-24, 24px);
      padding-bottom: 31px;
    }

    .canarias-chatbot-mg-img img {
      width: var(--size-24, 24px);
      height: var(--size-24, 24px);
      border-radius: 99px;
      border: 1px solid var(--Borders-grey-border, #cbd5e1);
    }

    .canarias-chatbot-msg-system-msg .canarias-chatbot-msg {
      position: relative;
    }

    .canarias-chatbot-msg-system-msg .canarias-chatbot-msg::before {
      content: url("https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.0/img/arrow_w.svg");
      left: -11px;
      position: absolute;
      bottom: 5px;
    }

    .canarias-chatbot-slider-track {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      width: 336px;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .canarias-chatbot-slider-item {
      display: flex;
      width: 236px;
      padding: var(--size-16, 16px);
      flex-direction: column;
      align-items: center;
      gap: var(--size-16, 16px);
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid var(--Borders-grey-border, #cbd5e1);
      background: var(--Backgrounds-bg-main, #fff);
    }

    .canarias-chatbot-slider-text h3 {
      color: var(--Texts-text, #33363c);
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize!important;
    }

    .canarias-chatbot-text h3{
        font-size: 20px!important;
        color: #33363c!important;
        text-transform: capitalize!important;
    }

    .canarias-chatbot-slider-text p {
      color: var(--Texts-text, #33363c);
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      align-self: stretch;
      overflow: hidden;
    }

    .canarias-chatbot-slider-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      align-self: stretch;
    }

    .canarias-chatbot-slider-item a {
      display: flex;
      padding: 4px 20px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      align-self: stretch;
      color: var(--Texts-text-inverted, #fff);
      text-align: center;
      font-family: "Raleway", Sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 4px;
      background: var(--Brand-main-color, #3a68b1);
      text-decoration: none;
      height: 40px;
    }

    .canarias-chatbot-slider-item img {
      width: 100%;
      height: 115px;
      border-radius: 4px;
      object-fit: cover;
    }

    .canarias-chatbot-slider-btn{
      border: 0;
      position: absolute;
      right: 20px;
      top: 50%;
      background: no-repeat;
      cursor: pointer;
    }

    .canarias-chatbot-slider-title{
      min-height:40px;
    }

    .canarias-chatbot-slider{
      position: relative;
    }

    .canarias-chatbot-slider-img{
      width: 100%;  
    }

    .canarias-chatbot-input button {
      border: 0;
      cursor: pointer;
      background:none;
    }

    .canarias-chatbot-input svg.recording path {
      fill: #c81717;
    }

    .canarias-chatbot-text audio{
      width:275px;
    }

    .input-recording{
      color: var(--Icons-icon-error, #C21F1F)!important;
      text-align: center!important;
      font-size: 16px!important;
      font-style: normal!important;
      font-weight: 700!important;
      line-height: normal!important;
    }

    @media (min-width: 320px) and (max-width: 480px){
      
     .canarias-chatbot{
        width: 100%;
        height: 500px;
     }

    }
`;
document.head.appendChild(style);

if (!localStorage.getItem("session_id")) {
  localStorage.setItem("session_id", crypto.randomUUID());
}
const session_id = localStorage.getItem("session_id");

async function init() {
  try {
    let idioma = document.documentElement.lang || "spanish";

    if (idioma == "en") {
      idioma = "english";
    } else {
      if (idioma == "it") {
        idioma = "italian";
      } else {
        if (idioma == "fr") {
          idioma = "french";
        } else {
          idioma = "spanish";
        }
      }
    }

    const response = await fetch(
      `https://inboundlabshispanic.com:2000/api/assistant?idioma=${idioma}`
    );
    const data = await response.json();

    let btnsText = "";

    for (var i = 0; i < data.initialSuggestions.length; i++) {
      if (data.initialSuggestions[i].enabled) {
        btnsText =
          btnsText +
          "<button>" +
          data.initialSuggestions[i].value +
          "</button>";
      }
    }

    // Create chatbot HTML structure
    const chatbotHTML =
      `
<div class="canarias-chatbot-overlay">
  <div class="canarias-chatbot-overlay-text">
    <div class="canarias-chatbot-overlay-close">
      <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.0/img/close.svg" alt="close" />
    </div>
    <div class="canarias-chatbot-desc">
      <p>
        ` +
      data.welcomeMessage +
      `
      </p>
    </div>
    <img class="triangule" src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.0/img/arrow_white.svg" alt="arrow" />
  </div>
  <div class="canarias-chatbot-has-message">
    <span>1</span>
  </div>
  <div class="canarias-chatbot-img">
    <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
  </div>
</div>
<div class="canarias-chatbot">
  <div class="canarias-chatbot-header">
    <div class="canarias-chatbot-dots">
    </div>
    <div>Asistente Virtual</div>
    <div class="canarias-chatbot-close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M9.6001 16H22.4001"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <div class="canarias-chatbot-body">
    <div class="canarias-chatbot-msg canarias-chatbot-initial">
      <div class="canarias-chatbot-text">
        <div class="canarias-chatbot-img">
          <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
        </div>
        <p>
           ` +
      data.welcomeMessage +
      `
        </p>
      </div>
      <div class="canarias-chatbot-btns">
       ` +
      btnsText +
      `
      </div>
    </div>
    <div class="canarias-chatbot-msg">
      <div class="canarias-chatbot-text">
        <p>
          ` +
      convertUrlsToLinks(data.privacyAcceptanceMessage) +
      `
        </p>
      </div>
    </div>
  </div>
  <div class="canarias-chatbot-input">
    <input type="text" id="chatbot-input" placeholder="Escribe tu mensaje..." />
    <button id="grabar" onclick="startRecording()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      class="microfono"
    >
      <path
        d="M16.5 21.3333C19.4413 21.3333 21.8333 18.94 21.8333 16V8C21.8333 5.05867 19.4413 2.66667 16.5 2.66667C13.5586 2.66667 11.1666 5.05867 11.1666 8V16C11.1666 18.94 13.5586 21.3333 16.5 21.3333ZM25.8333 16V13.3333C25.8333 12.9797 25.6928 12.6406 25.4428 12.3905C25.1927 12.1405 24.8536 12 24.5 12C24.1463 12 23.8072 12.1405 23.5571 12.3905C23.3071 12.6406 23.1666 12.9797 23.1666 13.3333V16C23.1666 19.676 20.176 22.6667 16.5 22.6667C12.824 22.6667 9.83329 19.676 9.83329 16V13.3333C9.83329 12.9797 9.69282 12.6406 9.44277 12.3905C9.19272 12.1405 8.85358 12 8.49996 12C8.14634 12 7.8072 12.1405 7.55715 12.3905C7.3071 12.6406 7.16663 12.9797 7.16663 13.3333V16C7.16663 20.6933 10.6506 24.576 15.1666 25.2267V26.6667H11.1666C10.813 26.6667 10.4739 26.8071 10.2238 27.0572C9.97377 27.3072 9.83329 27.6464 9.83329 28C9.83329 28.3536 9.97377 28.6928 10.2238 28.9428C10.4739 29.1929 10.813 29.3333 11.1666 29.3333H21.8333C22.1869 29.3333 22.5261 29.1929 22.7761 28.9428C23.0262 28.6928 23.1666 28.3536 23.1666 28C23.1666 27.6464 23.0262 27.3072 22.7761 27.0572C22.5261 26.8071 22.1869 26.6667 21.8333 26.6667H17.8333V25.2267C22.3493 24.576 25.8333 20.6933 25.8333 16Z"
        fill="#3A68B1"
      />
    </svg>
    </button>
  </div>
</div>
`;

    // Append chatbot HTML to body
    document.body.insertAdjacentHTML("beforeend", chatbotHTML);

    // Get DOM elements
    const chatbotOverlay = document.querySelector(".canarias-chatbot-overlay");
    const chatbotText = document.querySelector(
      ".canarias-chatbot-overlay-text"
    );
    const chatbotCloseOverlay = document.querySelector(
      ".canarias-chatbot-overlay-close"
    );
    const chatbot = document.querySelector(".canarias-chatbot");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotClose = document.querySelector(".canarias-chatbot-close");

    const btns = document.querySelectorAll(".canarias-chatbot-btns button");

    btns.forEach((btn, index) => {
      // Ejemplo: agregar un evento click a cada botón
      btn.addEventListener("click", (e) => {
        let query = e.target.textContent.trim();
        if (query) {
          addMessage(query, true);
          chatbotInput.value = "";
          sendMessage(query);
        }
      });
    });

    // Event listener for input
    chatbotInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter" || event.keyCode === 13) {
        const query = chatbotInput.value.trim();
        if (query) {
          addMessage(query, true);
          chatbotInput.value = "";
          sendMessage(query);
        }
      }
    });

    chatbotCloseOverlay.addEventListener("click", function (e) {
      e.stopPropagation();
      chatbotText.style.display = "none";
    });

    // Event listener for chatbot toggle
    chatbotOverlay.addEventListener("click", function () {
      chatbot.style.display =
        chatbot.style.display === "none" || chatbot.style.display === ""
          ? "flex"
          : "none";
    });

    // Event listener for close button
    chatbotClose.addEventListener("click", function () {
      chatbot.style.display = "none";
    });

    loadMessages();
  } catch (error) {
    console.error("Error:", error);
  }
}
init();

let quantityMessages = 1;

let isRecording = false;
let mediaRecorder;
let audioChunks = [];

const convertUrlsToLinks = (text) => {
  // Expresión regular para detectar URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part) => {
    if (part.match(urlRegex)) {
      return (
        "<a href=" +
        part +
        ' target="_blank" rel="noopener noreferrer">' +
        part +
        "</a>"
      );
    }
    return part;
  });
};

let timer; // Variable para el temporizador
let countdown = 15; // Tiempo inicial en segundos

async function startRecording() {
  if (!isRecording) {
    let microfono = document.querySelector(".microfono");
    microfono.classList.add("recording");
    isRecording = true;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    let input_chat = document.querySelector("#chatbot-input");
    input_chat.classList.add("input-recording");
    input_chat.disabled = true;

    // Mostrar "Recording..." y el temporizador
    countdown = 15;
    input_chat.value = `Recording... 0:${
      countdown < 10 ? "0" + countdown : countdown
    }`;

    // Iniciar el temporizador decreciente
    timer = setInterval(() => {
      countdown--;
      input_chat.value = `Recording... 0:${
        countdown < 10 ? "0" + countdown : countdown
      }`;
      if (countdown <= 0) {
        stopRecording(); // Detener la grabación al llegar a 0
      }
    }, 1000);

    // Capturar datos de audio
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      // Limpiar el temporizador
      clearInterval(timer);

      // Crear archivo Blob de audio
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

      // Crear elemento de audio y anexarlo al div
      const audioURL = URL.createObjectURL(audioBlob);
      const audioElement = document.createElement("audio");
      audioElement.src = audioURL;
      audioElement.controls = true;

      const messageDiv = document.createElement("div");
      messageDiv.className = "canarias-chatbot-msg user-msg";

      messageDiv.innerHTML = `
      <div class="canarias-chatbot-msg">
        <div class="canarias-chatbot-text"></div>
      </div>
    `;

      // Seleccionar el contenedor donde irá el reproductor
      const textContainer = messageDiv.querySelector(".canarias-chatbot-text");

      // Agregar el reproductor de audio al contenedor
      textContainer.appendChild(audioElement);

      // Agregar el mensaje al cuerpo del chatbot
      const chatbotBody = document.querySelector(".canarias-chatbot-body");
      chatbotBody.appendChild(messageDiv);
      chatbotBody.scrollTop = chatbotBody.scrollHeight;

      // Enviar archivo al servidor Flask
      sendAudioToServer(audioBlob);

      // Limpiar datos
      audioChunks = [];
    };

    mediaRecorder.start();
  } else {
    stopRecording();
  }
}

function stopRecording() {
  let microfono = document.querySelector(".microfono");
  microfono.classList.remove("recording");
  let input_chat = document.querySelector("#chatbot-input");

  input_chat.disabled = false;
  input_chat.value = "";
  input_chat.classList.remove("input-recording");

  isRecording = false;

  console.log("Deteniendo grabación...");
  mediaRecorder.stop();

  // Limpiar el temporizador si sigue activo
  clearInterval(timer);
}

async function sendAudioToServer(audioBlob) {
  const formData = new FormData();
  formData.append("audio", audioBlob, "recording.wav");
  formData.append("session_id", session_id);

  const storedAudios = JSON.parse(localStorage.getItem("chatbot-msg")) || {
    messages: [],
    timestamp: null,
  };

  const audioBase64Info = await blobToBase64(audioBlob);

  storedAudios.messages.push({
    audio: audioBase64Info,
    isUser: true,
  });

  if (storedAudios.timestamp === null) {
    const timestamp = new Date().getTime();
    storedAudios.timestamp = timestamp;
  }

  localStorage.setItem("chatbot-msg", JSON.stringify(storedAudios));

  let idioma = document.documentElement.lang || "spanish";

  if (idioma == "en") {
    addMessage("Writing a response...", false, true);
  } else {
    if (idioma == "it") {
      addMessage("Scrivendo una risposta...", false, true);
    } else {
      if (idioma == "fr") {
        addMessage("En train d'écrire une réponse...", false, true);
      } else {
        addMessage("Escribiendo respuesta...", false, true);
      }
    }
  }

  const timestamp = new Date().getTime(); // Timestamp actual
  const tenMinutesInMs = 5 * 60 * 1000;

  const storedData = JSON.parse(localStorage.getItem("chatbot-msg"));

  if (
    storedData.timestamp &&
    timestamp - storedData.timestamp > tenMinutesInMs
  ) {
    storedData.quantityMessages = 1;
    quantityMessages = 1;
  } else {
    quantityMessages = storedData.quantityMessages;
    if (quantityMessages == null) quantityMessages = 1;
  }

  try {
    if (quantityMessages <= 20) {
      const response = await fetch(
        "https://inboundlabshispanic.com:4001/audio",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const elementos = document.querySelectorAll(".thinking");
        elementos.forEach((elemento) => elemento.remove());

        const data = await response.json();

        const message = data.message;

        const audioBase64Res = data.audio;

        // Insertar el audio en el contenedor y reproducirlo
        //const audioBlob = await response.blob();

        const audioBlob = base64ToBlob(audioBase64Res, data.mimetype);

        //const audioBase64 = await blobToBase64(audioBase64Res);

        storedAudios.messages.push({
          audio: audioBase64Res,
          message: message,
          isUser: false,
        });

        localStorage.setItem("chatbot-msg", JSON.stringify(storedAudios));

        const storedDataRes = JSON.parse(localStorage.getItem("chatbot-msg"));

        storedDataRes.quantityMessages = quantityMessages + 1;

        localStorage.setItem("chatbot-msg", JSON.stringify(storedDataRes));

        const audioURL = URL.createObjectURL(audioBlob);

        const messageDiv = document.createElement("div");

        messageDiv.className = "canarias-chatbot-msg-system-msg";

        // Crea un elemento <audio> y configúralo
        const audioElement = document.createElement("audio");
        audioElement.src = audioURL;
        audioElement.controls = true; // Habilita los controles (play, pause, etc.)

        messageDiv.innerHTML = `
      <div class="canarias-chatbot-mg-img">
        <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
      </div>
      <div class="canarias-chatbot-msg">
        <div class="canarias-chatbot-text">${message}</div>
      </div>
    `;

        // Seleccionar el contenedor donde irá el reproductor
        const textContainer = messageDiv.querySelector(
          ".canarias-chatbot-text"
        );

        // Agregar el reproductor de audio al contenedor
        textContainer.appendChild(audioElement);

        // Agregar el mensaje al cuerpo del chatbot
        const chatbotBody = document.querySelector(".canarias-chatbot-body");
        chatbotBody.appendChild(messageDiv);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
      } else {
        const elementos = document.querySelectorAll(".thinking");
        elementos.forEach((elemento) => elemento.remove());
        addMessage("Lo siento, hubo un error al procesar tu solicitud.");
      }
    } else {
      addMessage(
        "Lo siento, has excedido el límite de mensajes. Vuelve a intentarlo en unos minutos."
      );
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
}

function base64ToBlob(base64, mimetype) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimetype });
}

// Function to add message to chat
function addMessage(message, isUser = false, thinking = false) {
  const chatbotBody = document.querySelector(".canarias-chatbot-body");
  const messageDiv = document.createElement("div");

  const timestamp = new Date().getTime(); // Timestamp actual
  const storageKey = "chatbot-msg";

  // Comprobar si hay un timestamp en localStorage
  const storedData = JSON.parse(localStorage.getItem(storageKey)) || {
    messages: [],
    timestamp: timestamp,
  };

  messageDiv.className = isUser
    ? "canarias-chatbot-msg user-msg " + (thinking === true ? "thinking" : "")
    : "canarias-chatbot-msg-system-msg " +
      (thinking === true ? "thinking" : "");

  if (thinking) {
    messageDiv.innerHTML = `
      <div class="canarias-chatbot-mg-img">
        <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
      </div>
      <div class="canarias-chatbot-msg">
        <div class="canarias-chatbot-text">
          <p>${message}</p>
        </div>
      </div>
    `;
  } else {
    const elementos = document.querySelectorAll(".thinking");
    elementos.forEach((elemento) => elemento.remove());
    if (isUser) {
      messageDiv.innerHTML = `
        <div class="canarias-chatbot-text">
          <p>${message}</p>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="canarias-chatbot-mg-img">
          <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
        </div>
        <div class="canarias-chatbot-msg">
          <div class="canarias-chatbot-text">
            <p>${message}</p>
            
          </div>
        </div>
      `;
    }
  }

  if (!thinking) {
    storedData.messages.push({ message: message, isUser: isUser });
    if (storedData.timestamp === null) {
      storedData.timestamp = timestamp;
    }
    localStorage.setItem(storageKey, JSON.stringify(storedData));
  }

  chatbotBody.appendChild(messageDiv);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function addMessageLoad(message, isUser = false, thinking = false) {
  const chatbotBody = document.querySelector(".canarias-chatbot-body");
  const messageDiv = document.createElement("div");

  messageDiv.className = isUser
    ? "canarias-chatbot-msg user-msg " + (thinking === true ? "thinking" : "")
    : "canarias-chatbot-msg-system-msg " +
      (thinking === true ? "thinking" : "");

  if (thinking) {
    messageDiv.innerHTML = `
      <div class="canarias-chatbot-mg-img">
        <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
      </div>
      <div class="canarias-chatbot-msg">
        <div class="canarias-chatbot-text">
          <p>${message}</p>
        </div>
      </div>
    `;
  } else {
    const elementos = document.querySelectorAll(".thinking");
    elementos.forEach((elemento) => elemento.remove());
    if (isUser) {
      messageDiv.innerHTML = `
        <div class="canarias-chatbot-text">
          <p>${message}</p>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="canarias-chatbot-mg-img">
          <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
        </div>
        <div class="canarias-chatbot-msg">
          <div class="canarias-chatbot-text">
            <p>${message}</p>
            
          </div>
        </div>
      `;
    }
  }

  chatbotBody.appendChild(messageDiv);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function loadMessages() {
  const storageKey = "chatbot-msg";

  const timestamp = new Date().getTime(); // Timestamp actual
  const tenMinutesInMs = 5 * 60 * 1000;

  const storedData = JSON.parse(localStorage.getItem(storageKey)) || {
    messages: [],
    timestamp: null,
  };

  localStorage.setItem(storageKey, JSON.stringify(storedData));

  if (
    storedData.timestamp &&
    timestamp - storedData.timestamp > tenMinutesInMs
  ) {
    localStorage.removeItem(storageKey); // Limpiar mensajes si pasó el tiempo
    storedData.messages = [];
  } else {
    if (storedData && storedData.messages) {
      storedData.messages.forEach((msgData) => {
        if (msgData.audio) {
          loadStoredAudios(msgData.audio, msgData.message, msgData.isUser);
        } else {
          if (msgData.slider) {
            addSlider(msgData.slider, true, msgData.Boton);
          } else {
            addMessageLoad(msgData.message, msgData.isUser);
          }
        }
      });
    }
  }
}

function loadStoredAudios(audio, message, isUser) {
  const messageDiv = document.createElement("div");

  if (isUser) {
    messageDiv.className = "canarias-chatbot-msg user-msg";

    const audioElement = document.createElement("audio");
    audioElement.src = `data:audio/wav;base64,${audio}`;
    audioElement.controls = true;

    messageDiv.innerHTML = `
    <div class="canarias-chatbot-msg">
      <div class="canarias-chatbot-text"></div>
    </div>
  `;

    // Seleccionar el contenedor donde irá el reproductor
    const textContainer = messageDiv.querySelector(".canarias-chatbot-text");

    // Agregar el reproductor de audio al contenedor
    textContainer.appendChild(audioElement);

    // Agregar el mensaje al cuerpo del chatbot
    const chatbotBody = document.querySelector(".canarias-chatbot-body");
    chatbotBody.appendChild(messageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  } else {
    messageDiv.className = "canarias-chatbot-msg-system-msg";

    const audioElement = document.createElement("audio");
    audioElement.src = `data:audio/wav;base64,${audio}`;
    audioElement.controls = true;

    messageDiv.innerHTML = `
        <div class="canarias-chatbot-mg-img">
          <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
        </div>
        <div class="canarias-chatbot-msg">
          <div class="canarias-chatbot-text">
            <p> ${message}</p>
          </div>
        </div>
      `;

    const textContainer = messageDiv.querySelector(".canarias-chatbot-text");
    textContainer.appendChild(audioElement);

    const chatbotBody = document.querySelector(".canarias-chatbot-body");
    chatbotBody.appendChild(messageDiv);

    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
}

function blobToBase64(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(blob);
  });
}

// Function to add slider to chat

function addSlider(items, loadMessages = false, messageButton = "Ver más") {
  const chatbotBody = document.querySelector(".canarias-chatbot-body");
  const sliderDiv = document.createElement("div");
  sliderDiv.className = "canarias-chatbot-msg-system-msg";
  let itemsHTML = "";

  if (!loadMessages) {
    // Comprobar si hay un timestamp en localStorage
    const storedData = JSON.parse(localStorage.getItem("chatbot-msg")) || {
      messages: [],
      timestamp: timestamp,
    };

    storedData.messages.push({
      slider: items,
      isUser: false,
      Boton: messageButton,
    });

    localStorage.setItem("chatbot-msg", JSON.stringify(storedData));
  }

  let btnHTML =
    '<button class="canarias-chatbot-slider-btn next-btn"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#3A68B1"/> <path d="M23.0955 20.0001L16.191 26.8907C16.1304 26.951 16.0824 27.0226 16.0496 27.1015C16.0169 27.1803 16 27.2649 16 27.3503C16 27.4358 16.0169 27.5203 16.0496 27.5992C16.0824 27.6781 16.1304 27.7497 16.191 27.81C16.445 28.0633 16.8576 28.0633 17.111 27.81L24.4762 20.4595C24.5366 20.3992 24.5846 20.3276 24.6173 20.2488C24.65 20.17 24.6668 20.0855 24.6668 20.0001C24.6668 19.9148 24.65 19.8303 24.6173 19.7515C24.5846 19.6727 24.5366 19.6011 24.4762 19.5408L17.1116 12.1903C16.9894 12.0684 16.8239 12 16.6513 12C16.4787 12 16.3132 12.0684 16.191 12.1903C16.1304 12.2505 16.0824 12.3222 16.0496 12.401C16.0169 12.4799 16 12.5645 16 12.6499C16 12.7353 16.0169 12.8199 16.0496 12.8988C16.0824 12.9777 16.1304 13.0493 16.191 13.1096L23.0955 20.0001Z" fill="white"/></svg></button>';

  items.forEach((item) => {
    itemsHTML += `
        <div class="canarias-chatbot-slider-item">
          <div class="canarias-chatbot-slider-img">
            <img src="${item.imagen}" onerror="this.src='https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.6/img/error.png'" alt="user" />
          </div>
          <div class="canarias-chatbot-slider-text">
            <div class="canarias-chatbot-slider-title">
              <h3>${item.titulo}</h3>
            </div>
            <p>${item.descripcion}</p>
    
          </div>
          <a href="${item.url}" target="_blank">${messageButton}</a>
        </div>
      `;
  });

  if (items.length > 1) {
    sliderDiv.innerHTML = `
    <div class="canarias-chatbot-mg-img">
      <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
    </div>
    <div class="canarias-chatbot-slider">
      <div class="canarias-chatbot-slider-track">
        ${itemsHTML}
      </div>
      ${btnHTML}
    </div>
  `;

    chatbotBody.appendChild(sliderDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;

    // Lógica del movimiento del slider
    const track = sliderDiv.querySelector(".canarias-chatbot-slider-track");
    const nextBtn = sliderDiv.querySelector(".next-btn");
    const itemWidth = track.querySelector(
      ".canarias-chatbot-slider-item"
    ).offsetWidth;

    let currentIndex = 0;

    nextBtn.addEventListener("click", () => {
      const totalItems = items.length;
      currentIndex = (currentIndex + 1) % totalItems; // Mover al siguiente ítem
      const scrollPosition = currentIndex * 236;

      // Animar el slider (puedes usar transform para mayor fluidez)
      track.style.transform = `translateX(-${scrollPosition}px)`;
      track.style.transition = "transform 0.3s ease-in-out";
    });
  } else {
    sliderDiv.innerHTML = `
    <div class="canarias-chatbot-mg-img">
      <img src="https://cdn.jsdelivr.net/gh/lolichess/chatbotcanarias@v1.0.3/img/bot.svg" alt="user" />
    </div>
    <div class="canarias-chatbot-slider">
      <div class="canarias-chatbot-slider-track">
        ${itemsHTML}
      </div>
    </div>
    `;

    chatbotBody.appendChild(sliderDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
}

function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

function cleanJSON(jsonString) {
  return jsonString.replace(/,\s*([\]}])/g, "$1"); // Elimina la coma antes de '}' o ']'
}

// Function to send message to backend
async function sendMessage(query) {
  let idioma = document.documentElement.lang || "spanish";

  if (idioma == "en") {
    addMessage("Writing a response...", false, true);
  } else {
    if (idioma == "it") {
      addMessage("Scrivendo una risposta...", false, true);
    } else {
      if (idioma == "fr") {
        addMessage("En train d'écrire une réponse...", false, true);
      } else {
        addMessage("Escribiendo respuesta...", false, true);
      }
    }
  }

  try {
    const timestamp = new Date().getTime(); // Timestamp actual
    const tenMinutesInMs = 5 * 60 * 1000;

    const storedData = JSON.parse(localStorage.getItem("chatbot-msg"));

    if (storedData) {
      if (
        storedData.timestamp &&
        timestamp - storedData.timestamp > tenMinutesInMs
      ) {
        storedData.quantityMessages = 1;
        quantityMessages = 1;
      } else {
        quantityMessages = storedData.quantityMessages;
        if (quantityMessages == null) quantityMessages = 1;
      }
    } else {
      localStorage.setItem(
        "chatbot-msg",
        JSON.stringify({
          messages: [],
          timestamp: timestamp,
          quantityMessages: 1,
        })
      );

      quantityMessages = 1;
    }

    if (quantityMessages <= 20) {
      const response = await fetch(
        `https://inboundlabshispanic.com:4000/chat?query=${encodeURIComponent(
          query
        )}&session_id=${session_id}`
      );
      const data = await response.json();

      storedData.quantityMessages = quantityMessages + 1;

      localStorage.setItem("chatbot-msg", JSON.stringify(storedData));

      const parsedResponse = data.response;

      if (parsedResponse.formato === "Normal") {
        addMessage(parsedResponse.respuesta);
      } else {
        addMessage(parsedResponse.explicacion);
        if (parsedResponse.formato === "Cards") {
          addSlider(
            parsedResponse.sitios_turisticos,
            false,
            parsedResponse.Boton
          );
        } else {
          addMessage(parsedResponse);
        }
      }
    } else {
      addMessage(
        "Lo siento, has excedido el límite de mensajes. Vuelve a intentarlo en unos minutos."
      );
    }
  } catch (error) {
    console.error("Error:", error);
    addMessage("Lo siento, hubo un error al procesar tu solicitud.");
  }
}
