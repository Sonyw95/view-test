import ButtonM from "../component/common/ButtonM";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LoginFormBlock = styled.div`
    .box-title{
        font-size: 1.625rem;
        text-align: center;
    }
    .login-form{
        margin-top:76px;
        width: 100%;
    }
    .form-row{
        position: relative;
    }
    .space-between{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .space-item{
        width: auto;
    }
    .space-item-title{
        color: #adafca;
        font-size: .875rem;
        font-weight: 700;
        line-height: 22px;
    }
`;

const SocialBlock = styled.div`
    .line-text{
        margin-top: 40px;
        font-size: .875rem;
        font-weight:700;
        text-align: center;
        position: relative;
        
        &:before{
        left:0;
        }
        &:after, &:before{
            content:"";
            width: 5%;
            height:1px;
            background-color: #eaeaf5;
            position: absolute;
            top:7px;
        }
    
    }
    
    
`;

const LoginPage = () => {
    return (
        <LoginFormBlock>
            <h2 className="box-title">
                계정 로그인
            </h2>

            <form className="login-form">
                <div className="form-row">
                    <label htmlFor="userid">UserId</label>
                    <input type="text" id="userid" name="userid"/>
                </div>

                <div className="form-row">
                    <label htmlFor="userid">UserId</label>
                    <input type="text" id="userid" name="userid"/>
                </div>

                <div className="form-row space-between">
                    <div className="space-item"/>
                    <div className="space-item">
                        <Link to="/" ><span className="space-item-title">비밀번호 찾기</span></Link>
                    </div>
                </div>

                <div className="form-row">
                    <ButtonM>로그인!</ButtonM>
                </div>
            </form>

            <SocialBlock>
                <p className="line-text">
                    소셜계정으로 로그인
                </p>
            </SocialBlock>

        </LoginFormBlock>
    )
}

export default LoginPage;