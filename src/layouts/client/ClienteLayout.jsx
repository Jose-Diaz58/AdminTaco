import { Header } from "../../components";

export function ClienteLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
}
