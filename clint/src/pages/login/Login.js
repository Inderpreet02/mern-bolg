import "./Login.css"
import {Link} from "react-router-dom"
import { useContext, useRef } from "react"
import { Context } from "../../context/Context"
import axios from "axios"

const Login = () => {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        } catch (error) {
            dispatch({type: "LOGIN_FALIURE"})
        }
    }

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__header">
                    Login
                </h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__formInput">
                        <label className="login__email">Username</label>
                        <input ref={userRef} type="text" className="login__email1" placeholder="Enter your email.."  />
                    </div>

                    <div className="login__formInput">
                        <label className="login__password">Password</label>
                        <input ref={passwordRef} type="password" className="login__password1" placeholder="Enter your password.."  />
                    </div>

                    <button className="form__loginBtn test__btn" type="submit" disabled={isFetching}>
                        Login
                    </button>

                </form>
                <Link to="/register">
                    <button className="form__RegisterBtn">
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
}
 
export default Login;