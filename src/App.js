import { Route, Routes } from 'react-router-dom';
import LandingPage from "./view/LandingPage";
import NewsPeedPage from "./view/NewsPeedPage";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {useState} from "react";
import LayOut from "./component/common/LayOut";

const GlobalStyle = createGlobalStyle`
        html{
            background-color: ${(props) => props.theme.globalColor };
            transition: background-color 1s, color 0.1s, border 0.5s;
        }
    `;

function App() {


    const darkColor ={
        globalColor: '#161b28', bgColor:"rgba(60,60,60,0.6)",leftBarColor:"rgba(40,40,40,0.6)",
        inputColor: "rgba(30,30,30,0.6)",  headPgColor: "rgb(255,130,0)",leftLink:"background-color:#293249;box-shadow: 3px 5px 20px 0 rgb(0 0 0 / 12%);"
    };
    const lightColor = {
        globalColor: "#f8f8fb" ,bgColor: 'rgb(255,130,0)',leftBarColor:"#fff",
        inputColor: "rgba(255,90,0,0.5)", headPgColor :"red",leftLink:"background-color:#fff;box-shadow: 3px 5px 20px 0 rgba(94,92,154, .12);"
    }

    const [isDark, setIsDark] = useState(false);

    const [isNormalSide, setIsNormalSide] = useState(true);

    const toggleDarkMode = () => {
        setIsDark( (prev) => !prev);
    };

    const toggleSide = () => {
        setIsNormalSide( (prev) => !prev);
    }


    return (
        <ThemeProvider theme={isDark ? darkColor : lightColor } >
            <GlobalStyle/>
            <Routes>
                <Route element={<LayOut isDark={isDark} toggleDarkMode={toggleDarkMode} isNormalSide={isNormalSide} toggleSide={toggleSide}/>}>
                    <Route path="/" element={<NewsPeedPage isNormalSide={isNormalSide} />}/>
                </Route>
                <Route path="/landing" element={<LandingPage isDark={isDark}/>}/>
            </Routes>
        </ThemeProvider>
    );

}

export default App;
