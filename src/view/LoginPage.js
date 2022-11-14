import ButtonM from "../component/common/ButtonM";
import {Link} from "react-router-dom";
import kakao from "../resources/image/logo/KakaoTalk_logo.png";
import { FormBoxBlock, SocialBlock, FormBlock } from "./pageResources/LandingFormStyle";


const LoginPage = () => {
    return (
        <FormBlock>
            {/* 폼 상단 애니메이션 */}
            <div className="spinner-box">
                <div className="configure-border-1">
                    <div className="configure-core"></div>
                </div>
                <div className="configure-border-2">
                    <div className="configure-core"></div>
                </div>
            </div>

            {/* 폼 내용 */}
            <FormBoxBlock>
                <h2 className="box-title">
                    계정 로그인
                </h2>

                <form className="login-form">
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>
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

            </FormBoxBlock>
        </FormBlock>
    )
}

export default LoginPage;