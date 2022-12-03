import styled from "styled-components";

const ToggleBtn = styled.button`
  width: 60px;
  height: 25px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.isDark ? "#c6631d" : "#828080"};
  box-shadow: inset 0 0 30px 0 rgb(0 0 0 / 30%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  
    @media screen and (max-width: 1365px) {
        display: none;
    }
`;
const Circle = styled.div`
  background:  linear-gradient(to top, #9e9e9e 20%, #f4f4f4);
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 50%);
  width: 30px;
  height: 30px;
  border-radius: 50px;
  position: absolute;
  left: 1%;
  transition: all 0.5s ease-in-out;
  ${(props) =>  props.isDark &&
    `
      transform: translate(30px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;


const ToggleSwitch = props => {
    return (
        <>
            <ToggleBtn onClick={props.toggleDarkMode} isDark={props.isDark}>
                <Circle isDark={props.isDark} />
            </ToggleBtn>
        </>
    )
}

export default ToggleSwitch;