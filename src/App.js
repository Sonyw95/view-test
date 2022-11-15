import { Route, Routes } from 'react-router-dom';
import LandingPage from "./view/LandingPage";
import Header from "./view/pageResources/Header";
import NewsPeedPage from "./view/NewsPeedPage";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {useState} from "react";

function App() {

    const GlobalStyle = createGlobalStyle`
        html{
            background-color: ${(props) => props.theme.globalColor };
        }
    `;
    const darkColor ={
        globalColor: '#161b28', bgColor:"rgba(60,60,60,0.6)",
        inputColor: "rgba(30,30,30,0.6)"
    };
    const lightColor = {
        globalColor: "#fff" ,bgColor: 'rgb(255,130,0)',
        inputColor: "rgba(255,90,0,0.5)"
    }

    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = () => {
        setIsDark( (prev) => !prev);
    };


  return (
      <ThemeProvider theme={isDark ? darkColor : lightColor } >
          <GlobalStyle/>
          <Routes>
              <Route element={<Header isDark={isDark} toggleDarkMode={toggleDarkMode}/>}>
                  <Route path="/" element={<NewsPeedPage/>}/>
              </Route>
              <Route path="/landing" element={<LandingPage/>}/>
          </Routes>
      </ThemeProvider>
  );

}

export default App;
