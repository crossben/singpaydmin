import { NavLink } from 'react-router-dom';
import { LayoutGrid, Users, Wallet, FileText, Settings, User } from 'lucide-react';

export function Sidebar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'text-white bg-blue-600' : 'text-gray-400 hover:bg-white/10'}`;

  return (
    <div className="w-64 bg-[#070438] h-100 p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-8">
          {/* Vous pouvez ajouter ici un logo ou un titre */}
        </div>

        <nav className="space-y-2">
          <NavLink to="/" className={navLinkClass}>
            <LayoutGrid size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/clients" className={navLinkClass}>
            <Users size={20} />
            <span>Client</span>
          </NavLink>
          <NavLink to="/portefeuille" className={navLinkClass}>
            <Wallet size={20} />
            <span>Portefeuille</span>
          </NavLink>
          <NavLink to="/transactions" className={navLinkClass}>
            <FileText size={20} />
            <span>Transaction</span>
          </NavLink>
          <NavLink to="/login" className={navLinkClass}>
            <User size={20} />
            <span>Login</span>
          </NavLink>
        </nav>
      </div>
      <NavLink to="/settings" className={`${navLinkClass({ isActive: false })} mt-auto`}>
        <Settings size={20} />
        <span>Settings</span>
      </NavLink>
    </div>
  );
}
