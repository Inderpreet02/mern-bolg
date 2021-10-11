import { useState } from "react";
import "./Register.css"
import {Link} from "react-router-dom"
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false)
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })

            res.data && window.location.replace("/login")
        } catch(err){
            setError(true)
        }
                
    }

    return (
        <div className="register">
            <div className="register__container">
                <h1 className="register__heading">
                    Register
                </h1>
                <form className="register__form" onSubmit={handleSubmit}>

                    <div className="register__formInput">
                        <label className="register__username">Username</label>
                        <input  className="register__username1" value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Enter your Username.."  />
                    </div>

                    <div className="register__formInput">
                        <label className="register__email">Email</label>
                        <input  className="register__email1" value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter your email.."  />
                    </div>

                    <div className="register__formInput">
                        <label className="register__password">Password</label>
                        <input  className="register__password1" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter your password.."  />
                    </div>

                    <button className="form__registerBtn2">
                        Register
                    </button>
                    {error && <span style= {{color: "red"}}>Something Went Wrong</span>}

                </form>
                    <Link to="/login" className='link'>
                        <button className="form__loginBtn2">
                                Login
                        </button>
                    </Link>
                
            </div>
        </div>
    );
}
 
export default Register;