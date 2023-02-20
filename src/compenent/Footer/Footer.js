const Footer = (props) => {

    return (

        <footer>

            <div className="footer-content">

                <div className="footer-brand">
                    <img src="../images/logo.png" alt="" className="footer-logo" />
                    <p className="slogan">Movies & TV Shows, Online cinema,
                        Movie database HTML Template.</p>


                    <div className="social-link">

                        <a href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-tiktok"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>

                    </div>
                </div>


                <div className="footer-links">
                    <ul>

                        <h4 className="link-heading">CineFlix</h4>

                        <li className="link-item"><a href="#">About us</a></li>
                        <li className="link-item"><a href="#">My profile</a></li>
                        <li className="link-item"><a href="#">Pricing plans</a></li>
                        <li className="link-item"><a href="#">Contacts</a></li>

                    </ul>

                    <ul>

                        <h4 className="link-heading">Browse</h4>

                        <li className="link-item"><a href="#">Live Tv</a></li>
                        <li className="link-item"><a href="#">Live News</a></li>
                        <li className="link-item"><a href="#">Live Sports</a></li>
                        <li className="link-item"><a href="#">Streaming Library</a></li>

                    </ul>

                    <ul>

                        <li className="link-item"><a href="#">TV Shows</a></li>
                        <li className="link-item"><a href="#">Movies</a></li>
                        <li className="link-item"><a href="#">Kids</a></li>
                        <li className="link-item"><a href="#">Collections</a></li>

                    </ul>

                    <ul>

                        <h4 className="link-heading">Help</h4>

                        <li className="link-item"><a href="#">Account & Billing</a></li>
                        <li className="link-item"><a href="#">Plans & Pricing</a></li>
                        <li className="link-item"><a href="#">Supported devices</a></li>
                        <li className="link-item"><a href="#">Accessibility</a></li>

                    </ul>
                </div>

            </div>

            <div className="footer-copyright">

                <div className="copyright">
                    <p>&copy; copyright 2021 CineFlix</p>
                </div>

                <div className="wrapper">
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms and conditions</a>
                </div>

            </div>

        </footer>
    )
}
export default Footer