import { Route, Routes } from "react-router"
import HomePage from "./pages/home"
import NotFound from "./pages/not-found"
import AllProjects from "./pages/all-projects"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<AllProjects/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
