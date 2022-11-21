import {ContentBlock, SectionBannerBlock} from "./pageResources/Style/NewsPeedStyle";
import {useEffect, useRef, useState} from "react";
import newsPeedBanner from "../resources/image/banner/newsfeed-icon.png";


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

        </ContentBlock>
    )
}

export default NewsPeedPage;