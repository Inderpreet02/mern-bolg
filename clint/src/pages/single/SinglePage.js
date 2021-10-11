import "./SinglePage.css"
import Single from "../../components/Single";
import Sidebar from "../../components/Sidebar";

const SinglePage = () => {
    return (
        <div className="singlePage">
            <Single/>
            <Sidebar/>
        </div>
    );
}
 
export default SinglePage;