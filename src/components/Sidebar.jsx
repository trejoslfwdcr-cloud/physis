
import { LayoutDashboard, Users, BookOpen, Settings, LogOut, Heart, Database } from 'lucide-react';

function Sidebar({ rol }) {
  const menuItems = rol === 'admin' 
    ? [
        { name: 'Admin Dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'User Management', icon: <Users size={20} /> },
        { name: 'System Resources', icon: <Database size={20} /> },
        { name: 'Settings', icon: <Settings size={20} /> },
      ]
    : [
        { name: 'My Journey', icon: <Heart size={20} /> },
        { name: 'Resource Library', icon: <BookOpen size={20} /> },
        { name: 'Profile Settings', icon: <Settings size={20} /> },
      ];

  return (
    <aside className="w-64 h-[calc(100vh-64px)] fixed left-0 top-16 bg-white/60 backdrop-blur-xl border-r border-gray-100 flex flex-col justify-between p-6 z-40">
      <div className="space-y-6">
        <div className="px-2">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
            Menu — {rol}
          </p>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="flex items-center gap-4 p-3 rounded-2xl text-gray-500 hover:bg-[#faacd4]/10 hover:text-[#faacd4] transition-all duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-semibold text-sm">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <button className="flex items-center gap-4 p-4 text-gray-400 hover:text-red-400 transition-colors mt-auto font-bold text-sm">
        <LogOut size={20} />
        Sign Out
      </button>
    </aside>
  );
}

export default Sidebar;