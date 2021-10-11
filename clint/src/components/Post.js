import "./Post.css"
import {Link} from "react-router-dom"

const Post = ({post}) => {
    return (
        <div className="post">
            <div className="post__container">
                {post.photo ? (
                    <img src={post.photo} alt="" />
                ) : (
                    <img src="https://blog-assets.hootsuite.com/wp-content/uploads/2022/03/free-stock-photo-sites-7-620x414.jpg" alt="" />
                )
            }
                
                <div className="post__info">
                    <div className="posts__genres">
                        {post.categories.map(cat=>(
                            <span className="post__genre">{cat.name}</span>
                        ))}

                    </div>

                    <h2 className="post__heading">
                        <Link className="link" to={`/post/${post._id}`}>
                            {post.title}
                        </Link>
                    </h2>

                    <p className="post__time">
                        {new Date(post.createdAt).toDateString()}
                    </p>

                    <p className="post__description">
                        {post.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Post;