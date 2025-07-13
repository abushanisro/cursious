import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey 👋 I'm Cursious. What's your name?" },
  ]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [stage, setStage] = useState(0);
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  const API_KEY = ''; // Securely store in production
  const MODEL = 'google/gemma-3n-e2b-it:free';
  const calendlyLink = 'https://calendly.com/cursious-ai/30min';

  const leadQuestions = [
    'What kind of business do you run? (e.g., service-based, e-commerce)?',
    'What’s your biggest challenge right now?',
    'What’s your budget for automation or AI tools?',
    'How big is your team? (Solo, 2–10, 10+)?',
  ];

  const containsBookingIntent = (text) => {
    const keywords = ['book', 'meeting', 'call', 'schedule', 'appointment', 'connect'];
    return keywords.some((word) => text.toLowerCase().includes(word));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    if (containsBookingIntent(trimmed)) {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: `You can book a call here:\n${calendlyLink}` },
      ]);
      setLoading(false);
      return;
    }

    if (stage === 0 && !userName) {
      setUserName(trimmed);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: `Nice to meet you, ${trimmed}!` },
        { role: 'assistant', content: leadQuestions[0] },
      ]);
      setStage(1);
      setLoading(false);
      return;
    }

    if (stage > 0 && stage < leadQuestions.length) {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: leadQuestions[stage] },
      ]);
      setStage(stage + 1);
      setLoading(false);
      return;
    }

    if (stage >= leadQuestions.length) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: `Thanks for sharing, ${userName}. You can book a free 30-min strategy call here:\n${calendlyLink}`,
        },
      ]);
      setStage(stage + 1);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: MODEL,
          messages: newMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://your-site.com',
            'X-Title': 'CursiousAI',
          },
        }
      );

      const aiReply = response.data.choices?.[0]?.message?.content || 'I’m here to help!';
      setMessages([...newMessages, { role: 'assistant', content: aiReply }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: 'assistant', content: 'Error. Try again later.' }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="w-full max-w-sm bg-white border border-orange-300 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-4 max-h-96 overflow-y-auto">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block px-4 py-2 rounded-xl max-w-[80%] text-sm ${
                      msg.role === 'user'
                        ? 'bg-orange-500 text-white'
                        : 'bg-orange-100 text-gray-800'
                    }`}
                  >
                    {msg.content.includes('calendly.com') ? (
                      <a
                        href={calendlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 underline"
                      >
                        Book a call
                      </a>
                    ) : (
                      msg.content
                    )}
                  </div>
                </motion.div>
              ))}
              {loading && <p className="text-sm text-gray-400">Cursious is typing...</p>}
            </div>
            <div className="flex border-t border-orange-200 p-2">
              <input
                className="flex-1 text-sm border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={input}
                placeholder="Type a message..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-orange-500 shadow-lg flex items-center justify-center hover:bg-orange-600 transition-all"
      >
        <span className="text-white text-xl">💬</span>
      </motion.button>
    </div>
  );
};

export default ChatBot;
