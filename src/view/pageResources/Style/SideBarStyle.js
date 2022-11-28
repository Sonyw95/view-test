import styled from "styled-components";


export const LeftSideBarBlock = styled.div`
    transition-delay: .25s;
    transition: transform .35s ease-in-out
    overflow-y: visible;
    
    width:80px;
    height: 100%;
    padding-top:30px;
    padding-bottom: 40px;
    margin-top: 80px;
    
    position: fixed;
    top:0;
    left:0;
    z-index:9999;
    
    background-color: ${ (props) => props.theme.leftBarColor};
    transition: background-color 1s, color 0.1s, border 0.5s;
    box-shadow: 0 0 40px 0 rgba(94,92,154, .06);
    
    .user-avatar{
        margin: 0 auto;
        width: 40px;
        height: 44px;
        display:block;
        position: relative;
    }
    
    .icon-newsfeed, .icon-blog-posts, .icon-forums {
      fill:#adafca;
    }
 
    .menu{
        .menu-item {
            padding: 0 16px;
            margin-bottom: 10px;
      
        }
        .menu-item.true > .menu-item-link{
                color:white;
                background-color:rgb(255,130,0);
                box-shadow: 4px 7px 12px 0 rgb(255, 130, 0 / 20%);
        }
        
        .menu-item:hover:not(.true) > .menu-item-link   {
            ${ (props) => props.theme.leftLink}
            
            .menu-tooltip{
                opacity: 1;
                visibility: visible;
            }
        }
        
        .menu-item-link{
            display: flex;
            align-items: center;
            height: 48px;
            border-radius: 12px;
            font-size: 0.875rem;
            font-weight: 700;
            line-height: 1.2857142857em;
            position: relative;
            transition: all .2s ease-in-out;
            
            .menu-tooltip{
                white-space: nowrap;
                position: absolute;
                z-index: 99999;
                right: -77px;
                top: 50%;
                margin-top: -12px;
                opacity: 0;
                visibility: hidden;
                transform: translate(10px, 0px);
                transition: all 0.3s ease-in-out 0s;
                
                .menu-tooltip-text{
                    padding: 0 12px;
                    border-radius: 200px;
                    background-color: rgb(255,130,0);
                    color: #fff;
                    font-size: 0.25rem;
                    font-weight: 700;
                    line-height: 24px;
                }
            }
        }
    }
    
    
    @media screen and (max-width:1365px){
        display:none;
    }
    
`;