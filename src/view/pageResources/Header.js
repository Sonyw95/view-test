import {HeaderBlock, HeaderActionBlock, SearchBarBlock} from "./HeaderStyle";
import logo from "../../resources/image/logo/main_logo.png";
import React from "react";
import ProgressBar from "../../component/common/ProgressBar";
import { useSelectClose } from "../../hooks/useSelectClose";
import {Link} from "react-router-dom";
import avatar from "../../resources/image/avatar/24.jpg"

const Header = () => {

    const [dropIsOpen, dropRef, dropHandler] = useSelectClose(false);

    return (
        <HeaderBlock>
            {/*  좌측 로고 및 타이틀 */}
            <HeaderActionBlock>
                <div className="logo">
                    <img className="logo-icon" src={logo} alt={"logo"}/>
                </div>

                <h1 className="header-brand-text">LABIT</h1>
            </HeaderActionBlock>


            {/* 좌측 메뉴 슬라이드 트리거 */}
            <HeaderActionBlock>
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
                </div>
                <div className="next-progress-bar">
                    <ProgressBar backcolor={"#fff"} completed={"30"}/>
                </div>
            </HeaderActionBlock>


            {/* 우측 드롭박스 메뉴바 */}
            <HeaderActionBlock>
                {/* 드롭박스 메뉴 모음 */}
                <div className="dropdown-list">
                    <div className="dropdown-list-item" onClick={dropHandler} ref={dropRef}>
                        <svg className="dropdown-list-icon icon-messages">
                            <use href="#svg-messages"/>
                        </svg>
                    </div>
                </div>

                {/* 드롭박스 팝업창 */}
                <div className={"list-item first" + ( !dropIsOpen? '' : ' drop') }>
                    <div className={"dropdown-box-header"}>
                        <p className={"dropdown-box-header-title"}>알림창</p>
                        <p className={"dropdown-box-header-action"}>전부읽기</p>
                    </div>
                    <div className={"dropdown-box-list"}>
                        <div className={"dropdown-box-list-item"}>
                            <div className={"list-item-notification"}>
                                <Link to="/"><img className={"user-avatar"} src={avatar} alt={"avatar"}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderActionBlock>

        </HeaderBlock>

    )
}

export default Header;