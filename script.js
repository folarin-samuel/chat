const messageInput = document.getElementById('message-input');
const sendMessageButton = document.getElementById('send-message');
const messageTemplate = document.getElementById('message-template');
const chatMessages = document.getElementById('chat-messages');

sendMessageButton.addEventListener('click', () => {
	const messageText = messageInput.value.trim();
	if (messageText) {
		const messageHTML = messageTemplate.cloneNode(true);
		messageHTML.querySelector('.username').textContent = 'You';
		messageHTML.querySelector('.message-text').textContent = messageText;
		chatMessages.appendChild(messageHTML);
		messageInput.value = '';
	}
});

console.log("connected");

