import styled from "styled-components";

export const ContainerBlock = styled.div`
        height: inherit;
        width: 100%;
        background-color: ${ (props) => props.isWidget ? "#f0f0f5" : props.theme.headPgColor };
        transition: background-color 1s, color 0.1s, border 0.5s;
        border-radius: 50px;
        
    `;

export const FillerStyle = styled.div`
        height:100%;
        width: ${(props) => props.completed}%;
        background-color: ${ (props) => props.isWidget ? "rgb(255,130,0)" : "#fff"};
        text-align: right;
    `;

const ProgressBar = (props) =>{

    return(
        <ContainerBlock  isWidget={props.widget} >
            <FillerStyle isWidget={props.widget} completed={props.completed} />
        </ContainerBlock>
    )
}

export default ProgressBar;