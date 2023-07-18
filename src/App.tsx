import { Route, Routes } from "react-router"
import HomePage from "./pages/home"
import NotFound from "./pages/not-found"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
