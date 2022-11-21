import styled from "styled-components";

export const ContentBlock = styled.div`
    
    max-width: 1184px;
    padding: 112px 0 100px;
    
    @media screen and ( max-width: 1500px){
        max-width: 1142px;
    }
    @media screen and ( max-width: 1366px){
        max-width: 100%;
        padding: 112px 112px 200px;
        margin: 0 auto;
    }
    @media screen and ( max-width: 680px){
        width: 95%;
        padding: 92px 0 200px;
    }

`;


export const SectionBannerBlock = styled.div`
    min-height: 160px;
    padding: 52px 60px 0 200px;
    border-radius: 12px;
    position: relative;
    
    background: ${(props) => props.theme.bgColor};
    transition: background-color 1s, color 0.1s, border 0.5s;
    
    .section-banner-icon{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .section-banner-title{
        font-size: 2.25rem;
        font-weight: 700;
        color:#fff;
    }
    .section-banner-text{
        margin-top: 10px;
        font-size: 1rem;
        font-weight: 500;
        color:white;
    }
`;
