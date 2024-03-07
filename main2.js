// Simple array to store chat messages
let chatMessages = [];

function displayMessages() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";

    chatMessages.forEach(message => {
        const div = document.createElement("div");
        div.innerText = message;
        chatBox.appendChild(div);
    });

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const inputElement = document.getElementById("message-input");
    const message = inputElement.value.trim();

    if (message !== "") {
        chatMessages.push(message);
        inputElement.value = "";
        displayMessages();
    }
}

// Initial display
displayMessages();
