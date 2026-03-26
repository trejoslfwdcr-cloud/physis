import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from './themes.jsx';
import { BrainCircuit, X, Send, Sparkles } from 'lucide-react';

const PhysisAssistant = () => {
  const { theme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  // Estado del flujo conversacional (Memoria de la IA)
  const [chatStep, setChatStep] = useState(0);
  const [currentTopic, setCurrentTopic] = useState(null);

  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Saludos. Soy Physis, tu red neuronal de asistencia. ¿Qué vector de tu vida optimizaremos hoy? (Ej: Dormir, Entrenar, Aprender)' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputValue('');
    setIsTyping(true);

    // Simulador de "Cerebro" (Tiempo de respuesta de 1.5s)
    setTimeout(() => {
      let aiResponse = "";
      const lowerText = userText.toLowerCase();

      // --- LÓGICA DE RAZONAMIENTO MULTI-FASE ---
      
      if (chatStep === 0) {
        // FASE 0: Identificación del problema
        if (lowerText.includes('dormir') || lowerText.includes('sueño') || lowerText.includes('cansado')) {
          setCurrentTopic('sleep');
          setChatStep(1);
          aiResponse = "Entendido. Iniciando diagnóstico de recuperación. Para personalizar el protocolo, dime: ¿Cuántas horas estás durmiendo en promedio cada noche?";
        } else if (lowerText.includes('entrenar') || lowerText.includes('fuerza') || lowerText.includes('ejercicio')) {
          setCurrentTopic('training');
          setChatStep(1);
          aiResponse = "Activando vector de rendimiento físico. ¿Estás experimentando fatiga muscular persistente o buscas aumentar tu hipertrofia?";
        } else if (lowerText.includes('aprender') || lowerText.includes('estudiar') || lowerText.includes('leer')) {
          setCurrentTopic('study');
          setChatStep(1);
          aiResponse = "Calibrando enfoque cognitivo. ¿Sientes que pierdes la concentración rápido o simplemente quieres retener más información?";
        } else {
          aiResponse = "Mi red requiere mayor especificidad. ¿Podrías indicarme si tu objetivo está relacionado con el descanso, el ejercicio físico o el aprendizaje cognitivo?";
        }
      
      } else if (chatStep === 1) {
        // FASE 1: Pregunta de profundización
        if (currentTopic === 'sleep') {
          setChatStep(2);
          aiResponse = "Interesante. El ciclo circadiano es altamente sensible. Última pregunta: ¿Estás expuesto a luz de pantallas (móvil, PC) en la hora previa a acostarte?";
        } else if (currentTopic === 'training') {
          setChatStep(2);
          aiResponse = "Comprendo. La sobrecarga mecánica necesita equilibrio. ¿Cuántos días a la semana estás sometiendo a tu cuerpo a estrés físico?";
        } else if (currentTopic === 'study') {
          setChatStep(2);
          aiResponse = "La neuroplasticidad exige atención plena. ¿Estás haciendo pausas programadas o intentas absorber información de forma continua?";
        }
      
      } else if (chatStep === 2) {
        // FASE 2: Diagnóstico y Resolución final
        if (currentTopic === 'sleep') {
          aiResponse = "Análisis completado. Protocolo recomendado:\n1. Aplica un bloqueo de pantallas 60 min antes de dormir.\n2. Exponte a luz solar 10 min al despertar.\n3. Mantén tu habitación fría.\n\n¿Deseas guardar esto en tus metas de hoy?";
        } else if (currentTopic === 'training') {
          aiResponse = "Análisis completado. Protocolo recomendado:\n1. Aplica el principio de 'Sobrecarga Progresiva'.\n2. Incorpora 48h de descanso por grupo muscular.\n3. Aumenta tu ingesta proteica en tu primera ventana metabólica.\n\n¿Lo añadimos a tu plan de acción?";
        } else if (currentTopic === 'study') {
          aiResponse = "Análisis completado. Protocolo recomendado:\n1. Utiliza ciclos Ultradianos: 90 min de trabajo profundo x 20 min de descanso.\n2. Durante el descanso, evita estímulos dopaminérgicos (no redes sociales).\n\n¿Registramos esta táctica?";
        }
        // Reseteamos la memoria para un nuevo tema
        setChatStep(0);
        setCurrentTopic(null);
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-display">
      
      {/* --- VENTANA DEL CHAT --- */}
      {isOpen && (
        <div className={`mb-4 w-[90vw] sm:w-[26rem] h-[32rem] flex flex-col rounded-3xl border ${theme.borderGlass} ${theme.bgGlass} backdrop-blur-2xl ${theme.shadow} overflow-hidden transition-all duration-500 animate-in slide-in-from-bottom-10 fade-in`}>
          
          {/* Cabecera del Chat */}
          <div className={`p-4 flex justify-between items-center bg-white/10 backdrop-blur-md border-b ${theme.borderGlass}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${theme.accentBg} bg-opacity-20`}>
                <BrainCircuit className={theme.accentText} size={20} />
              </div>
              <div>
                <h3 className={`font-bold ${theme.textPrimary} tracking-widest uppercase text-xs`}>Physis AI Core</h3>
                <p className={`text-[10px] ${theme.textSecondary}`}>Red Neuronal Activa</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className={`${theme.textSecondary} hover:${theme.accentText} transition-colors p-1 rounded-full hover:bg-white/10`}>
              <X size={20} />
            </button>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                  msg.sender === 'user' 
                    ? `${theme.accentBg} text-white rounded-tr-sm` 
                    : `${currentTheme === 'dark' ? 'bg-white/10' : 'bg-white/60'} border ${theme.borderGlass} ${theme.textPrimary} rounded-tl-sm`
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Animación "Escribiendo..." */}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`${currentTheme === 'dark' ? 'bg-white/5' : 'bg-white/50'} border ${theme.borderGlass} rounded-2xl rounded-tl-sm p-4 flex gap-1.5 items-center`}>
                  <span className={`w-2 h-2 ${theme.accentBg} rounded-full animate-bounce`}></span>
                  <span className={`w-2 h-2 ${theme.accentBg} rounded-full animate-bounce`} style={{animationDelay: '0.2s'}}></span>
                  <span className={`w-2 h-2 ${theme.accentBg} rounded-full animate-bounce`} style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input para Escribir */}
          <form onSubmit={handleSend} className={`p-4 border-t ${theme.borderGlass} bg-white/5 backdrop-blur-md`}>
            <div className="relative flex items-center group">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Transmite tu objetivo..."
                className={`w-full bg-white/10 border ${theme.borderGlass} rounded-full py-3.5 pl-5 pr-14 text-sm ${theme.textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/40 transition-all`}
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim() || isTyping}
                className={`absolute right-2 p-2 ${theme.accentBg} text-white rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-md`}
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- BOTÓN FLOTANTE (FAB) --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-500 hover:scale-110 group ${isOpen ? `bg-white ${theme.accentText} border ${theme.borderGlass}` : `${theme.accentBg} text-white`}`}
        title="Conectar con Physis AI"
      >
        {isOpen ? (
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <BrainCircuit size={28} className="group-hover:animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default PhysisAssistant;
