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
    
    @media screen and (max-width:1365px){
        grid-template-columns: 32.4324324324% 66.2162162162%;
        grid-template-areas: "sidebar1 content" "sidebar2 content";
    }
    @media screen and (max-width:1070px){
        grid-template-columns: 100%;
        grid-template-areas:
                            "content"
                            "sidebar1"
                            "sidebar2";
                            
        .grid-column:nth-child(1), .grid-column:nth-child(3){
            display:none;  
        }      
    }
    
    .grid-column:nth-child(1){
        grid-area: sidebar1;   
    }
    .grid-column:nth-child(2){
        grid-area: content;   
    }
    
    
    .grid-column{
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 16px;
        min-width: 0; 
        
        .widget-box{
            padding: 32px 28px;
            border-radius: 12px;
            background-color: ${(props) => props.theme.widgetBoxColor};
            transition: background-color 1s, color 0.1s, border 0.5s;
            box-shadow: 0 0 40px 0 rgba(94,92,154, .06);
            position: relative;
            
             &.post{
                padding: 20px 0 0 0;
             }
            
            .widget-box-tooltip{
                white-space: nowrap;
                position: absolute;
                z-index: 99999;
                top: -32px;
                left: 50%;
                margin-left: -47.5px;
                opacity: 0;
                visibility: hidden;
                transform: translate(0px, 10px);
                transition: all 0.3s ease-in-out 0s;
                
                p{
                    padding: 0 12px;
                    border-radius: 200px;
                    background-color: #3e3f5e;
                    color: #fff;
                    font-size: .75rem;
                    font-weight: 700;
                    line-height: 24px;
                }
            }
            .post-action{
                display:flex;
                align-items: center;
                justify-content: space-between;
                height: 65px;
                padding: 0 28px;
                border-top: 1px solid #eaeaf5;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                background-color: #fcfcfd;
                
                .post-option-wrap{
                    position: relative;
                    .post-option{
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        width: 160px;
                        height: 44px;
                        border-radius: 12px;
                        cursor: pointer;
                        transition: box-shadow .2s ease-in-out,background-color .2s ease-in-out;
                        
                        &:hover{
                            background-color:#fff;
                            box-shadow: 3px 5px 20px 0 rgb(94 92 154 / 10%);
                            color: #3e3f5e;
                        }
                        &:hover > .post-option-text{
                            color: #3e3f5e;
                        }
                        &:hover > .post-option-text{
                            color: #3e3f5e;
                        }
                        &:hover > svg{
                            fill: #23d2e2;
                            opacity: 1;
                        }
                        
                        .post-option-text{
                            color: #adafca;
                            font-size: .75rem;
                            font-weight: 7000;
                            transition: color .2s ease-in-out;
                        }
                        
                        .post-option-icon{
                            position: relative;
                            top: -2px;
                            margin-right: 16px;
                            fill: #adafca;
                            opacity: .6;
                            transition: fill .2s ease-in-out,opacity .2s ease-in-out;
                        }
                    
                    
                    }
                }
            }
            .widget-box-setting{
                position: absolute;
                top: 22px;
                right: 19px;
                z-index: 9999;
                
                display: flex;
                width: 25px;
                height: 9%;
                cursor: pointer;
            }
            .widget-setting > .widget-box-tooltip {
                    visibility: visible;
                    opacity: 1;
                }
            .widget-setting{
                fill: #adafca;
                opacity: .4;
                transition: opacity .2s ease-in-out,fill .2s ease-in-out;         
                
                &:hover{
                    fill: rgb(255,90,0);
                    opacity:1;
                }
                
                
                
                &.left{
                    transform: scaleX(-1);
                    position: relative;
                    left: -35%;
                }      
            }
               
            .widget-box-title{
                position: absolute;
                top: 22px;
                width: 90%;
                font-size: 0.9rem;
                font-weight: 700; 
                
                &.date{
                    padding:10px 2px 0px 2px;
                } 
                
            }
            .widget-box-title.avtar {
                min-height: 44px;
                padding: 0 0 0 32px;
            }
            
            .widget-box-contents-title {
                width: 90%;
                padding: 2px 0 0 52px;
                min-height: 44px;
                position: absolute;
                top:0;
                color: #3e3f5e;
                font-size: .875rem;
                font-weight: 500;
                line-height: 1.4285714286em;
   
                .bold{
                    color: #3e3f5e;
                    font-weight: 700;
                }
            }
            .widget-box-contents-text{
                margin-top:4px;
                font-size: .75rem;
                position:relative;
                line-height: 1.4285714286em;
            }
            .widget-box-content{
                margin-top: 36px;
                
                > div:nth-child(1){
                    margin-bottom: 2rem;
                }
                .contents-actions{
                    margin-top: 28px;
                    padding : 0 28px;
                    border-top: 1px solid #eaeaf5;
                    align-items: center;
                    height: 52px;
                    justify-content: space-between;
                    display: flex;
                    
                    .content-reaction{
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .reaction-line{
                        display:flex;
                        align-items: center;
                        
                        .reaction-line-text{
                            font-size: .75rem;
                            font-weight: 600;
                            margin-left: 10px;
                        }
                        .reaction-line-link{
                            font-size: .75rem;
                            font-weight: 700;
                            cursor: pointer;
                            transition: color .2s ease-in-out;
                        }
                    }
                    .reaction-line+.reaction-line{
                        margin-left:30px;
                    }
                    .reaction-line-list{
                        display: flex;
                        justify-content: flex-end;
                        flex-direction: row-reverse;
                    }
                    .reaction-item{
                        position:relative;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background-color: #fff;
                        margin-left: -6px;
                        
                        img{
                            width: 20px;
                             height: 20px;
                        }
                    }
                    
                }
                .widget-box-content-text{
                    font-size: .875rem;
                    line-height: 1.7142857143em;
                    font-weight: 500;
                    padding: 20px 0 0 28px;
                }
                
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
                .calendar{
                    margin: 0 auto;
                    background-color: #fff;
                    
                    font-size: 80%;
                    font-weight: 400;
                    
                    
                    .calendar-week {
                        justify-content: space-between;
                        display: flex;
                        
                       
                        .calendar-week-day{
                            padding: 16px 0;
                            font-size: .75rem;
                            width: 14.2857142857%;
                            color: #8f91ac;
                            font-weight: 500;
                            text-align: center;
                            
                            &:nth-child(1){
                                color: red;
                            }
                            &:nth-child(7){
                                color: blue;
                            }
                        
                            
                            &.selected{
                                color:#fff;
                                background-color:rgb(255,90,0);
                                border-radius:40%;
                                padding:11px 0;
                                margin:5px 0;
                            }
                        }
                    }
                }  
                .reaction-box{
                    display: flex;
                    justify-content: center;
                    
                    .reaction-stats{
                        width: 114px;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        
                        &:nth-child(1):after{
                            content: "";
                            width: 1px;
                            height: 40px;
                            background-color: #eaeaf5;
                            position: absolute;
                            top: 32px;
                            right: 0;
                        }
                        
                        .reaction-image{
                            width: 40px;
                            height: 40px;
                            
                        }
                        .reaction-stat-title{
                            margin-top: 16px;
                            font-size: 1.05rem;
                            font-weight: 700;
                        }
                        .reaction-stat-text{
                            margin-top: 8px;
                            color: #adafca;
                            font-size: .75rem;
                            font-weight: 700;
                            text-transform: uppercase;
                        }
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
        
        
        .quick-post{
            border-radius: 12px;
            background-color: #fff;
            box-shadow: 0 0 40px 0 rgb(94 92 154 / 6%);
        
            .quick-post-header{
                border-bottom: 1px solid #eaeaf5;
                height: 65px;
                background-color: #fff;
                border-top-right-radius: 12px;
                border-top-left-radius: 12px;
                display:flex;
                
                .option-item{
                    width: 33.333333333%;     
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    
                    &.active{
                        border-bottom: 4px solid rgb(255,90,0);
                    }
                    
                    .icon-status {
                        fill: #3e3f5e;
                        margin-right: 16px;
                    }
                    
                    .option-item-title{
                        color: #3e3f5e;
                        font-size: .75rem;
                        font-weight: 700;
                    }
                    
                }
            }
        
        
        .quick-post-body{
            .form{
                width: 100%;
                
                .form-textarea{
                    background-color:#fcfcfd;
                    position:relative;
                    
                    .textarea{
                        height: 120px;
                        background-color: #fcfcfd;
                        border-radius: 0;
                        border: none;
                        font-size: .8rem;
                        padding: 20px 20px 0;
                        resize: none;
                        color: #3e3f5e;
                        transition: border-color .2s ease-in-out;
                        width:100%;
                        font-weight:700;
                        overflow: auto;
                        margin:0;
                        line-height:inherit;
                        
                        &::placeholder {
                            color:rgba(30,30,30,0.3);
                        }
                    }
                    .form-textarea-limit-text{
                        color: #adafca;
                        padding-top: 10px;
                        height: 40px;
                        padding: 0 28px;
                        font-size: .75rem;
                        font-weight: 500;
                        opacity: .6;
                        text-align: right
                    }
                }
            }
            .quick-post-footer{
                display:flex;
                align-item: center;
                justify-content: space-between;
                min-height: 76px;
                padding: 0 28px;
                border-top: 1px solid #eaeaf5;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                
                .quick-post-footer-action{
                    display:flex;
                    align-items: center;
                    
                    .quick-post-action-medium{
                        position: relative;
                        margin-right: 22px;
                        cursor: pointer;
                        
                        .quick-post-action-icon{
                            transition: fill .2s ease-in-out;
                            fill:#adafca;
                            &:hover{
                                fill:rgb(255,130,0);
                            }
                        }
                    }
                    .quick-post-button{
                        width: 80px;
                        height: 40px;
                        line-height: 40px;
                        font-size: 0.75rem;
                        box-shadow: 4px 7px 12px 0 rgb(97 93 250 / 20%)
                    }
                    
                }
            
            }
        }
    }
`;
