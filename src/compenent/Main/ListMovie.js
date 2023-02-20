import moment from "moment"
import { useEffect } from "react"
import { GetDiscovery } from "../../apiservice/api"
import { useNavigate } from "react-router-dom"

const Genresmove = (props) => {

    const naviga = useNavigate()
    const { GenresId, typemove, year,
        Move, setmove,
        infomove, setinfomove

    } = props

    const type = "movie"






    useEffect(() => {

        GetGenresmove()


    }, [GenresId, typemove, year])


    const handleClickmove = (idmove, type) => {


        setinfomove([idmove, type])


        naviga("/detail-move")
        window.scroll(0, 0)



    }


    const GetGenresmove = async () => {


        let res = await GetDiscovery(GenresId, typemove, year)

        console.log("res discovery:", res)
        setmove(res.data.results)
    }


    return (
        <>
            <div className="movies-grid">

                {Move && Move.length > 0
                    ? Move.slice(0, 18).map((value, index) => {
                        let date = moment(value.release_date).year()

                        if (value.poster_path != null)


                            return (
                                <div className="movie-card" key={index}

                                    onClick={() => handleClickmove(value.id, type)}

                                >

                                    <div className="card-head">
                                        <img


                                            src={`https://image.tmdb.org/t/p/w342${value.poster_path || value.backdrop_path}`} alt=""
                                            className="card-img"


                                        />



                                        <div className="card-overlay">

                                            <div className="bookmark">
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>

                                            <div className="rating">
                                                <ion-icon name="star-outline"></ion-icon>
                                                <span>{value.vote_average}</span>
                                            </div>

                                            <div className="play">
                                                <ion-icon name="play-circle-outline"></ion-icon>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-title">{value.title}</h3>

                                        <div className="card-info">
                                            <span className="genre">MOVE</span>
                                            <span className="year">  {date}</span>
                                        </div>
                                    </div>

                                </div>


                            )
                    })

                    :
                    <></>

                }

            </div>

            {/* <!--
    - load more button
  --> */}

        </>

    )
}
export default Genresmove