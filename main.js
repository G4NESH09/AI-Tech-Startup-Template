document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     TYPING EFFECT (HOME)
  ===================== */
  const typingEl = document.querySelector(".typing");
  const text = "Powering the Future with Artificial Intelligence";
  let i = 0;

  if (typingEl) {
    const typing = () => {
      if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 60);
      }
    };
    typing();
  }

  /* =====================
     ACTIVE NAV LINK
  ===================== */
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "cyan";
    }
  });

  /* =====================
     FAKE AI CHAT LOGIC
  ===================== */
  const sendBtn = document.getElementById("sendBtn");
  const chatInput = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  if (sendBtn && chatInput && chatBox) {

    const fakeReplies = [
      "🤖 I'm a demo AI assistant.",
      "This chatbot is frontend-only for now.",
      "Real AI integration coming soon 🚀",
      "Thanks for trying NeuraX AI!",
      "Ask me anything 😄"
    ];

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", e => {
      if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
      const text = chatInput.value.trim();
      if (!text) return;

      const userMsg = document.createElement("div");
      userMsg.className = "user-msg";
      userMsg.textContent = text;
      chatBox.appendChild(userMsg);

      chatInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;

      setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-msg";
        botMsg.textContent =
          fakeReplies[Math.floor(Math.random() * fakeReplies.length)];
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 700);
    }
  }

});
