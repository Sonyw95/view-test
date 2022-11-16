import ButtonM from "../component/common/ButtonM";
import {Link} from "react-router-dom";
import kakao from "../resources/image/logo/KakaoTalk_logo.png";
import { FormBoxBlock, SocialBlock, FormBlock } from "./pageResources/Style/LandingFormStyle";
import React from "react";


const RegisterPage = () => {
    return (
        <FormBlock>

            <div className="spinner-box">
                <div className="configure-border-1">
                    <div className="configure-core"></div>
                </div>
                <div className="configure-border-2">
                    <div className="configure-core"></div>
                </div>
            </div>


            <FormBoxBlock>

                <h2 className="box-title">
                    회원가입
                </h2>

                <SocialBlock>
                    <p className="line-text">
                        소셜계정으로 인증하기
                    </p>

                    <div className="social-links">
                        <Link to="/">
                            <div className="social-link div-kakao">
                                <img className="img-kakao" src={kakao}/>
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="social-link div-facebook" >
                                <svg className="icon-facebook">
                                    <use href="#svg-facebook"></use>
                                </svg>
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="social-link div-youtube" >
                                <svg className="icon-youtube">
                                    <use href="#svg-youtube"></use>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </SocialBlock>


                <form className="login-form">
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="nickName">NickName</label>
                        <input type="text" id="nickName" name="nickName"/>
                    </div>

                    <div className="form-row space-between">
                        <div className="space-item"/>
                        <div className="space-item">
                        </div>
                    </div>

                    <div className="form-row">
                        <ButtonM>회원가입!</ButtonM>
                    </div>
                </form>

            </FormBoxBlock>
        </FormBlock>
    )
}

export default RegisterPage;