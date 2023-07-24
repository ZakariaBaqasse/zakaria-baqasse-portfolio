import { Route, Routes } from "react-router"
import HomePage from "./pages/home"
import NotFound from "./pages/not-found"
import AllProjects from "./pages/all-projects"
import AllExperiences from "./pages/all-experieences"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<AllProjects/>}/>
      <Route path="/experiences" element={<AllExperiences/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
