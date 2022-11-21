import React from "react";
import styled from "styled-components";


const ProgressBar = (props) =>{

    const isWidget = props.widget;

    const ContainerBlock = styled.div`
        height: inherit;
        width: 100%;
        background-color: ${ (props) => isWidget ? "#f0f0f5" : props.theme.headPgColor };
        transition: background-color 1s, color 0.1s, border 0.5s;
        border-radius: 50px;
        
    `;

    const FillerStyle = styled.div`
        height:100%;
        width: ${props.completed}%;
        background-color: ${ isWidget ? "rgb(255,130,0)" : "#fff"};
        text-align: right;
    `;

    return(
        <ContainerBlock >
            <FillerStyle />
        </ContainerBlock>
    )
}

export default ProgressBar;