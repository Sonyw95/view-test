import styled from "styled-components";
import {Link} from "react-router-dom";
import {HeaderPopAvatar} from "./UserAvatar";

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
`;

const DropDownPopBlock = styled.div`
    background-color: #fff;
    position: absolute;
    top: 64px;
    right: 6px;
    width: 384px;
    box-shadow: 3px 5px 40px 0 rgb(94 92 154 / 6%);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transform: translate(0px, -20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 999;
    padding-bottom: 60px;
`;

const DropDownBoxHeader = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 28px 28px 20px;
    
    .box-title{
        font-size: .85rem;
        font-weight: 700;
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
    
    .drop{
        opacity: 1 !important;
        visibility:visible !important;
        transform: translateY(0) !important;
    }
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


    return(
        <DropDownListBlock className={props.data.alert}>
            <svg className={props.data.icon} >
                <use href={props.data.svg}/>
            </svg>
        <DropDownPopBlock>
            <DropDownBoxHeader>
                <p className={"box-title"}>{props.data.title}</p>
                <p className={"box-action"}>전부읽기</p>
            </DropDownBoxHeader>

            <DropDownBoxBlock>
                <DropDownBoxList>
                    <DropDownBoxListItem>
                        <Link to={"/"}>
                            <HeaderPopAvatar src={props.data.profile} place={props.data.place} level={props.data.level}/>
                        </Link>
                    </DropDownBoxListItem>
                </DropDownBoxList>
            </DropDownBoxBlock>

        </DropDownPopBlock>


        </DropDownListBlock>
    )

}
export default DropBox;