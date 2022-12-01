import styled from "styled-components";

const ToggleBlock = styled.div`
    transform: scale(1.5); 
    display: block;
    width: 2.5rem;
    background: #CCC;
    height: 1rem;
    border-radius: 40px;
    background: linear-gradient(to bottom, #9e9e9e 30%, #f4f4f4);
    box-shadow: 0 2px 0 0 #fff, 0 -2px 0 0 #969494;
    position: relative;
`

const SwitchBlock =styled.div`
    
`

const ToggleSwitch = props => {
    return (
        <ToggleBlock {...props}>
            <SwitchBlock>

            </SwitchBlock>

        </ToggleBlock>
    )
}

export default ToggleSwitch;