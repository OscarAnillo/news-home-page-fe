export default function NavComponent(){
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
            <div className="mobile-nav">
                <img src="/assets/images/icon-menu.svg" alt="" />
            </div>

        </nav>
    )
}