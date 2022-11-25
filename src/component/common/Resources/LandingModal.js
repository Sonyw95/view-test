import React from "react";
import styled from "styled-components";
import Button from "./Button";
import kakao from "../../../resources/image/logo/KakaoTalk_logo.png";
import {SocialBlock} from "../../../view/pageResources/Style/LandingFormStyle";

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    background:rgba(0,0,0,0.2);
    z-index:9999;
    

`;

const ModalWrap = styled.div`
    width: 484px;
    height: fit-content;
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    
    @media screen and (max-width: 500px){
        width: 90%;
    }
    .Modal-title{
        margin-top: 40px;
        font-size: .875rem;
        font-weight:700;
        text-align: center;
        position: relative;
        color: black;
    }
    .Modal-title-span{
        margin-top: 10px;
        font-size: .875rem;
        font-weight:700;
        text-align: center;
        position: relative;
        color: rgb(255,99,0);
    }
    
`;

const Contents= styled.div`
    margin: 50px 30px;
    h1{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 60px;
    }
`;


const LandingModal = ( { onClose} ) =>{
    const handleCloe = () => {
        onClose?.();
    };

    return(
        <Overlay>
            <ModalWrap>

                <p className="Modal-title">LABIT는 별도로 이메일인증이 없습니다.</p>
                <p className="Modal-title-span">아래의 소셜계정으로 인증 부탁드립니다.</p>
                <SocialBlock>
                    <p className="line-text">
                        소셜계정으로 인증하기
                    </p>

                    <div className="social-links">
                        <div className="social-link div-kakao">
                            <img className="img-kakao" src={kakao}/>
                        </div>

                        <div className="social-link div-facebook" >
                            <svg className="icon-facebook">
                                <use href="#svg-facebook"></use>
                            </svg>
                        </div>

                        <div className="social-link div-youtube" >
                            <svg className="icon-youtube">
                                <use href="#svg-youtube"></use>
                            </svg>
                        </div>
                    </div>
                </SocialBlock>

                <Contents>
                    <Button onClick={handleCloe}>Close</Button>
                </Contents>

            </ModalWrap>
        </Overlay>
    )
}

export default LandingModal;