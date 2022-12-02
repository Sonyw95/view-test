import {HeaderBlock, HeaderActionBlock, SearchBarBlock} from "../Style/HeaderStyle";
import logo from "../../../resources/image/logo/main_logo.png";
import darkLogo from "../../../resources/image/logo/main_logo-dark.png";
import ProgressBar from "../../../component/common/Resources/ProgressBar";
import {Link} from "react-router-dom";
import {ButtonComponent, DropBoxComponent, ToggleSwitchComponent} from "../../../component/common/IndexComponent";

const Header = ({ isDark, toggleDarkMode, dropDownList }) => {

    return (
        <HeaderBlock>
            {/*  좌측 로고 및 타이틀 */}
            <HeaderActionBlock>
                <div className="logo">
                    <img className="logo-icon" src={isDark?  darkLogo : logo} alt={"logo"}/>
                </div>

                <h1 className="header-brand-text">LABIT</h1>

                {/* PC 슬라이드 메뉴 트리거 */}
                <div className="side-menu-trigger">
                    <svg className="icon-grid">
                        <use href="#svg-grid"/>
                    </svg>
                </div>
                {/* Mobile 슬라이드 메뉴 트리거 */}
                <div className="mobile-menu-trigger">
                    <div className="burger-icon inverted">
                        <div className="burger-icon-bar"/>
                    </div>
                </div>
            </HeaderActionBlock>

            {/* 중앙 검색 바*/}
            <SearchBarBlock>
                <div className="header-input-bar">
                    <input type="text" />
                    <div className="header-input-icon">
                        <svg className="input-icon icon-grid">
                            <use href="#svg-magnifying-glass"/>
                        </svg>
                    </div>
                </div>
            </SearchBarBlock>


            {/* 중앙 사용자 살태바 */}
            <HeaderActionBlock>
                <div className="next-progress">
                    <div className="bar-progress">
                        <p className="bar-progress-text">Next: <span/> <span> 30exp</span></p>
                    </div>
                    <div className="next-progress-bar">
                        <ProgressBar completed={"30"}/>
                    </div>
                </div>
            </HeaderActionBlock>


            {/* 우측 드롭박스 메뉴바 */}
            <HeaderActionBlock>
                {/* 드롭박스 메뉴 모음 */}
                <div className="dropdown-list">
                    {dropDownList.map( (key,index)=>(
                        <DropBoxComponent data={key} key={index} />
                    ))}
                </div>
            </HeaderActionBlock>

            <HeaderActionBlock>
                <ToggleSwitchComponent onClick={toggleDarkMode}/>
            </HeaderActionBlock>

            <HeaderActionBlock>
                <Link to={"/landing"} className={"header-login-action"}><ButtonComponent >로그인</ButtonComponent></Link>
            </HeaderActionBlock>

        </HeaderBlock>

    )
}

export default Header;