import { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./Profile.css"
import axios from "axios"

const Profile = () => {
    const { user, dispatch } = useContext(Context)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false);

    const handleDelete = async () =>{
        try {
            await axios.delete(`/users/${user._id}`, {
                data: {
                    userId : user._id,
                }})
                .then(
                    dispatch({
                        type:"LOGOUT"
                    })
                )
            window.location.replace("/posts");
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();

        const userUpdate = {
            userId: user._id,
            username,
            email,
            password,
        }

        try {
            const res = await axios.put("/users/" + user._id, userUpdate);
            setSuccess(true);
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="profile">
            <div className="profile__top">
                <div className="profile__heading">
                    Update Your Account
                </div>
                <div className="profile__delete" onClick={handleDelete}>
                    Delete Account
                </div>
            </div>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="form__picInput">
                    <img src="https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2019/04/boy-hugging-cactus.jpg?resize=1024%2C1024&ssl=1" alt="" className="profile__img" />
                    <span>
                        <label htmlFor="form__uploadPic"><i class="profile__icon fas fa-user-circle"></i></label>
                        <input type="file" id="form__uploadPic" style={{display: "none"}} />
                    </span>
                </div>

                <div className="form__input">
                    <label className="profile__username1" htmlFor="profile__username">Username</label>
                    <input type="text" placeholder={user?.username} onChange={(e)=>{setUsername(e.target.value)}} name="profile__usename" id="profile__usename" />
                </div>

                <div className="form__input">
                    <label className="profile__email1" htmlFor="profile__email">Email</label>
                    <input type="email" placeholder={user?.email} onChange={(e)=>{setEmail(e.target.value)}} name="profile__email" id="profile__email" />
                </div>

                <div className="form__input">
                    <label className="profile__password1" htmlFor="profile__password">Password</label>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="profile__password" id="profile__password" />
                </div>

                <div className="form__btn">
                    <button className="form__submit" type="submit">Update</button>
                </div>

                {
                    success && (
                        <div className="form__success">
                            User Has Been Updated!!!!!
                        </div>
                    )
                }
            </form>
        </div>
    );
}
 
export default Profile;