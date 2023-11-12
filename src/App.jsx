import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import ErrorPage from "./Pages/404-Page/404";

function App() {

  return (
   <div>

    <Routes>

      <Route path="/" Component={LandingPage} />

      <Route path="*" Component={ErrorPage} />
      
    </Routes>
    
   </div>
  )
}

export default App
