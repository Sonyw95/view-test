import {LeftSideBarBlock} from "../Style/SideBarStyle";
import {Link} from "react-router-dom";

const LeftSideBar = () =>{
    const menuList = [
        {
            id: 1,
            menu: "NewsFeed",
            icon: "#svg-newsfeed",
            path:"/",
        },
        {
            id: 2,
            menu: "BLOG",
            icon: "#svg-blog-posts",
            path:"/a",
        },
        {
            id: 3,
            menu: "FORUM",
            icon: "#svg-forums",
            path:"/b",
        }
    ]

    function isActive(path){
        return window.location.pathname.startsWith(path);
    }

    return(
        <LeftSideBarBlock>

            <ul className={"menu small"}>

                { menuList.map( (value, index) => (
                    <li className={`menu-item ${isActive(value.path)}` } key={value.id} >
                        <Link to={value.path} className={"menu-item-link"} >
                            <svg className="menu-item-link-icon icon-newsfeed ">
                                <use href={value.icon}/>
                            </svg>
                            <div className={"menu-tooltip"}>
                                <p className="menu-tooltip-text">{value.name}</p>
                            </div>
                        </Link>
                    </li>
                ))}

            </ul>

        </LeftSideBarBlock>
    )

}
export default LeftSideBar;