import moment from "moment/moment"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Getsearch } from "../../apiservice/api"
import CustomPagination from "../pagination/CustomPagination"


const Search = (props) => {

    const { setinfomove } = props
    const naviga = useNavigate()
    const keymove = useSelector(state => state.keysearch.keyword)
    const keyendmove = keymove[keymove.length - 1]
    const [searchmove, setsearchmove] = useState([])
    const [page, setpage] = useState(1)
    const [numOfPages, setNumOfPages] = useState();




    useEffect(() => {

        Getsearchmove()
    }, [keyendmove, page])

    const Getsearchmove = async () => {

        let res = await Getsearch(page, keyendmove)
        console.log("data :", res.data)

        if (res.data.results && res.data.results.length > 0) {

            setsearchmove(res.data.results)
            setNumOfPages(res.data.total_pages);
        } else {

            naviga('notfound')

        }
    }

    const handleClickmove = (idmove, type) => {


        setinfomove([idmove, type])


        naviga("/detail-move")
        window.scroll(0, 0)



    }


    return (

        <>



            <section className="movies">

                {/* <!--
  - filter bar
--> */}
                <div className="filter-bar">

                    <div className="filter-dropdowns">
                        Result Found: "{keyendmove}""
                    </div>



                </div>



                {/* <Outlet /> */}
                <div className="movies-grid">

                    {searchmove && searchmove.length > 0
                        ? searchmove.map((value, index) => {


                            let date = moment(value.release_date).year()
                            


                            if (value.poster_path != null || value.backdrop_path != null)

                                return (
                                    <div className="movie-card" key={index}

                                        onClick={() => handleClickmove(value.id, value.media_type)}

                                    >



                                        <div className="card-head">
                                            <img src={`https://image.tmdb.org/t/p/w500${value.poster_path || value.backdrop_path}`} alt="" className="card-img" />



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
                                            <h3 className="card-title">{value.title || value.name}</h3>

                                            <div className="card-info">
                                                <span className="genre">{value.media_type}</span>
                                                <span className="year">{date}</span>
                                            </div>
                                        </div>

                                    </div>


                                )

                        })

                        :
                        <></>

                    }

                </div>

                {numOfPages > 1 && (
                    <CustomPagination setPage={setpage} numOfPages={numOfPages} />
                )}

            </section>






        </>
    )
}

export default Search