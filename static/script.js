const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");
const sendButton = document.getElementById("sendButton");
const suggestions = document.getElementById("suggestions");

function getTime() {
return new Date().toLocaleTimeString([], {
hour: "2-digit",
minute: "2-digit"
});
}

function addMessage(message, sender) {
const messageElement = document.createElement("div");
messageElement.classList.add("message", `${sender}-message`);


const avatar = document.createElement("div");
avatar.className = "message-avatar";
avatar.textContent = sender === "bot" ? "✦" : "Y";

const content = document.createElement("div");
content.className = "message-content";

if (sender === "bot") {
    const name = document.createElement("div");
    name.className = "message-name";
    name.textContent = "CollegeConnect";
    content.appendChild(name);
}

const bubble = document.createElement("div");
bubble.className = "bubble";

// Use textContent to safely display chatbot responses.
bubble.textContent = message;

const time = document.createElement("span");
time.className = "message-time";
time.textContent = getTime();

content.appendChild(bubble);
content.appendChild(time);

messageElement.appendChild(avatar);
messageElement.appendChild(content);

chatMessages.appendChild(messageElement);
chatMessages.scrollTop = chatMessages.scrollHeight;

return messageElement;


}

function showTyping() {
const typingMessage = document.createElement("div");
typingMessage.className = "message bot-message";
typingMessage.id = "typingMessage";


const avatar = document.createElement("div");
avatar.className = "message-avatar";
avatar.textContent = "✦";

const content = document.createElement("div");
content.className = "message-content";

const name = document.createElement("div");
name.className = "message-name";
name.textContent = "CollegeConnect";

const indicator = document.createElement("div");
indicator.className = "typing-indicator";

for (let i = 0; i < 3; i++) {
    indicator.appendChild(document.createElement("span"));
}

content.appendChild(name);
content.appendChild(indicator);
typingMessage.appendChild(avatar);
typingMessage.appendChild(content);

chatMessages.appendChild(typingMessage);
chatMessages.scrollTop = chatMessages.scrollHeight;


}

async function sendMessage(message) {
const cleanedMessage = message.trim();


if (!cleanedMessage || sendButton.disabled) {
    return;
}

addMessage(cleanedMessage, "user");
userInput.value = "";
suggestions.style.display = "none";
sendButton.disabled = true;
userInput.disabled = true;

showTyping();

try {
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: cleanedMessage
        })
    });

    const data = await response.json();

    document.getElementById("typingMessage")?.remove();

    if (!response.ok) {
        throw new Error(data.response || "Something went wrong.");
    }

    addMessage(
        data.response || "Sorry, I couldn't generate a response.",
        "bot"
    );
} catch (error) {
    document.getElementById("typingMessage")?.remove();

    addMessage(
        "I'm having trouble connecting to the server. Please try again.",
        "bot"
    );

    console.error("Chat request failed:", error);
} finally {
    sendButton.disabled = false;
    userInput.disabled = false;
    userInput.focus();
}


}

chatForm.addEventListener("submit", function (event) {
event.preventDefault();
sendMessage(userInput.value);
});

document.querySelectorAll(".suggestion-chip").forEach((button) => {
button.addEventListener("click", function () {
sendMessage(this.dataset.question || "");
});
});
