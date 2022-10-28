import 'animate.css';

export default function NavComponent({showMenu, setShowMenu}){
    

    const clickHandler = () => {
        setShowMenu(!showMenu);
    }
    return (
        <nav className="nav">
            <div>
                <img src="/assets/images/logo.svg" alt="" />
            </div>
            <div className="desktop-nav">
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
            <div className="mobile-nav" onClick={clickHandler}>
                <img src="/assets/images/icon-menu.svg" alt="" />
            </div>
            {showMenu ? (
                <div className="inner-menu">
                    <img src="/assets/images/icon-menu-close.svg" alt="" className='close' onClick={clickHandler} />
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>New</li>
                            <li>Popular</li>
                            <li>Trending</li>
                            <li>Categories</li>
                        </ul>
                    </div>
                </div>
            ): ""}
        </nav>
    )
}