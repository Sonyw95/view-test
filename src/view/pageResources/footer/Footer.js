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

            <FooterProgressBlock>
                <div className="dropdown-list">
                    <div className="dropdown-list-item" >
                        <svg className="dropdown-list-icon icon-messages">
                            <use href="#svg-notification"/>
                        </svg>
                    </div>

                    <div className="dropdown-list-item alert" >
                        <svg className="dropdown-list-icon icon-messages ">
                            <use href="#svg-messages"/>
                        </svg>
                    </div>
                </div>

                <div className="dropdown-list-item settings" >
                    <svg className="dropdown-list-icon icon-settings">
                        <use href="#svg-settings"/>
                    </svg>
                </div>

            </FooterProgressBlock>

        </FooterBlock>
    )
}
export default Footer;