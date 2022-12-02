import styled from "styled-components";
import {Link} from "react-router-dom";
import {HeaderPopAvatar} from "./UserAvatar";
import {useSelectClose} from "../../../hooks/useSelectClose";

const DropDownListBlock = styled.div`
    position: relative;
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 14px;
    cursor:pointer; 
    transition: transform .2s ease-in-out;
            
    .settings{
        height: 80px;
        display: flex;
        padding: 0 18px;
        position: relative;
    }
    
    svg{
        height: inherit;
        use{
            transform: translate(0, 38%);
        }
    }
`;

const DropDownPopBlock = styled.div`

    background-color: #fff;
    position: absolute;
    top: 64px;
    right: 6px;
    box-shadow: 3px 5px 40px 0 rgb(94 92 154 / 6%);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transform: translate(0px, -20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 999;
   

    ${ (props) => props.place === 'header' && `
        width: 384px;
        padding-bottom: 60px;
    `}
    ${ (props) => props.place === 'setting' && `
        width: 220px;
        padding: 20px 28px;
    `}

    
    
    &.drop{
        opacity: 1 !important;
        visibility:visible !important;
        transform: translateY(0) !important;
    }
`;

const DropDownBoxHeader = styled.div`

    ${ (props) => props.place === 'header' && `
        display:flex;
        justify-content: space-between;
        padding: 28px 28px 20px;
        
        .box-title{
            font-weight: 700;
        }         
    `}
    ${ (props) => props.place === 'setting' && `
        min-height: 44px;
        padding: 2px 0 0 52px;
        position: relative;
        
        .box-title{
            font-weight: 600;
            line-height: 1.4285714286em;
        }
        .box-action{
            margin-top: 4px;
        } 
            
    `}
    
    
    .box-title{
        font-size: .85rem;
    } 
    .box-action{
        margin-right: 16px;
        color: #8f91ac;
        font-size: .65rem;
        font-weight: 700;
        opacity: .6;
        cursor: pointer;
    } 
`;


const DropDownBoxBlock = styled.div`
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    
    
`;
const DropDownBoxList = styled.div`
        display: block;
        padding: 16px 28px;
`;

const DropDownBoxListItem = styled.div`
    min-height: 44px;
    padding: 2px 60px 0 52px;
    position: relative;
`;



const DropBox = (props) => {


    const [isOpen, hasRef, HandlerRemove ] = useSelectClose(false);

    return(
            <DropDownListBlock className={`${props.data.alert} `}  ref={hasRef} >
                <svg className={props.data.icon} onClick={HandlerRemove}>
                    <use href={props.data.svg}/>
                </svg>
                <DropDownPopBlock className={`${isOpen ? "drop" : ""} `}  place={props.data.place}>
                    <DropDownBoxHeader place={props.data.place}>
                        {
                            props.data.place === "setting" && <HeaderPopAvatar src={props.data.profile} place={props.data.place} level={props.data.level}/>
                        }
                        <p className={"box-title"}>
                            {props.data.place === "header" && props.data.title}
                            {props.data.place === "setting" && "Labit 님"}
                        </p>
                        <p className={"box-action"}>
                            {props.data.place === "header" && "전부읽기"}
                            {props.data.place === "setting" && "sonyw32"}
                        </p>
                    </DropDownBoxHeader>

                    <DropDownBoxBlock >
                        <DropDownBoxList>
                            <DropDownBoxListItem>
                                {
                                    props.data.place === "header" && <Link to={"/"}>
                                                                        <HeaderPopAvatar src={props.data.profile} place={props.data.place} level={props.data.level}/>
                                                                    </Link>
                                }
                            </DropDownBoxListItem>
                        </DropDownBoxList>
                    </DropDownBoxBlock>

                </DropDownPopBlock>
            </DropDownListBlock>
    )

}
export default DropBox;