import { BrowserRouter } from "react-router"
import Routes from "./routes/Rutas"

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
    </div>
  )
}

export default App