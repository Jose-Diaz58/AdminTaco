import { useState } from "react";
import { MenuAdmin, HeaderAdmin } from "../../components/";

export function AdminLayout({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden text-slate-900 print:bg-slate-50 print:h-auto print:overflow-visible">
      <div className="bg-orange-600 text-white">
        <HeaderAdmin toggleSidebar={toggleSidebar}/>
        <div className="print:hidden">
          <MenuAdmin isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </div>
      </div>
      <main className="flex-1 overflow-y-auto px-4 py-6 lg:px-6 print:overflow-visible print:p-8">
          {children}
      </main>
    </div>
  );
}