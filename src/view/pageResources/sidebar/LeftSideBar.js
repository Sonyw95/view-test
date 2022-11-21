import {LeftSideBarBlock} from "../Style/SideBarStyle";
import {Link} from "react-router-dom";

const LeftSideBar = () =>{

    return(
        <LeftSideBarBlock>

            <ul className={"menu small"}>
                <li className={"menu-item active"}>
                    <Link to={"/"} className={"menu-item-link"}>
                        <svg className="menu-item-link-icon icon-newsfeed ">
                            <use href="#svg-newsfeed"/>
                        </svg>
                        <div className={"menu-tooltip"}>
                            <p className="menu-tooltip-text">Newsfeed</p>
                        </div>
                    </Link>
                </li>

                <li className={"menu-item"}>
                    <Link to={"/"} className={"menu-item-link"}>
                        <svg className="menu-item-link-icon icon-blog-posts ">
                            <use href="#svg-blog-posts"/>
                        </svg>
                        <div className={"menu-tooltip"}>
                            <p className="menu-tooltip-text">BLOG</p>
                        </div>
                    </Link>
                </li>

                <li className={"menu-item"}>
                    <Link to={"/"} className={"menu-item-link"}>
                        <svg className="menu-item-link-icon icon-forums ">
                            <use href="#svg-forums"/>
                        </svg>
                        <div className={"menu-tooltip"}>
                            <p className="menu-tooltip-text">FORUM</p>
                        </div>
                    </Link>
                </li>


            </ul>

        </LeftSideBarBlock>
    )

}
export default LeftSideBar;