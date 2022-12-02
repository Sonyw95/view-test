import likeReaction from "../../../resources/image/reaction/like.png";
import loveReaction from "../../../resources/image/reaction/love.png";
import wowReaction from "../../../resources/image/reaction/wow.png";
import funnyReaction from "../../../resources/image/reaction/funny.png";
import {useState} from "react";
import moment from "momnet";

const RightGird = () => {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [date, setDate] = useState(moment());

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


    const onClickData = (type) => {
        switch(type){
            case "left":
                return setDate(moment().subtract(1, 'month'));
            default :
                return setDate(moment().add(1, 'month'));
        }
    }

    return (
        <>
            <div className={"widget-box stats"}>

                <p className="widget-box-title">받은 리액션</p>
                <div className={"widget-box-content"}>
                    <div className={"reaction-box"}>
                        <div className={"reaction-stats"}>
                            <img src={likeReaction} className={"reaction-image"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>추천</p>
                        </div>
                        <div className={"reaction-stats"}>
                            <img src={loveReaction} className={"reaction-image"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>좋아요</p>
                        </div>
                    </div>
                    <div className={"reaction-box"}>
                        <div className={"reaction-stats"}>
                            <img src={wowReaction} className={"reaction-image"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>와우!</p>
                        </div>
                        <div className={"reaction-stats"}>
                            <img src={funnyReaction} className={"reaction-image"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>재밌어요</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={"widget-box"}>
                <div className={"widget-box-setting"}>
                    <svg className="widget-setting left" onClick={() => onClickData("left")  }>
                        <use href="#svg-small-arrow"/>
                    </svg>
                    <svg className="widget-setting " onClick={() => onClickData("right")  }>
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
        </>
    )
}

export default RightGird;