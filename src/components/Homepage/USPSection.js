import "./USPSection.css"

const USPSection = () => {
    return (
        <div className="root">
            <hr className="styled-rule"/>
            <h1>Grow with us</h1>
            <p className="paragraph">Come aboard to the ONDC travel company & unfold infinte possibilities of growth.</p>
            <div className="top-section">
                <div>
                    <h3>Partnering with us Easy, Fun & Rewarding</h3>
                    <p>Listing your property with us means better discoverability, </p>
                    <p>more bookings higher revenues.</p>
                </div>
                <div>
                    <h3>Hassle-free Sign Up</h3>
                    <p>Finish your registration in 3-simple steps on our intuitive </p>
                    <p>host platform and go live.</p>
                </div>
            </div>
            <div className="bottom-section">
                <div>
                    <h3>Prices & Payment</h3>
                    <p>Set your own prices and enjoy real-time payments on</p>
                    <p>confirmed bookings. It's that easy.</p>
                </div>
                <div>
                    <h3>24*7 Support</h3>
                    <p>When in doubt, just reach out to us. We are always </p>
                    <p>available to address your concerns. </p>
                </div>
            </div>
        </div>
    )
}

export default USPSection;