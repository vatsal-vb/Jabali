import { Routes, Route } from "react-router-dom";
import ComingSoon from "./Pages/Coming-Soon/ComingSoon";
import ErrorPage from "./Pages/404-Page/404";
import NavBar from "./Components/NavBar";
import Landing from "./Pages/LandingPage/Landing";

function App() {

  return (
   <div>

    <NavBar />

    <Routes>

      <Route path="/coming-soon" Component={ComingSoon} />

      <Route path="*" Component={ErrorPage} />
      
      <Route path="/" Component={Landing} />
      
    </Routes>
    
   </div>
  )
}

export default App
