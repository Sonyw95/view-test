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
    
    svg:hover{
         transform: translateY(-4px);
    }
    
   
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
    
    .dropdown-list{
        height: 60px;
        display: -ms-flexbox;
        display: flex;
        padding: 0 18px;
        position: relative;
        
        .dropdown-list-item{
            position: relative;
            align-items: center;
            display: flex;
            height: 100%;
            padding: 0 14px;
            cursor:pointer;     
        }
    }
    .settings{
        margin-left:26px;
    }
    .dropdown-list:before, .dropdown-list:after {
        top:15px;
        background-color: white;
        right: 0;
    }
    .dropdown-list:after{
        left:0;
        
    }
    .dropdown-list:after, .dropdown-list:before {
        content: "";
        width: 1px;
        height: 30px;
        background-color: #dedeea;
        position: absolute;
    }
    .alert:after{
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #41efff;
        position: absolute;
        top: 30%;
        right: 15%;
    }
    
    @media screen and (max-width:480px){
        .bar-progress-footer{
            display:none;
        }    
    }
        
`;