import React, { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Bell,
  Heart,
  CheckCircle,
  Quote,
  X,
  Activity,
  Droplets,
  Coffee,
} from "lucide-react";
import { useTheme } from "./themes.jsx";
import Sidebar from "./Sidebar.jsx";

// Frases motivacionales rotativas
const quotes = [
  "El único modo de hacer un gran trabajo es amar lo que haces.",
  "El crecimiento orgánico lleva tiempo. Sé paciente contigo mismo.",
  "La evolución no es una opción, pero nuestra participación en ella sí.",
  "Un viaje de mil millas comienza con un solo paso.",
];

function UserDash() {
  const { theme } = useTheme();
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  // Cargamos las metas guardadas previamente o iniciamos vacío
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("physis-goals");
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedDate, setSelectedDate] = useState(new Date().getDate()); // Selecciona el día actual por defecto
  const [newGoal, setNewGoal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado de notificaciones simulado
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "¡Felicidades! Has completado tu meta de ayer.",
      read: false,
    },
    { id: 2, text: "Recuerda revisar tus hábitos de la semana.", read: true },
  ]);

  useEffect(() => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // Guardar metas en el almacenamiento local al cambiar
  useEffect(() => {
    localStorage.setItem("physis-goals", JSON.stringify(goals));
  }, [goals]);

  // Generador básico de días para el mes actual (simulado a 30 días)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const handleSaveGoal = () => {
    if (newGoal.trim()) {
      setGoals({ ...goals, [selectedDate]: newGoal });
      setIsModalOpen(false);

      // Dispara una nueva notificación al guardar
      const newNotif = {
        id: Date.now(),
        text: `Nueva meta registrada para el día ${selectedDate}. ¡Tú puedes!`,
        read: false,
      };
      setNotifications([newNotif, ...notifications]);
    }
  };

  return (
    <div
      className={`min-h-screen ${theme.bgBase} flex transition-colors duration-500 font-display overflow-hidden`}
    >
      {/* Menú Lateral */}
      <Sidebar rol="user" />

      <main className="flex-1 ml-64 pt-24 p-8 overflow-y-auto h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Superior - Estilo Dashboard */}
          <header className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <h1
                className={`text-4xl font-black tracking-tight ${theme.textPrimary} transition-colors`}
              >
                Bienvenido de vuelta
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <Quote className={`${theme.accentText} opacity-50`} size={16} />
                <p
                  className={`${theme.textSecondary} italic text-sm transition-colors`}
                >
                  {currentQuote}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setNewGoal(goals[selectedDate] || "");
                  setIsModalOpen(true);
                }}
                className={`${theme.accentBg} text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:opacity-90 transition-opacity`}
              >
                Nueva Actividad
              </button>
            </div>
          </header>

          {/* Sección Superior: Calendario y Gráfico Circular */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Calendario Dinámico */}
            <div
              className={`lg:col-span-2 ${theme.bgGlass} p-6 rounded-xl border ${theme.borderGlass} shadow-sm backdrop-blur-md transition-all`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2
                  className={`text-xl font-bold ${theme.textPrimary} flex items-center gap-2 transition-colors`}
                >
                  <CalendarIcon className={theme.accentText} />
                  Calendario de Metas
                </h2>
                <span
                  className={`text-xs font-bold ${theme.accentText} px-3 py-1 bg-white/20 rounded-full border ${theme.borderGlass}`}
                >
                  Día Seleccionado: {selectedDate}
                </span>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map(
                  (day) => (
                    <div
                      key={day}
                      className={`text-center text-[10px] font-bold uppercase tracking-wider ${theme.textSecondary} mb-2`}
                    >
                      {day}
                    </div>
                  ),
                )}
                <div className="col-span-2"></div>

                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleDayClick(day)}
                    className={`aspect-square p-2 rounded-lg border flex flex-col items-center justify-center relative transition-all hover:scale-105 active:scale-95
                      ${selectedDate === day ? `${theme.accentBg} text-white shadow-md` : `${theme.textPrimary} hover:bg-white/20 border-transparent`}
                      ${goals[day] && selectedDate !== day ? `bg-white/20 ${theme.borderGlass}` : ``}
                    `}
                  >
                    <span className="font-semibold text-sm">{day}</span>
                    {goals[day] && (
                      <div
                        className={`w-1 h-1 rounded-full mt-1 ${selectedDate === day ? "bg-white" : theme.accentBg}`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Gráfico de Progreso (Simulado) */}
            <div
              className={`${theme.bgGlass} p-6 rounded-xl border ${theme.borderGlass} shadow-sm backdrop-blur-md flex flex-col items-center justify-center text-center transition-all`}
            >
              <h2
                className={`text-sm font-bold ${theme.textSecondary} uppercase tracking-widest mb-4`}
              >
                Renovación Diaria
              </h2>
              <div className="relative size-40 mb-4">
                <svg
                  className="size-full -rotate-90"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="stroke-white/20"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeWidth="3"
                  ></circle>
                  <circle
                    className={`${theme.accentText} transition-all duration-1000 ease-in-out`}
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    strokeDasharray="100"
                    strokeDashoffset={goals[selectedDate] ? "20" : "80"}
                    strokeLinecap="round"
                    strokeWidth="3"
                    style={{ stroke: "currentColor" }}
                  ></circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <Droplets className={`${theme.accentText} mb-1`} size={20} />
                  <span className={`text-2xl font-black ${theme.textPrimary}`}>
                    {goals[selectedDate] ? "80%" : "20%"}
                  </span>
                </div>
              </div>
              <p className={`text-sm font-medium ${theme.textPrimary}`}>
                {goals[selectedDate] ? "Casi lo logras" : "Comienza tu día"}
              </p>
            </div>
          </section>

          {/* Sección Inferior: Plan de Acción y Notificaciones */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Plan de Acción del Día */}
            <div
              className={`${theme.bgGlass} p-6 rounded-xl border ${theme.borderGlass} shadow-sm backdrop-blur-md transition-all`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-bold ${theme.textPrimary}`}>
                  Plan de Acción (Día {selectedDate})
                </h2>
              </div>
              <div className="space-y-4">
                {goals[selectedDate] ? (
                  <div
                    className={`flex items-center gap-4 p-4 bg-white/10 dark:bg-zinc-800/50 rounded-lg border ${theme.borderGlass}`}
                  >
                    <div
                      className={`size-10 rounded-full bg-white/20 flex items-center justify-center ${theme.accentText}`}
                    >
                      <Activity size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-sm ${theme.textPrimary}`}>
                        Meta Principal
                      </h3>
                      <p className={`text-xs ${theme.textSecondary}`}>
                        {goals[selectedDate]}
                      </p>
                    </div>
                    <CheckCircle className="text-emerald-400" size={24} />
                  </div>
                ) : (
                  <div
                    className={`text-center py-8 border-2 border-dashed ${theme.borderGlass} rounded-xl`}
                  >
                    <Coffee
                      className={`mx-auto mb-3 ${theme.textSecondary} opacity-50`}
                      size={32}
                    />
                    <p className={`text-sm ${theme.textSecondary}`}>
                      No tienes actividades registradas para este día.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Panel de Notificaciones */}
            <div
              className={`${theme.bgGlass} p-6 rounded-xl border ${theme.borderGlass} shadow-sm backdrop-blur-md flex flex-col h-80 transition-all`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2
                  className={`text-xl font-bold ${theme.textPrimary} flex items-center gap-2 transition-colors`}
                >
                  <Bell className={theme.accentText} />
                  Alertas
                </h2>
                <span
                  className={`${theme.accentBg} text-white text-xs font-bold px-2 py-1 rounded-full`}
                >
                  {notifications.filter((n) => !n.read).length} nuevas
                </span>
              </div>

              <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 rounded-lg border ${theme.borderGlass} flex gap-4 items-start transition-all ${notif.read ? "opacity-60 bg-transparent" : "bg-white/20 shadow-sm"}`}
                  >
                    <div
                      className={`mt-0.5 ${notif.read ? theme.textSecondary : theme.accentText}`}
                    >
                      {notif.read ? (
                        <CheckCircle size={16} />
                      ) : (
                        <Heart size={16} />
                      )}
                    </div>
                    <p
                      className={`text-sm ${theme.textPrimary} font-medium leading-relaxed`}
                    >
                      {notif.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal / Pop-up para ingresar la meta */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm transition-opacity">
          <div
            className={`w-full max-w-md p-8 rounded-3xl ${theme.bgBase} border ${theme.borderGlass} shadow-2xl`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>
                Actividad del día {selectedDate}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`${theme.textSecondary} hover:${theme.accentText} transition-colors`}
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <textarea
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Escribe tu meta o intención para este día..."
                className={`w-full p-4 rounded-xl bg-white/10 border ${theme.borderGlass} ${theme.textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faacd4]/40 transition-all resize-none h-32`}
              />
              <button
                onClick={handleSaveGoal}
                className={`w-full py-4 rounded-xl font-bold text-white ${theme.accentBg} ${theme.accentHover} shadow-lg transition-all hover:-translate-y-1 active:translate-y-0`}
              >
                {goals[selectedDate] ? "Actualizar Meta" : "Guardar Meta"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDash;
