import Header from "../../view/pageResources/header/Header";
import FooterNavi from "../../view/pageResources/footer/FooterNavi";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../../view/pageResources/sidebar/LeftSideBar";

const LayOut = ({isDark, toggleDarkMode, isNormalSide, toggleSide}) => {



    return(
        <>
            <Header isDark={isDark} toggleDarkMode={toggleDarkMode}/>
            <LeftSideBar/>
            <Outlet />
            <FooterNavi />
        </>
    )
}

export default LayOut;