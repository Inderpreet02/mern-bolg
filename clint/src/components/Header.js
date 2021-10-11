import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__topText">
                    <div className="header__topTextSml">
                        Me & The Bois
                    </div>

                    <div className="header__topTextLrg">
                        Blog
                    </div>
                </div>

                <img src="https://assets.weforum.org/article/image/MyvZ4Y_1K1LJGaaQQNeLPoAXXiZQytj2eUvnPGkMmS4.jpg" alt="" className="header__containerImg" />
            </div>
        </div>
    );
}
 
export default Header;