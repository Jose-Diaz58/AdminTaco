import { Header } from "../../components/Header";

export function ClienteLayout({ children }) {
  return (
   <div className="min-h-screen bg-gray-100">
  <Header />
  <main className="p-6">
    {children}
  </main>
</div>
  );
}
//esta vaina es seria goku
