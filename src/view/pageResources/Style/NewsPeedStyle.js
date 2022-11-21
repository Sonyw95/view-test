import styled from "styled-components";

export const ContentBlock = styled.div`
    
    max-width: 1184px;
    padding: 112px 0 100px;
    margin: 0px;
    
    @media screen and ( max-width: 1366px){
        width: 95%;
        max-width: 1184px;
        padding-left: 0;
        margin: 0px auto;
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
    
    @media screen and ( max-width: 960px){
        display: flex;
        align-items: center;
        height: 86px;
        min-height: auto;
        padding: 0 28px 0 108px;
        
        .section-banner-icon{
            width:92px;
            height: 86px;
        }
        .section-banner-title{
            font-size: 1.5rem;
        }
        .section-banner-text{
            display:none;
        }
    }
`;


export const ContentGrid = styled.div`

    margin-top:32px;
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 16px;
    align-items: start;
    
    grid-template-areas: 'sidebar1 content sidebar2';
    grid-template-columns: 23.9864864865% 49.3243243243% 23.9864864865%;
    
    .grid-column:nth-child(1){
        grid-area: sidebar1;   
    }
    
    .grid-column{
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 16px;
        min-width: 0;
        
        .widget-box{
            padding: 32px 28px;
            border-radius: 12px;
            background-color: #fff;
            box-shadow: 0 0 40px 0 rgba(94,92,154, .06);
            position: relative;
            
            .widget-box-setting{
                position: absolute;
                top: 22px;
                right: 19px;
                z-index: 9999;
                
                display: flex;
                width: 20px;
                height: 6px;
                cursor: pointer;
            }
            .widget-setting{
                fill: #adafca;
                opacity: .4;
                transition: opacity .2s ease-in-out,fill .2s ease-in-out;               
            }
            
            .widget-box-title{
                position: absolute;
                top: 22px;
                width: 90%;
                font-size: 0.9rem;
                font-weight: 700;
            }
            
            .widget-box-content{
                margin-top: 36px;
                
                .widget-box-list{
                    margin-bottom: 20px;
                    
                    .widget-box-item-info{
                        padding: 2px 8px 0 42px;
                        position: relative;
                        
                        img{
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 1;
                        }
                        .quest-preview-title{
                            font-size: 0.85rem;
                            font-weight: 700;
                        }
                        .quest-preview-text{
                            margin-top: 4px;
                            color: #3e3f5e;
                            font-size: .75rem;
                            font-weight: 500;
                            line-height: 1.3333333333em;
                        }
                    }
                    .widget-box-progress{
                        margin-top:16px;
                        width:100%;
                        height:4px;
                    }
                }              
            }
            .widget-box-button{
                width: 100%;
                margin-top: 32px;
                background-color: transparent;
                border: 1px solid #dedeea;
                color: #adafca;
                box-shadow: none;
                height: 40px;
                font-size: .7rem;
                line-height: 40px;
                    
                display: inline-block;
                border-radius: 10px;
                font-weight: 700;
                text-align: center;
                cursor: pointer;
                transition: background-color .2s ease-in-out,color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;
            }
        }
    }
`;
