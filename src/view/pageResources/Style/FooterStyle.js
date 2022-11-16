import styled from "styled-components";


export const FooterBlock = styled.div`
    
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.bgColor};
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
    display: none;

    @media screen and (max-width: 680px){
        display: flex;
        
    }
`;

export const FooterProgressBlock= styled.div`
    display:flex;
    align-items: center; 
    
   
    .bar-progress-footer{
        width:110px;
        margin: 0 32px;
        
        .bar-progress-text {
            margin-bottom: 6px;
            position: relative;
            
            display:flex;
            justify-content: space-between;
            color: #fff;
            font-size: .65rem;
            font-weight: 700;
            text-transform: uppercase;
        
        span{
            font-size: inherit;
        }
    }
    
    }   
    .next-progress-bar{
        width: 106px;
        height: 4px;
        position: relative;
    }
    
    @media screen and (max-width:480px){
        display:none;
    }
        
`;