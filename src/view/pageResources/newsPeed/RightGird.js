import likeReaction from "../../../resources/image/reaction/like.png";
import loveReaction from "../../../resources/image/reaction/love.png";
import wowReaction from "../../../resources/image/reaction/wow.png";
import funnyReaction from "../../../resources/image/reaction/funny.png";
import moment from "momnet";


const RightGird = () => {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = moment();

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


    return (
        <>
            <div className={"widget-box stats"}>

                <p className="widget-box-title">받은 리액션</p>
                <div className={"widget-box-content"}>
                    <div className={"reaction-box"}>
                        <div className={"reaction-stats"}>
                            <img src={likeReaction} className={"reaction-image"} alt={"like"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>추천</p>
                        </div>
                        <div className={"reaction-stats"}>
                            <img src={loveReaction} className={"reaction-image"} alt={"love"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>좋아요</p>
                        </div>
                    </div>
                    <div className={"reaction-box"}>
                        <div className={"reaction-stats"}>
                            <img src={wowReaction} className={"reaction-image"} alt={"wow"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>와우!</p>
                        </div>
                        <div className={"reaction-stats"}>
                            <img src={funnyReaction} className={"reaction-image"} alt={"fun"}/>
                            <p className={"reaction-stat-title"}>99,999</p>
                            <p className={"reaction-stat-text"}>재밌어요</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={"widget-box"}>
                <p className="widget-box-title date">{date.format('MMMM YYYY')}</p>
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