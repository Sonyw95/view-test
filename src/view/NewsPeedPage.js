import React, {useEffect, useRef, useState} from "react";
import {ContentBlock, ContentGrid, SectionBannerBlock} from "./pageResources/Style/NewsPeedStyle";

import Button from "../component/common/Resources/Button";

import newsPeedBanner from "../resources/image/banner/newsfeed-icon.png";

import moment from "momnet";
import avatar from "../resources/image/avatar/24.jpg";
import {ContentAvatar} from "../component/common/Resources/UserAvatar";
import {UseCircleChart} from "../hooks/useCircleChart";


const NewsPeedPage = ({isNormalSide}) => {

    const [resizeWidth, setResizeWidth] = useState('274');

    const ref = useRef(null);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = moment();
    const [nowLength, setLength]= useState(1000);

    const style ={
        transform: `translate(${resizeWidth}px, 0px)`,
        transition: "transform 0.4s ease-in-out 0s",
    }

    const onKeyUp = (e) => {
        setLength(e.target.textLength);
    }


    function getDays() {
        const startWeek = date.clone().startOf('month').week();
        const endWeek = date.clone().endOf('month').week() === 1? 53 : date.clone().endOf('month').week();

        let nowCalendar = [];
        for( let week = startWeek ; week <= endWeek ; week++){
                nowCalendar.push(
                    <div className={"calendar-week"} key={week}>{Array(7)
                        .fill(0)
                        .map((n, i) => {
                            let current = date
                                .clone()
                                .week(week)
                                .startOf('week')
                                .add(n + i, 'day');

                            let isSelected = date.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                            return (
                                <p className={`calendar-week-day ${isSelected}`} key={i}>{current.format('D')}
                                </p>
                            );
                        }, [])}</div>

                )
        }
        return nowCalendar;
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
                    <div className={"widget-box"}>
                        <p className="widget-box-title">이달의 차트</p>
                        <UseCircleChart/>
                    </div>
                    {/*
                    <div className={"widget-box"}>
                        <div className={"widget-box-setting"}>
                            <svg className="widget-setting ">
                                <use href="#svg-more-dots"/>
                            </svg>
                        </div>
                        <p className="widget-box-title">Quests</p>

                        <div className={"widget-box-content"}>
                            <div className={"widget-box-list"}>
                                <div className={"widget-box-item-info"}>
                                    <img src={qs} alt={"QuestBadge"}/>
                                    <p className="quest-preview-title">무슨 퀘스트</p>
                                    <p className="quest-preview-text">뭐를 해야함</p>
                                </div>
                                <div className={"widget-box-progress"}>
                                    <ProgressBar completed={"30"} widget={"true"}/>
                                </div>
                            </div>
                        </div>

                        <div className={"widget-box-content"}>
                            <div className={"widget-box-list"}>
                                <div className={"widget-box-item-info"}>
                                    <img src={qs} alt={"QuestBadge"}/>
                                    <p className="quest-preview-title">무슨 퀘스트</p>
                                    <p className="quest-preview-text">뭐를 해야함</p>
                                </div>
                                <div className={"widget-box-progress"}>
                                    <ProgressBar completed={"80"} widget={"true"}/>
                                </div>
                            </div>
                        </div>
                        <Link to="/" className="widget-box-button button small white">See all Quests!</Link>
                    </div>
                    */}
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
                    <div className={"widget-box"}>
                        <div className={"widget-box-setting"}>
                            <svg className="widget-setting left ">
                                <use href="#svg-small-arrow"/>
                            </svg>
                            <svg className="widget-setting ">
                                <use href="#svg-small-arrow"/>
                            </svg>
                        </div>
                        <p className="widget-box-title">{date.format('MMMM YYYY')}</p>
                        <div className={"widget-box-content"}>
                            <div className={"calendar"}>
                                <div className={"calendar-week"}>

                                    {days.map ( (day, idx)=>{
                                        return(
                                            <p className={`calendar-week-day ${day}`}  key={idx}>{day}</p>
                                        )
                                    })}
                                </div>

                                {getDays()}

                            </div>
                        </div>
                    </div>
                </div>

            </ContentGrid>

        </ContentBlock>
    )
}

export default NewsPeedPage;