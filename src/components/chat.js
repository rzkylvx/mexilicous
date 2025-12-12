import gsap from 'gsap';
import { updateHoverTriggers } from './cursor';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export function initChat() {
  const chatWindow = document.getElementById('chatWindow');
  const toggleChat = document.getElementById('toggleChat');
  const closeChat = document.getElementById('closeChat');
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendMessage');
  const chatMessages = document.getElementById('chatMessages');

  if (!chatWindow || !toggleChat) return;

  let isChatOpen = false;

  toggleChat.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      chatWindow.classList.add('open');
      chatWindow.setAttribute('aria-hidden', 'false');
      gsap.to(toggleChat, { scale: 0, duration: 0.2 });
      setTimeout(() => chatInput.focus(), 300);
    }
  });

  closeChat.addEventListener('click', () => {
    isChatOpen = false;
    chatWindow.classList.remove('open');
    chatWindow.setAttribute('aria-hidden', 'true');
    gsap.to(toggleChat, { scale: 1, duration: 0.2 });
  });

  sendButton.addEventListener('click', handleChat);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
  });

  function addMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}`;
    msgDiv.innerHTML = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing-indicator';
    typingDiv.id = 'typing';
    typingDiv.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTyping() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
  }

  async function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';
    showTyping();

    if (!API_KEY) {
      removeTyping();
      addMessage("API Key belum dikonfigurasi. Silakan tambahkan VITE_GEMINI_API_KEY di file .env", 'bot');
      return;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;
    const systemPrompt = "Kamu adalah MexiBot, asisten AI untuk brand Mexilicious (Nachos Instan Premium). Tugasmu HANYA menjawab pertanyaan tentang produk nachos instan kami, varian rasa (Original Raos), cara penyajian (tuang saus keju siap santap), atau keunggulan produk (praktis, halal, tanpa pengawet). Tagline kami adalah 'Nikmatnya Raos'. Jika pengguna bertanya topik lain, arahkan kembali ke Mexilicious dengan gaya santai dan ramah. Jangan gunakan markdown yang rumit.";

    const payload = {
      contents: [{ parts: [{ text }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      removeTyping();

      if (data.candidates && data.candidates[0].content) {
        let reply = data.candidates[0].content.parts[0].text;
        let formattedReply = reply
          .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
          .replace(/^\s*\*\s/gm, '<br>• ')
          .replace(/\*/g, '')
          .replace(/\n/g, '<br>');
        addMessage(formattedReply, 'bot');
      } else {
        addMessage("Maaf, otak MexiBot lagi loading. Coba tanya lagi nanti ya! 🌮", 'bot');
      }
    } catch (error) {
      console.error('Error:', error);
      removeTyping();
      addMessage("Waduh, koneksi ke dapur terputus. Coba lagi ya!", 'bot');
    }
  }

  updateHoverTriggers();
}
