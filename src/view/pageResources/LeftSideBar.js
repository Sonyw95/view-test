import {LeftSideBarBlock} from "./Style/SideBarStyle";
import {Link} from "react-router-dom";
import avatar from "../../resources/image/avatar/24.jpg";

const LeftSideBar = () =>{

    return(
        <LeftSideBarBlock>
            <Link to={"/"} ><img className={"user-avatar"} src={avatar} alt={"avatar"}/></Link>

            <ul className={"menu small"}>
                <li className={"menu-item active"}>
                    <Link to={"/"} className={"menu-item-link"}>
                        <svg className="menu-item-link-icon icon-newsfeed ">
                            <use href="#svg-newsfeed"/>
                        </svg>
                    </Link>

                </li>
            </ul>

        </LeftSideBarBlock>
    )

}
export default LeftSideBar;