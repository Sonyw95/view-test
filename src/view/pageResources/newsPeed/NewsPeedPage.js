import React, {useEffect, useRef, useState} from "react";
import {ContentBlock, ContentGrid, SectionBannerBlock} from "../Style/NewsPeedStyle";

import Button from "../../../component/common/Resources/Button";

import newsPeedBanner from "../../../resources/image/banner/newsfeed-icon.png";

import avatar from "../../../resources/image/avatar/24.jpg";
import {ContentAvatar} from "../../../component/common/Resources/UserAvatar";
import LeftGrid from "./LeftGrid";
import RightGird from "./RightGird";
import {Link} from "react-router-dom";

import like from "../../../resources/image/reaction/like.png";

const NewsPeedPage = ({isNormalSide}) => {

    const [resizeWidth, setResizeWidth] = useState('274');
    const ref = useRef(null);
    const [nowLength, setLength]= useState(1000);

    const postList = [
        {
            id:"1"
        },
        {
            id:"2"
        },
        {
            id:"3"
        }
    ]

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
                {/* 왼쪽 차트 그리드 */}
                <div className={"grid-column"}>
                    <LeftGrid/>
                </div>

                {/* 글작성 글목록 그리드*/}
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

                    {
                        postList.map( (list) => (
                            <div className={"widget-box post"} key={list.id}>
                                <div className={"widget-box-setting"}>
                                    <svg className="widget-setting ">
                                        <use href="#svg-more-dots"/>
                                    </svg>
                                </div>
                                <div className="widget-box-title avtar">
                                    <ContentAvatar src={avatar} level={"4"} place={"newsPeed"}/>
                                    <div className="widget-box-contents-title">
                                        <Link path={"/"} className={"bold"}>LABIT</Link> uploaded post
                                        <p className="widget-box-contents-text ">2분전 게시</p>
                                    </div>

                                </div>

                                <div className={"widget-box-content"}>
                                    <p className={"widget-box-content-text"}>
                                        이글은 똥글 뻘글 테스트글이다 알겠냐? 사진은 무료png사진 개꿀띠
                                    </p>
                                    <div className="contents-actions">
                                        <div className={"content-reaction"}>
                                            <div className={"reaction-line"}>
                                                <div className={"reaction-line-list"}>
                                                    <div className={"reaction-item"}>
                                                        <img src={like} alt={"like"}/>
                                                    </div>
                                                    <div className={"reaction-item"}>
                                                        <img src={like} alt={"like"}/>
                                                    </div>
                                                    <div className={"reaction-item"}>
                                                        <img src={like} alt={"like"}/>
                                                    </div>
                                                </div>
                                                <p className={"reaction-line-text"}>
                                                    99
                                                </p>
                                            </div>

                                            <div className={"reaction-line"}>
                                                <div className={"reaction-line-list"}>
                                                    <div className={"reaction-item"}>
                                                        <img src={like} alt={"like"}/>
                                                    </div>
                                                    <div className={"reaction-item"}>
                                                        <img src={like} alt={"like"}/>
                                                    </div>
                                                    <div className={"reaction-item"}>
                                                        <img src={like} alt={"like"}/>
                                                    </div>
                                                </div>
                                                <p className={"reaction-line-text"}>
                                                    22명 반응함
                                                </p>
                                            </div>

                                        </div>
                                        <div className={"content-reaction"}>
                                            <div className={"reaction-line"}>
                                                <Link path={"/"} className={"reaction-line-link"}>15 Comments</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"post-action"}>

                                        <div className={"post-option-wrap"}>
                                            <div className={"post-option"}>
                                                <svg className="post-option-icon icon-thumbs-up">
                                                    <use href="#svg-thumbs-up"/>
                                                </svg>
                                                <p className={"post-option-text"}> 반응하기 </p>
                                            </div>
                                        </div>

                                        <div className={"post-option-wrap"}>
                                            <div className={"post-option"}>
                                                <svg className="post-option-icon icon-comment">
                                                    <use href="#svg-comment"/>
                                                </svg>
                                                <p className={"post-option-text"}> 댓글달기 </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))
                    }



                </div>

                {/* 우측 달력 및 부가 그리드 */}
                <div className={"grid-column"}>
                    <RightGird/>
                </div>

            </ContentGrid>

        </ContentBlock>
    )
}

export default NewsPeedPage;