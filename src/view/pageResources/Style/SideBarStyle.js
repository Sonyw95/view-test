import styled from "styled-components";


export const LeftSideBarBlock = styled.div`
    transition-delay: .25s;
    padding-top: 20px;
    overflow-y: visible;
    
    margin-top: 80px;
    transition: transform .35s ease-in-out
    top:0;
    left:0;
    
    height: 100%;
    position: fixed;
    z-index:9999;
    
    width:80px;
    padding-top:20px;
    
    .user-avatar{
        margin: 0 auto;
        width: 40px;
        height: 44px;
        display:block;
        position: relative;
        
    }
    .menu{
        .menu-item {
            padding: 0 16px;
            margin-bottom: 10px;
            
            .active{
                color:white;
                background-color:rgb(255,130,0);
                box-shadow: 4px 7px 12px 0 rgb(255, 130, 0 / 20%);
            }
        }
        
        .menu-item-link{
            position: relative;
        }
    }
    
    
`;