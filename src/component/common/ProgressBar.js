import React from "react";
import styled from "styled-components";



const ProgressBar = (props) =>{

    const {backcolor, completed}= props;

    const ContainerBlock = {
        height: 'inherit',
        width: '100%',
        backgroundColor: 'red',
        borderRadius: '50px'
    }

    const FillerStyle ={
        height: '100%',
        width: `${completed}%`,
        backgroundColor: `${backcolor}`,
        borderRadius: 'inherit',
        textAlign: 'right'
    }




    return(
        <div className="container" style={ContainerBlock}>
            <div className="fill" style={FillerStyle}></div>
        </div>
    )
}

export default ProgressBar;