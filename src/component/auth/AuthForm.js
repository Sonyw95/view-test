import styled from "styled-components";
import LoginPage from "../../view/LoginPage";

const FormBlock = styled.div`
    transform: translate (0px, 0px);
    opacity: 1;
    visibility: visible;
    z-index:1;
    position: absolute;
    left: 0px;
    top:50%;
    transition: all 0.6s ease-in-out 0s;
    
    width: 484px;
    padding: 64px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 0 60px 0 rgb(94 92 154 / 12%);
    position: relative;
    
    animation: 0.7s ease-in-out loadEffect2;
    
     &:first-child{
        margin-top: -313px;
    }
    &:last-child{
        margin-top: -370px;
    }
    
`;

const AuthForm = () => {
  return (
      <FormBlock>
          <LoginPage/>
      </FormBlock>
  )
};

export default AuthForm;