import "./TopBar.css"
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { Context } from "../context/Context";

const TopBar = () => {

    const {user, dispatch} = useContext(Context)

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className="topBar">
            <div className="topBar__container">
                <div className="topBar__left">
                    <i className="fab fa-facebook-square top__icon"></i>
                    <i className="fab fa-instagram-square top__icon"></i>
                    <i className="fab fa-twitter-square top__icon"></i>
                    <i className="fab fa-discord top__icon"></i>
                </div>

                <div className="topBar__center">
                    <ul className="top__options">
                        <li className="top__option">
                            <Link to="/" className="link">HOME</Link>
                        </li>
                        <li className="top__option"><Link to="/" className="link">ABOUT</Link></li>
                        <li className="top__option"><Link to="/" className="link">CONTACT</Link></li>
                        <li className="top__option"><Link to="/create" className="link">WRITE</Link></li>
                        <li className="top__option"><Link to="/" onClick={handleLogout} className="link">LOGOUT</Link></li>
                    </ul>
                </div>

                <div className="topBar__right">

                    {!user ? (
                        <>
                            <Link to="/login" className="link top__option">LOGIN</Link>
                            <Link to="/register" className="link top__option">REGISTER</Link>
                        </>
                    ) : (
                        <Link to="/settings" className="link "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP5eAwK2TQnhHHCIMswM_TvuchZQCLHLsAg&usqp=CAU" alt="" className="top__img" /></Link>
                        
                    )
                    }
                    <i class="fas fa-search "></i>
                </div>
            </div>

        </div>
    );
}
 
export default TopBar;