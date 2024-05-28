const openChatBtn = document.getElementById('boton');
const chatContainer = document.getElementById('text_box1');
const chatInput = document.getElementById('chat1');
const sendBtn = document.getElementById('enviar');
//const chatLog = document.getElementById('log1');

openChatBtn.addEventListener('click', () => {
  chatContainer.style.display = 'block';
});

sendBtn.addEventListener('click', () => {
  const userInput = chatInput.value.trim();
  if (userInput !== '') {
    const message = document.createElement('p');
    message.textContent = userInput;
    //chatLog.appendChild(message);
    chatInput.value = '';
  }
});

chatContainer.addEventListener('click', (e) => {
  if (e.target === chatContainer) {
    chatContainer.style.display = 'none';
  }
});