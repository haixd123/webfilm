import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetTVSHowpopular } from "../../apiservice/api"

const LiveSection = (props) => {


    const naviga = useNavigate()
    const { setinfomove } = props


    const [TVshow, setTVshow] = useState([])

    const type = "tv"

    useEffect(() => {

        GetTVshow()
    }, [])





    const GetTVshow = async () => {

        let res = await GetTVSHowpopular()
        setTVshow(res.data.results)

    }

    const handleClickmove = (idmove, type) => {


        setinfomove([idmove, type])



        naviga("/detail-move")
        window.scroll(0, 0)



    }





    return (

        <section className="live" id="live">

            <h2 className="section-heading">Live Tv Shows</h2>

            <div className="live-grid">

                {TVshow && TVshow.length > 0

                    ? TVshow.slice(0, 3).map((value, index) => {
                        if (value.backdrop_path != null)

                            return (

                                <div className="live-card" key={index}


                                    onClick={() => handleClickmove(value.id, type)}
                                >

                                    <div className="card-head">
                                        <img src={`https://image.tmdb.org/t/p/w342${value.backdrop_path}`} alt="" className="card-img" />
                                        <div className="live-badge">LIVE</div>
                                        <div className="total-viewers">{value.popularity}K viewers</div>
                                        <div className="play">
                                            <ion-icon name="play-circle-outline"></ion-icon>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <img src={`https://image.tmdb.org/t/p/w342${value.backdrop_path}`} alt="" className="avatar" />
                                        <h3 className="card-title">{value.name}
                                            {/* <br /> Season 1 - Islands */}
                                        </h3>
                                    </div>

                                </div>



                            )
                    })

                    :
                    <></>
                }



            </div>

        </section>
    )
}
export default LiveSection