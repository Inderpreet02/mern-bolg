import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./Single.css"

const Single = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const { user } = useContext(Context)
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    

    const handleDelete = async () =>{
        try{
            await axios.delete(`/posts/${post._id}`, {
                data: {username: user.username}
            })
            window.location.replace("/");
        }catch(err){
            console.log(err);
        }
    }

    const handelUpdate = async () =>{
        try{
            await axios.put(`/posts/${post._id}`, {
                username: post.username,
                title,
                desc,
            })

            window.location.reload();

        }catch(err){
            console.log(err);
        }
    }

    useEffect(() =>{
        const getPost = async () =>{
            const res = await axios.get("/posts/" + path)
            // setPost(res.data)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }

        getPost()
    }, [path])
    return (
        <div className="single">
            <div className="single__container">
                {
                    post.photo ? (
                        <img src={post.photo} alt="" />
                    ) : (
                        <img src="https://images.unsplash.com/photo-1623779334213-1fb9f70c4a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="" />
                    )
                }
                <div className="single__info">
                    {
                        updateMode ? (
                            <input type="text" className="updateInput" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
                        ) : (
                            <h2 className="single__heading">
                                {title}
                            </h2>
                        )
                    }

                    {post.username === user?.username && (

                        <div className="single__icons">
                            <span className="single__icon1" onClick={()=>{setUpdateMode(true)}}><i class="far fa-edit"></i></span>
                            <span className="single__icon2" onClick={handleDelete}><i class="far fa-trash-alt"></i></span>
                        </div>
                    )}


                    <div className="single__author">
                        <div className="author">
                            Author: 
                            <Link to={`/?user=${post.username}`} className="link">
                                {post.username}
                            </Link>
                        </div>

                        <div className="single__authorDate">
                            {new Date(post.createdAt).toDateString()}
                        </div>
                    </div>
                </div>

                {
                    updateMode ? (
                        <textarea className="updateText" rows={5} value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
                    ) : (
                        <div className="single__text">
                            {desc}
                        </div>
                    )
                }

                {
                    updateMode && (
                        <button className="single__postBtn" onClick={handelUpdate}>
                            Publish
                        </button>
                    )
                }
            </div>
        </div>
    );
}
 
export default Single;