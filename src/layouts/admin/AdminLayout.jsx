import { useState } from "react";
import { MenuAdmin } from "../../components/";

export function AdminLayout({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden text-slate-900">
      <MenuAdmin isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 overflow-y-auto px-4 py-6 lg:px-6">
          {children}
      </main>
    </div>
  );
}