import AuthForm from "../component/auth/AuthForm";
import logo from '../resources/image/logo/main_logo.png';
import { LandingBlock, LandingTapblock, LandingDecoBlock, LandingInfoBlock,AuthFormBlock } from "./pageResources/LandingResources";


const LandingPage = () => {
    return(
        <LandingBlock>

            {/* 좌측 Landing Page 문구 */}
            <LandingInfoBlock>
                <div className="logo">
                    <img className="logo-icon" src={logo}/>
                </div>

                <h2 className="pre-title">
                    WELCOME TO
                </h2>
                <h1 className="info-title">
                    LABIT
                </h1>
                <p className="info-text">
                    개인적으로 끄적이는 IT Tech Blog 입니다.
                </p>

                {/* AuthForm 교체 버튼 */}
                <LandingTapblock>
                    <p className="switch-button active">
                        로그인
                    </p>
                    <p className="switch-button">
                        가입
                    </p>

                </LandingTapblock>

            </LandingInfoBlock>

            {/* 우측 회원가입 로그인 Form */}
            <AuthFormBlock>
                <AuthForm/>
            </AuthFormBlock>

            {/* 페이지 데코 */}
            <LandingDecoBlock/>


        </LandingBlock>

    );
};

export default LandingPage;