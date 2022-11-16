import Header from "../../view/pageResources/header/Header";
import Footer from "../../view/pageResources/footer/Footer";

const LayOut = ({isDark, toggleDarkMode}) => {
    return(
        <>
            <Header isDark={isDark} toggleDarkMode={toggleDarkMode}/>

            <Footer />
        </>
    )
}

export default LayOut;