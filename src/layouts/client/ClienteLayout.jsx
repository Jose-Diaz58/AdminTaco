import { Header } from "../../components";

export function ClienteLayout({ children }) {
  return (
   <div className="min-h-screen w-full bg-gray-50 flex flex-col">
  <Header />
  <main className="flex-1 p-4 md:p-8">
    {children}
  </main>
</div>
  );
}
