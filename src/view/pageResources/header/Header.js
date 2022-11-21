import {HeaderBlock, HeaderActionBlock, SearchBarBlock} from "../Style/HeaderStyle";
import logo from "../../../resources/image/logo/main_logo.png";
import darkLogo from "../../../resources/image/logo/main_logo-dark.png";
import React from "react";
import ProgressBar from "../../../component/common/ProgressBar";
import { useSelectClose } from "../../../hooks/useSelectClose";
import {Link} from "react-router-dom";
import avatar from "../../../resources/image/avatar/24.jpg"
import {BsFillSunFill,  BsMoonFill} from "react-icons/bs";
import ButtonM from "../../../component/common/ButtonM";

const Header = ({ isDark, toggleDarkMode}) => {

    const [isNoticeOpen, noticeRef, noticeHandler] = useSelectClose(false);
    const [isMessage, messageRef, messageHandler] = useSelectClose(false);
    const [isSettings, settingRef, settingHandler] = useSelectClose(false);


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
                        <div className="burger-icon-bar"/>
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
                    <div className="dropdown-list-item" onClick={noticeHandler} ref={noticeRef}>
                        <svg className="dropdown-list-icon icon-notification">
                            <use href="#svg-notification"/>
                        </svg>

                        {/* 드롭박스 팝업창 */}
                        <div className={"list-item first" + ( !isNoticeOpen? '' : ' drop') }>
                            <div className={"dropdown-box-header"}>
                                <p className={"dropdown-box-header-title"}>알림창</p>
                                <p className={"dropdown-box-header-action"}>전부읽기</p>
                            </div>
                            <div className={"dropdown-box-list"}>
                                <div className={"dropdown-box-list-item"}>
                                    <div className={"list-item-notification"}>
                                        <Link to="/"><img className={"user-avatar"} src={avatar} alt={"avatar"}/></Link>
                                        <div className={"user-avatar-level"}>
                                            <div className={"user-avatar-border"}>
                                               <span className={"user-level-info"}>4</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="dropdown-list-item alert" onClick={messageHandler} ref={messageRef}>
                        <svg className="dropdown-list-icon icon-messages ">
                            <use href="#svg-messages"/>
                        </svg>
                        {/* 드롭박스 팝업창 */}
                        <div className={"list-item" + ( !isMessage? '' : ' drop') }>
                            <div className={"dropdown-box-header"}>
                                <p className={"dropdown-box-header-title"}>메시지</p>
                                <p className={"dropdown-box-header-action"}>전부읽기</p>
                            </div>
                            <div className={"dropdown-box-list"}>
                                <div className={"dropdown-box-list-item"}>
                                    <div className={"list-item-notification"}>
                                        <Link to="/"><img className={"user-avatar"} src={avatar} alt={"avatar"}/></Link>
                                        <div className={"user-avatar-level"}>
                                            <div className={"user-avatar-border"}>
                                                <span className={"user-level-info"}>4</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-list-item" onClick={() => toggleDarkMode()} >
                        {isDark? <BsFillSunFill size="20" color={"#fff"} className={"darkSwitch"}/> : <BsMoonFill size="20" color="black"/>  }
                    </div>
                </div>

                <div className="dropdown-list-setting" >
                    <div className="header-settings-action" onClick={settingHandler} ref={settingRef}>
                        <svg className="dropdown-list-icon icon-settings">
                            <use href="#svg-settings"/>
                        </svg>
                        <div className={"list-item-setting" + ( !isSettings? '' : ' drop') }>
                            <div className={"user-status"}>
                                <Link to={"/"}><img className={"user-avatar"} src={avatar} alt={"avatar"}/></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </HeaderActionBlock>

            <HeaderActionBlock>
                <Link to={"/landing"} className={"header-login-action"}><ButtonM className="header-login-button">로그인</ButtonM></Link>
            </HeaderActionBlock>

        </HeaderBlock>

    )
}

export default Header;