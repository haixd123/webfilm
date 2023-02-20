const BannerSection = () => {

    return (
        <section className="banner">
            <div className="banner-card">

                <img src='../images/John-Wick-3.jpg' className="banner-img" alt="" />

                <div className="card-content">
                    <div className="card-info">

                        <div className="genre">
                            <ion-icon name="film"></ion-icon>
                            <span>Action/Thriller</span>
                        </div>

                        <div className="year">
                            <ion-icon name="calendar"></ion-icon>
                            <span>2019</span>
                        </div>

                        <div className="duration">
                            <ion-icon name="time"></ion-icon>
                            <span>2h 11m</span>
                        </div>

                        <div className="quality">4K</div>

                    </div>

                    <h2 className="card-title">John Wick: Chapter 3 - Parabellum</h2>
                </div>

            </div>
        </section>

    )
}

export default BannerSection