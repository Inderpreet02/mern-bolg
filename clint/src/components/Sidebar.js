import axios from "axios";
import { useEffect, useState } from "react";
import "./Sidebar.css"
import {Link} from "react-router-dom"

const Siderbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const getCategories = async () =>{
            const res = await axios.get("/categories")
            setCategories(res.data)
        }

        getCategories();

    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__top">
                    About Me
                </div>

                <img className="sidebar__img" src="https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg" alt="" />
                
                <div className="sidebar__mainText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis non, eius quidem minima adipisci quam ipsam laborum temporibus ea pariatur praesentium corrupti dignissimos ipsa quasi odio eligendi deleniti incidunt! Qui.
                </div>

                <div className="sidebar__options">
                    <h2>Categories</h2>
                    <ul>
                        {
                            categories.map((cat) =>(
                                <li className="sidebar__option">
                                    <Link to={`?cat=${cat.name}`} className="link">
                                        {cat.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="sidebar__follow">
                    <h2>FOLLOW US</h2>
                    <div className="sidebar__icons">
                        <i className="fab fa-facebook-square sideIcon"></i>
                        <i className="fab fa-instagram-square sideIcon"></i>
                        <i className="fab fa-twitter-square sideIcon"></i>
                        <i className="fab fa-discord sideIcon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Siderbar;