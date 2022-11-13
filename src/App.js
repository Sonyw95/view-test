import { Route, Routes } from 'react-router-dom';
import LandingPage from "./view/LandingPage";
import Header from "./view/pageResources/Header";
import NewsPeedPage from "./view/NewsPeedPage";

function App() {
  return (
      <Routes>
          <Route element={<Header/>}>
            <Route path="/" element={<NewsPeedPage/>}/>
          </Route>
          <Route path="/landing" element={<LandingPage/>}/>
      </Routes>
  );
}

export default App;
