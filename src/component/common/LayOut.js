import Header from "../../view/pageResources/header/Header";
import FooterNavi from "../../view/pageResources/footer/FooterNavi";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../../view/pageResources/sidebar/LeftSideBar";
import avatar from "../../resources/image/avatar/24.jpg";

const LayOut = ({isDark, toggleDarkMode, isNormalSide, toggleSide}) => {

    /* 나중에 데이터로 받을 거임 */
    const dropDownList =[
        {
            icon: "icon-notification",
            svg: "#svg-notification",
            title: "알림",
            profile: avatar,
            place: "header",
            level:"4",
            alert:"alert",
            drop:""
        },
        {
            icon: "icon-messages",
            svg: "#svg-messages",
            title: "메시지",
            profile: avatar,
            place: "header",
            level:"4",
            alert:"",
            drop:""
        },
        {
            icon: "icon-settings",
            svg: "#svg-settings",
            title: "안내",
            profile: avatar,
            place: "header",
            level:"4",
            alert:"",
            drop:""
        }
    ];

    return(
        <>
            <Header isDark={isDark} toggleDarkMode={toggleDarkMode} dropDownList={dropDownList} />
            <LeftSideBar/>
            <Outlet />
            <FooterNavi dropDownList={dropDownList} />
        </>
    )
}

export default LayOut;