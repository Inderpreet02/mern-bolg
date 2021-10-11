import { useState, useEffect} from "react"
import "./Home.css"
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Posts from '../../components/Posts';
import axios from "axios"
import { useLocation } from "react-router-dom";

const Home = () => {
    // eslint-disable-next-line
    const [posts, setPosts] = useState([])
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () =>{
            const res = await axios.get("/posts" + search)
            setPosts(res.data);
        }

        fetchPosts()
    },[search])
    return (
        <div className="home">
            <Header/>
            <div className="test">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </div>
    );
}
 
export default Home;