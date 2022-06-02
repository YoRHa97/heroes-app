import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../constants/types";

export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'FooBarBaz',
 		        email: 'foo@bar.baz',
            }
        });
        const lastpath = localStorage.getItem('lastpath') || '/';
        navigate(lastpath, {replace: true});
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button onClick={handleLogin} className="btn btn-primary">
                Login
            </button>
        </div>
    );
};
