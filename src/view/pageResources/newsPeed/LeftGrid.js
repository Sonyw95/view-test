import {UseCircleChart} from "../../../hooks/useCircleChart";

const LeftGrid = () => {
    return (

        <>
            <div className={"widget-box"}>
                <p className="widget-box-title">이달의 포스팅차트</p>
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
                            <img  alt={"QuestBadge"}/>
                            <p className="quest-preview-title">무슨 퀘스트</p>
                            <p className="quest-preview-text">뭐를 해야함</p>
                        </div>
                    <div className={"widget-box-progress"}>
                        <ProgressBar completed={"30"} widget={"true"}/>
                    </div>
                </div>
                 <Link to="/" className="widget-box-button button small white">See all Quests!</Link>
                </div>
             </div>
             */}
        </>
    )
}

export default LeftGrid;