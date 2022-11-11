import { Route, Routes } from 'react-router-dom';
import LoginPage from "./view/LoginPage";
import LandingPage from "./view/LandingPage";

function App() {
  return (
      <Routes>
          <Route path="/landing" element={<LandingPage/>}/>
      </Routes>
  );
}

export default App;
