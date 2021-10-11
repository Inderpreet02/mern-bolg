import { useContext, useState } from "react"
import "./Write.css"
import axios from "axios"
import { Context } from "../../context/Context"

const Write = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const {user} = useContext(Context)


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        }

        try{
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/"+res.data._id)
        }catch(err){
            console.log(err);
        }

        
    }

    return (
        <div className="write">
            <div className="write__img">
                <img src="https://assets.entrepreneur.com/content/3x2/2000/20150225224437-computer.jpeg?width=700&crop=2:1" alt="" />                
            </div>
            <form className="write__form" onSubmit={handleSubmit}>
                <div className="write__formContainer">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus write__icon"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)} autoFocus={true} className="write__input" />
                </div>
                <div className="write_formTextarea">
                    <textarea placeholder="Tell your story..." value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" rows={7} className="write__text"></textarea>
                </div>
                <button className="write__btn" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}
 
export default Write;