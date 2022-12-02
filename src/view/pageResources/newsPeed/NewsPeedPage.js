import React, {useEffect, useRef, useState} from "react";
import {ContentBlock, ContentGrid, SectionBannerBlock} from "../Style/NewsPeedStyle";

import Button from "../../../component/common/Resources/Button";

import newsPeedBanner from "../../../resources/image/banner/newsfeed-icon.png";

import avatar from "../../../resources/image/avatar/24.jpg";
import {ContentAvatar} from "../../../component/common/Resources/UserAvatar";
import LeftGrid from "./LeftGrid";
import RightGird from "./RightGird";

const NewsPeedPage = ({isNormalSide}) => {

    const [resizeWidth, setResizeWidth] = useState('274');

    const ref = useRef(null);

    const [nowLength, setLength]= useState(1000);

    const style ={
        transform: `translate(${resizeWidth}px, 0px)`,
        transition: "transform 0.4s ease-in-out 0s",
    }

    const onKeyUp = (e) => {
        setLength(e.target.textLength);
    }

    const handleResize = (contentGrid) => {
        if(window.innerWidth > 1366){
            const navigationWidth = isNormalSide ? 300 : 80,
                availableWidth = document.body.clientWidth - navigationWidth -ref.current.offsetWidth-239,
                offsetX = (availableWidth / 2 ) + navigationWidth;
            setResizeWidth(offsetX);
        }else{
            setResizeWidth(0);
        }

    };


    useEffect( () => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return(
        <ContentBlock style={style} ref={ref} >
            <SectionBannerBlock >
                <img className={"section-banner-icon"} src={newsPeedBanner} alt={"NewsPeedLogo"}/>
                <p className="section-banner-title">Newsfeed</p>
                <p className="section-banner-text">최신 소식을 확인해보세요!</p>
            </SectionBannerBlock>

            <ContentGrid>
                <div className={"grid-column"}>
                    <LeftGrid/>
                </div>

                <div className={"grid-column"}>
                    <div className={"quick-post"}>
                        <div className={"quick-post-header"}>
                            <div className={"option-item"}/>
                            <div className={"option-item  active"}>
                                <svg className="icon-status">
                                    <use href="#svg-status"/>
                                </svg>
                                <p className="option-item-title">상태 메시지</p>
                            </div>
                            <div className={"option-item"}/>
                        </div>

                        <div className={"quick-post-body"}>
                            <form className={"form"}>
                                <div className={"form-textarea"}>
                                    <textarea id={"quick-textarea"} name={"quick-textarea"} className={"textarea"} onKeyUp={onKeyUp} maxLength={1000} placeholder={"안녕하세요. 오늘나의 상태메시지 입니다."}/>
                                    <p className="form-textarea-limit-text">{nowLength}/1000</p>
                                </div>
                            </form>
                            <div className={"quick-post-footer"}>
                                <div className={"quick-post-footer-action"}>
                                    <div className={"quick-post-action-medium"}>
                                        <svg className="quick-post-action-icon icon-camera">
                                            <use href="#svg-camera"/>
                                        </svg>
                                    </div>
                                    <div className={"quick-post-action-medium"}>
                                        <svg className="quick-post-action-icon icon-insert-tag">
                                            <use href="#svg-tags"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={"quick-post-footer-action"}>
                                    <Button className={"quick-post-button"} style={ {margin: '0'}}>작성</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"widget-box"}>
                        <div className={"widget-box-setting"}>
                            <svg className="widget-setting ">
                                <use href="#svg-more-dots"/>
                            </svg>
                        </div>
                        <div className="widget-box-title">
                            <ContentAvatar src={avatar} level={"4"}/>
                        </div>

                        <div className={"widget-box-content"}>
                            <div className={"widget-box-list"}>
                                <div className={"widget-box-item-info"}>
                                </div>
                            </div>
                        </div>

                        <div className={"widget-box-content"}>
                            <div className={"widget-box-list"}>
                                <div className={"widget-box-item-info"}>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={"grid-column"}>
                    <RightGird/>
                </div>

            </ContentGrid>

        </ContentBlock>
    )
}

export default NewsPeedPage;