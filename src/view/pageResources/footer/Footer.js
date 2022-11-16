import {FooterBlock, FooterProgressBlock} from "../Style/FooterStyle";
import React from "react";
import ProgressBar from "../../../component/common/ProgressBar";

const Footer = () => {

    return(
        <FooterBlock>
            <FooterProgressBlock>
                <div className="bar-progress-footer">
                    <p className="bar-progress-text">Next: <span/> <span> 30exp</span></p>
                    <div className="next-progress-bar">
                        <ProgressBar completed={"30"}/>
                    </div>
                </div>
            </FooterProgressBlock>

        </FooterBlock>
    )
}
export default Footer;