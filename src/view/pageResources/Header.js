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
            <HeaderActionBlock>

                <div className="logo">
                    <img className="logo-icon" src={logo}/>
                </div>

                <h1 className="header-brand-text">LABIT</h1>

            </HeaderActionBlock>

            <HeaderActionBlock>
                <div className="side-menu-trigger">
                    <svg className="icon-grid">
                        <use href="#svg-grid"></use>
                    </svg>
                </div>
                <div className="mobile-menu-trigger">
                    <div className="burger-icon inverted">
                        <div className="burger-icon-bar"></div>

                        <div className="burger-icon-bar"></div>

                        <div className="burger-icon-bar"></div>
                    </div>
                </div>
            </HeaderActionBlock>


            <SearchBarBlock>
                <div className="header-input-bar">
                    <input type="text" />
                    <div className="header-input-icon">
                        <svg className="input-icon icon-grid">
                            <use href="#svg-magnifying-glass"></use>
                        </svg>
                    </div>
                </div>


            </SearchBarBlock>

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

            <HeaderActionBlock>
                <div className="dropdown-list">
                    <div className="dropdown-list-item" onClick={dropHandler} ref={dropRef}>
                        <svg className="dropdown-list-icon icon-messages">
                            <use href="#svg-messages"/>
                        </svg>

                    </div>
                </div>
                <div className={"list-item first" + ( !dropIsOpen? '' : ' drop') }>
                    <div className={"dropdown-box-header"}>
                        <p className={"dropdown-box-header-title"}>알림창</p>
                        <p className={"dropdown-box-header-action"}>전부읽기</p>
                    </div>
                    <div className={"dropdown-box-list"}>
                        <div className={"dropdown-box-list-item"}>
                            <div className={"list-item-notification"}>
                                <Link to="/"><img className={"user-avatar"} src={avatar}></img></Link>
                            </div>
                        </div>
                    </div>
                </div>



            </HeaderActionBlock>

        </HeaderBlock>

    )
}

export default Header;