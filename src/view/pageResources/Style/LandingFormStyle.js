import styled, {keyframes} from "styled-components";

export const FormFade = keyframes`
        0%{
            opacity: 0.3;
            transform: translateX(15rem);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
`;

export const FormBlock = styled.div`
    transform: translate (0px, 0px);
    opacity: 1;
    visibility: visible;
    z-index:1;
    position: absolute;
    left: 0px;
    top:50%;
    transition: all 0.6s ease-in-out 0s;

    width: 484px;
    padding: 64px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 0 60px 0 rgb(94 92 154 / 12%);
    position: relative;
    animation: ${FormFade} 0.7s ease-in-out;
    
     &:first-child{
        margin-top: -313px;
    }
    
    @keyframes configure-clockwise {
      0% {
        transform: rotate(0);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes configure-xclockwise {
      0% {
        transform: rotate(45deg);
      }
      25% {
        transform: rotate(-45deg);
      }
      50% {
        transform: rotate(-135deg);
      }
      75% {
        transform: rotate(-225deg);
      }
      100% {
        transform: rotate(-315deg);
      }
    }
    
    .configure-border-1 {
      width: 80px;
      height: 80px;
      padding: 3px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background:white;
      animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
    }
    .configure-border-2 {
      width: 80px;
      height: 80px;
      padding: 3px;
      left: -115px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      transform: rotate(45deg);
      animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
    }
    
    .configure-core {
      width: 100%;
      height: 100%;
      background-color: rgb(255,100,0);
    }
    
    .spinner-box{
        position: absolute;
        top:-5%;
        left: -5%;
    }

    @media screen and (max-width: 1365px){
       &:first-child{
        margin-top: 0;
        margin: 0 auto;
       }
       .spinner-box{
            display:none;
       }
    }
    @media screen and (max-width: 600px){
       width:90%; 
    }
    @media screen and (max-width: 500px){
       padding: 40px 32px; 
    }   
    
`;



export const FormBoxBlock = styled.div`

    .box-title{
        font-size: 1.625rem;
        text-align: center;
    }
    .login-form{
        margin-top:76px;
        width: 100%;
    }
    .form-row{
        position: relative;
    }
    .space-between{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .space-item{
        width: auto;
    }
    .space-item-title{
        color: #adafca;
        font-size: .875rem;
        font-weight: 700;
        line-height: 22px;
    }   
`;

export const SocialBlock = styled.div`
    .line-text{
        margin-top: 40px;
        font-size: .875rem;
        font-weight:700;
        text-align: center;
        position: relative;
        
        &:before{
            left:0;
        }
        &:after{
            right:0;
        }
        &:after, &:before{
            content:"";
            width: 20%;
            height:1px;
            background-color: #eaeaf5;
            position: absolute;
            top:7px;
        }
    
    }
    .social-links{
        margin-top:30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .social-link{
        display:flex;
        justify-content:center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        transition: transform .2s ease-in-out;
        margin-right:12px;
        cursor: pointer;
        &:hover{
            transform: translateY(-4px);
        }
    }
    .div-kakao{
        width: 40px;
        border-radius:10px;
        background-color: orange;
    }
    .div-facebook{
        background-color: #3763d2;
    }
    .div-youtube{
        background-color: #fd434f;
    }
    .img-kakao{
        width:20px;
        display:block;
        margin: 0 auto;
    }
`;



