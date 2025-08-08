import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthPage = () => {
    const [isReg] = useState(false);
    return (
        <div className="auth-page">
            <div className="auth-container">
                
                <div className="auth-forms">
                    {isReg ? (<RegisterForm />) : (<LoginForm />)}
                </div>
            </div>
        </div>
    );
}
export default AuthPage;