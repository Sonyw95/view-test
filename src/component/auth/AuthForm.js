import LoginPage from "../../view/LoginPage";
import RegisterPage from "../../view/RegisterPage";

const AuthForm = ({type}) => {

  return (
      <>
          {type === 'login' &&(<LoginPage/>)}

          {type === 'register' &&(<RegisterPage/>)}
      </>
  )
};

export default AuthForm;