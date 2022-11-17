import Header from "../../view/pageResources/header/Header";
import FooterNavi from "../../view/pageResources/footer/FooterNavi";

const LayOut = ({isDark, toggleDarkMode}) => {
    return(
        <>
            <Header isDark={isDark} toggleDarkMode={toggleDarkMode}/>

            <FooterNavi />
        </>
    )
}

export default LayOut;