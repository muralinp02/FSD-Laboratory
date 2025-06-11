function sendMessage() {
    const input = document.getElementById("user-message");
    if (input.value.trim()) {
        document.getElementById("chat-box").innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
        input.value = "";
    }
}
