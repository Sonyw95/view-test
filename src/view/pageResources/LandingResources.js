import styled from "styled-components";

export const LandingBlock = styled.div`
    width:100%;
    height:100%;
    background-color:rgb(255,139,0);
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    
    @media screen and (max-width:1365px){
        padding: 80px 0 100px;
        position: static ;
    }
    
`;


export const LandingDecoBlock = styled.div`
    width: 64%;
    height: 140%;
    border-radius: 50%;
    position: absolute;
    top: -20%;
    right: -32%;
    pointer-event: none;
    background-color: white;
    
    @media screen and (max-width:1500px){
        display:none;
    }
`;



export const LandingInfoBlock = styled.div`
    width: 584px;
    position: absolute;
    top:16%;
    left: 13%;
    
    @media screen and (max-width:1500px){
        left: 6%;
    }
    
    @media screen and (max-width:1365px){
        width:100%;
        position: static;
    }
    
    .logo{
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        
        .logo-icon{
            width:4.5rem;
        }
    }
    
    .pre-title{
        margin-top: 36px;
        font-size: 1.5rem;
        font-weight: 500;
        text-transform: uppercase;
        color: white;
        text-align: center;
    }
    
    .info-title{
        font-size: 6.5rem;
        font-weight: 900;
        position: relative;
        top: -10px;
        
        text-transform: uppercase;
        color: white;
        text-align: center;
        font-family: Titillium Web, sans-serif;
    }
    
    .info-text{
        width: 384px;
        margin: 30px auto 0;
        font-size: 1.125rem;
        line-height: 1.3333333333em;
        font-weight: 500;
        
        color: white;
        text-align: center;
        
        @media screen and (max-width:1500px){
            margin-top: 10px;
        }
        @media screen and (max-width:1365px){
            display: none;
        }
    }
`;

export const LandingTapblock = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 1500px){
        margin-top:40px;
    }
    
    .switch-button{
        width:180px;
        color: white;
        height: 54px;
        border:1px solid #fff;
        font-size: 1rem;
        font-weight: 700;
        line-height: 54px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3x ease-in-out, color 0.3s ease-in-out;
       
    }
    .active{
        background-color: white;
        color: black;
        cursor: auto;
    }
    .switch-button:first-child{
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }
    .switch-button:last-child{
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
    }
`;

export const AuthFormBlock = styled.div`
    width: 484px;
    height:100%;
    position: absolute;
    top: 0;
    right: 13%;
`;