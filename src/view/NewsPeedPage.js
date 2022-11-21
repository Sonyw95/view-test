import {ContentBlock, SectionBannerBlock} from "./pageResources/Style/NewsPeedStyle";
import {useEffect, useState} from "react";

const NewsPeedPage = () => {

    const [resizeWidth, setResizeWidth] = useState('234');

    const style ={
        transform: `translate(${resizeWidth}px, 0px)`,
        transition: "transform 0.4s ease-in-out 0s",
    }

    const handleResize = () => {

    };

    useEffect( () => {
        window.addEventListener('resize', handleResize);
    });

    return(
        <ContentBlock style={style}>
            <SectionBannerBlock>

            </SectionBannerBlock>

        </ContentBlock>
    )
}

export default NewsPeedPage;