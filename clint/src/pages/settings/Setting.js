import "./Setting.css"
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";

const Setting = () => {
    return (
        <div className="settings">
            <Profile/>
            <Sidebar/>
        </div>
    );
}
 
export default Setting;