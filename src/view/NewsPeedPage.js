import {ContentBlock, ContentGrid, SectionBannerBlock} from "./pageResources/Style/NewsPeedStyle";
import {useEffect, useRef, useState} from "react";
import newsPeedBanner from "../resources/image/banner/newsfeed-icon.png";
import qs from "../resources/image/quest/openq-s.png";
import ProgressBar from "../component/common/ProgressBar";


const NewsPeedPage = ({isNormalSide}) => {

    const [resizeWidth, setResizeWidth] = useState('234');
    const ref = useRef(null);

    const style ={
        transform: `translate(${resizeWidth}px, 0px)`,
        transition: "transform 0.4s ease-in-out 0s",
    }

    const handleResize = (contentGrid) => {
        if(window.innerWidth > 1366){
            const navigationWidth = isNormalSide ? 300 : 80,
                availableWidth = document.body.clientWidth - navigationWidth -ref.current.offsetWidth-316,
                offsetX = (availableWidth / 2 ) + navigationWidth;
            setResizeWidth(offsetX);
            console.log(offsetX);
        }else{
            setResizeWidth(0);
        }

    };

    useEffect( () => {
        window.addEventListener('resize', handleResize);
    });

    return(
        <ContentBlock style={style} ref={ref} >
            <SectionBannerBlock >
                <img className={"section-banner-icon"} src={newsPeedBanner}/>
                <p className="section-banner-title">Newsfeed</p>
                <p className="section-banner-text">Check what your friends have been up to!</p>
            </SectionBannerBlock>

            <ContentGrid>
                <div className={"grid-column"}>
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
                                    <img src={qs}/>
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
                                    <img src={qs}/>
                                    <p className="quest-preview-title">무슨 퀘스트</p>
                                    <p className="quest-preview-text">뭐를 해야함</p>
                                </div>
                                <div className={"widget-box-progress"}>
                                    <ProgressBar completed={"80"} widget={"true"}/>
                                </div>
                            </div>
                        </div>
                        <a className="widget-box-button button small white" href="quests.html">See all Quests!</a>
                    </div>
                </div>
            </ContentGrid>

        </ContentBlock>
    )
}

export default NewsPeedPage;