import {LeftSideBarBlock} from "../Style/SideBarStyle";
import {Link} from "react-router-dom";

const LeftSideBar = () =>{
    const menuList = [
        ["NewsFeed", "#svg-newsfeed", "active"],
        ["BLOG", "#svg-blog-posts",""],
        ["FORUM", "#svg-forums", ""],
    ]

    return(
        <LeftSideBarBlock>

            <ul className={"menu small"}>

                { menuList.map( (x) => (
                <li className={"menu-item active " + x[2]}>
                    <Link to={"/"} className={"menu-item-link"}>
                        <svg className="menu-item-link-icon icon-newsfeed ">
                            <use href={x[1]}/>
                        </svg>
                        <div className={"menu-tooltip"}>
                            <p className="menu-tooltip-text">{x[0]}</p>
                        </div>
                    </Link>
                </li>
                ))}

            </ul>

        </LeftSideBarBlock>
    )

}
export default LeftSideBar;