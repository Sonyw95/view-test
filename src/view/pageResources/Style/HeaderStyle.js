import styled from "styled-components";

export const HeaderBlock = styled.div`
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: ${(props) => props.theme.bgColor };
    transition: background-color 1s, color 0.1s, border 0.5s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    
    @media screen and (max-width: 680px){
        height: 60px;
    }
    

`;

export const HeaderActionBlock = styled.div`

    display: flex;
    align-items: center; 
    
    .list-item-box{
        &:nth-child(1){
            left:46%;
        }
    }
       
    .active{
        fill :#fff;
    }   
    svg:hover{
         transform: translateY(-4px);
    }
    .logo{
        margin-left:26px;
        .logo-icon{
            width: 45px;
            height: 45px;
        }
    }
    .header-brand-text{
        margin-left:26px;
        color:white;
        font-size: 1.425rem;
        font-weight: 900;
        text-transform: uppercase;
    }
    
    
    
    .side-menu-trigger, .mobile-menu-trigger{
        display:flex;
        justify-content: center;
        align-items: center;
        width:80px;
        height: 80px;
        cursor: pointer;
    }  
    .icon-grid{
        pointer-events: none;
        transition: fill .3s ease-in-out;
    }
    
    
    
    .mobile-menu-trigger{
        display: none;
    }
    .burger-icon .burger-icon-bar {
        height: 2px;
        background-color: #fff;
        position: absolute;
        right: 0;
        transition: width .4s ease-in-out;
    }
    .burger-icon {
        width: 20px;
        height: 14px;
        position: relative;
    }
    .burger-icon.inverted .burger-icon-bar:first-child {
        width: 100%;
    }
    .burger-icon .burger-icon-bar:first-child {
        top: 0;
        width: 10px;
    }
    .burger-icon.inverted .burger-icon-bar {
        left: 0;
    }
    .burger-icon.inverted .burger-icon-bar:nth-child(2) {
        width: 14px;
    }
    .burger-icon .burger-icon-bar:nth-child(2) {
        top: 6px;
        width: 14px;
    }
    .burger-icon.inverted .burger-icon-bar {
        left: 0;
    }
    .burger-icon.inverted .burger-icon-bar:nth-child(3) {
        width: 10px;
    }
    .burger-icon .burger-icon-bar:nth-child(3) {
        top: 12px;
        width: 100%;
    }
    .burger-icon.inverted .burger-icon-bar {
        left: 0;
    }
    
    
    
    .next-progress{
        width:110px;
        .bar-progress{
            position: relative;
            
            .bar-progress-text{
                display: flex;
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
        .bar-progress:first-child{
            margin-bottom: 6px;
        }     
    }
    .next-progress-bar{
        width: 106px;
        height: 4px;
        position: relative;
    }
    
    
    .dropdown-list{
        height: 80px;
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
            transition: transform .2s ease-in-out;
            
            .settings{
                height: 80px;
                display: flex;
                padding: 0 18px;
                position: relative;
            }
        }
    }
    .dropdown-list:before {
        top:24px;
        background-color: white;
        right: 0;
    }
    .dropdown-list:after{
        top:24px;
        background-color: white;
        left:0;
        
    }
    .dropdown-list:after, .dropdown-list:before {
        content: "";
        width: 1px;
        height: 32px;
        background-color: #dedeea;
        position: absolute;
    }
    .list-item{
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
        
        .dropdown-box-header{
            display:flex;
            justify-content: space-between;
            padding: 28px 28px 20px;  
            
            .dropdown-box-header-title{
                font-size: .85rem;
                font-weight: 700;
            }  
            .dropdown-box-header-action{
                margin-right: 16px;
                color: #8f91ac;
                font-size: .65rem;
                font-weight: 700;
                opacity: .6;
                cursor: pointer;
            }          
        }
        .dropdown-box-list{
            position: relative;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;
                
            .dropdown-box-list-item{
                display: block;
                padding: 16px 28px;
                    
                .list-item-notification{
                    min-height: 44px;
                    padding: 2px 60px 0 52px;
                    position: relative;
                }
                .user-avatar-level{
                    width: 18px;
                    height: 20px;
                    top: 60%;
                    left: 8%;

                    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    border-radius:20px;
                    border: 2px solid white;
                    background-color:rgb(255,130,0);
                    z-index: 4;
                    
                    .user-avatar-border{
                        text-align:center;
                        color:white;
                        font-size:1rem;
                        z-index: 4;
                        .user-level-info{
                            font-size:0.6rem;
                            background-color:rgb(255,130,0);
                        }
                    }
                }
            }
        }
    }
    .user-avatar{
        position: absolute;
        top:0;
        left:0;
        width: 40px;
        height:44px;
        border-radius: 20px;
                        
    }
    .drop{
        opacity: 1 !important;
        visibility:visible !important;
        transform: translateY(0) !important;
    }
    .alert svg{
        fill: #fff;
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
    
    
    .dropdown-list-setting{
        height: 80px;
        
        .header-settings-action{
            margin-right:26px;
            width: 100%;
            cursor: pointer;
            position: relative;
            align-items: center;
            display: flex;
            height: 100%;
            padding: 0 14px;
            cursor: pointer;
            transition: transform .2s ease-in-out;
            
            .list-item-setting{
                width: 220px;
                padding: 20px 28px;
                border-radius: 10px;
                background-color: #fff;
                box-shadow: 3px 5px 40px 0 rgb(94 92 154 / 6%);
                
                position: absolute;
                z-index: 9999;
                top: 64px;
                right: 22px;
                opacity: 0;
                visibility: hidden;
                transform: translate(0px, 0px);
                transition: transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s;
                
                .user-status{
                    min-height:44px;
                    padding: 2px 0 0 52px;
                    position: relative;
                }
                
            }
        }
    }
    .header-login-action{
        margin-right: 2rem;
        .header-login-button{
            padding: 0 26px;
            margin-right: 2.5rem;
        }
    }
    
    
    @media screen and (max-width: 1500px){
        .header-brand-text{
            display: none;
        }
    }
    @media screen and (max-width: 1365px){
        .next-progress{
            margin-right: 28px;
        }
    }
    @media screen and (max-width: 960px){
        .next-progress, .next-progress-bar{
            display:none;
        }
        .dropdown-list{
            margin-right: 26px;
        }
        
    }
    
    @media screen and (max-width: 680px){
         &:last-child{
            display:none;
        }
        .logo{
            margin-left: 16px;
        }
        .side-menu-trigger{
            display:none;
        }
        .mobile-menu-trigger{
            display:flex;
        }
        .dropdown-list, .dropdown-list-setting{
            display:none;
        }
    }
`;


export const SearchBarBlock =styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    position: relative;

    .header-input-bar{
        width: 100%;
        height:52px;
        position: relative;
        
        input{
            border: none;
            color:white;
            background-color: ${(props) => props.theme.inputColor};
            transition: background-color 1s, color 0.1s, border 0.5s;
            height: 100%;
            padding-right: 60px;
        }          
    }
    .header-input-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        pointer-events: none;
            
            .input-icon{
                fill: #fff;
                opacity:.6;
                transition: fill .2s ease-in-out, opacity .2s ease-in-out;
            }
        }
    
    @media screen and (max-width: 1365px){
        width:30%;
        margin-right:26px;
    }
    @media screen and (max-width: 960px){
        width:80%;
    }
    @media screen and (max-width: 680px){
        height:100%;
        margin-right:0;
        
        
        .header-input-bar{
            height:100%;
            
            input{
                border-radius:0;
            }
            
            
        }
    }
        
    
`;