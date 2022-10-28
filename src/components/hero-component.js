export default function HeroComponent(){
    return (
        <section className="hero">
            <div className="item">
                <img src="/assets/images/image-web-3-mobile.jpg" alt="" className="img-mobile" />
                <img src="/assets/images/image-web-3-desktop.jpg" alt="" className="img-desktop" />
            </div>
            <div className="item">
                <h1 className="hero-title">The Bright Future of Web 3.0?</h1>
            </div>
            <div className="item">
                <p className="hero-text">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className="hero-btn">read more</button>
            </div>
            <div className="dark dark-item">
                <div className="dark-inner">
                    <h1>New</h1>
                    <div className="dark-inner-div">
                        <h2>Hydrogen VS Electric Cars</h2>
                        <p>Will hydrogen-fueled cars ever catch up to EV's?</p>
                    </div>
                    <div className="dark-inner-div">
                        <h2>The Downsides of AI Artistry</h2>
                        <p>What are the possible adverse effects of on-demand AI image generation   ?</p>
                    </div>
                    <div className="dark-inner-div">
                        <h2>Is VC Funding Drying Up?</h2>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}