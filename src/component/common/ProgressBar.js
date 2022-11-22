import {ContainerBlock, FillerStyle} from "./PrgoressBarStyle";


const ProgressBar = (props) =>{

    return(
        <ContainerBlock  isWidget={props.widget} >
            <FillerStyle isWidget={props.widget} completed={props.completed} />
        </ContainerBlock>
    )
}

export default ProgressBar;