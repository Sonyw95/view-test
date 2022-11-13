import AuthForm from "../component/auth/AuthForm";
import logo from '../resources/image/logo/main_logo.png';
import { LandingBlock, LandingTapblock, LandingDecoBlock, LandingInfoBlock,AuthFormBlock } from "./pageResources/LandingStyle";
import React, {useReducer} from 'react';
import LandingModal from "../component/common/LandingModal";
import {Link} from "react-router-dom";

function reducer(state, action){

    switch(action.type){
        case 'REGISTER':
            return {login: !state, register: state, modal:true,};
        case 'LOGIN':
            return {login: state, register: !state,};
        case 'CLOSE':
            return{login: state.login, register: state.register, modal:false,};
        default:
            return;
    }
}

const LandingPage = () => {

    const [state, dispatch] = useReducer(reducer,{
        login: true,
        register: false,
        modal: false,
        isOath: false,
    });


    return(

        <LandingBlock>
            <p>{state.isOath}</p>
            {state.modal&& (<LandingModal open={state.modal} onClose={ () => dispatch({ type: 'CLOSE'})}/>)}
            {/* 좌측 Landing Page 문구 */}
            <LandingInfoBlock>
                <Link to="/">
                    <div className="logo">
                            <img className="logo-icon" src={logo}/>
                    </div>

                    <h2 className="pre-title">
                        WELCOME TO
                    </h2>
                    <h1 className="info-title">
                        LABIT
                    </h1>
                </Link>
                <p className="info-text">
                    개인적으로 끄적이는 IT Tech Blog 입니다.<br/>
                    소셜계정으로 회원가입 및 로그인을 권장합니다.
                </p>

                {/* AuthForm 교체 버튼 */}
                <LandingTapblock>
                    <p className={"switch-button " +  ( state.login? "active" : null) }  onClick={ () => dispatch({ type:'LOGIN' })} >
                        로그인
                    </p>
                    <p className={"switch-button " +  ( state.register? "active" : null) } onClick={ () => dispatch({ type:'REGISTER' })} >
                        가입
                    </p>

                </LandingTapblock>

            </LandingInfoBlock>

            {/* 우측 회원가입 로그인 Form */}
            <AuthFormBlock>
                <AuthForm type={ state.login? 'login': 'register'}/>
            </AuthFormBlock>

            {/* 페이지 데코 */}
            <LandingDecoBlock/>


        </LandingBlock>

    );
};

export default LandingPage;