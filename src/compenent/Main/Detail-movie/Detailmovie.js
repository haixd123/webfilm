import moment from 'moment';
import React, { useEffect, useState } from 'react';

import "../../../../node_modules/video-react/dist/video-react.css";
import { GetpageDetail, Getsesion } from '../../../apiservice/api';



const Detailmove = (props) => {
    const { infomove } = props

    const [moveInfo, setmoveInfo] = useState([])

    const [section, setsection] = useState(1)
    const [detailsection, setdetailsection] = useState([])
    const [esp, setesp] = useState(1)

    let date = moment(moveInfo.first_air_date).year()



    useEffect(() => {


        Getinfomove()

        GetsesionTV()


    }, [infomove[0], infomove[1]])

    console.log('a', infomove[0]);




    const Getinfomove = async () => {
        let res = await GetpageDetail(infomove[0], infomove[1])


        console.log("get detail:", res)


        setmoveInfo(res.data)
    }


    const GetsesionTV = async () => {
        let res = await Getsesion(infomove[0], section)


        console.log("get session:", res)


        setdetailsection(res.data.episodes)
    }



    return (

        <>




            <article>



                <section className="movie-detail">


                    <div className="container">

                        <figure className="movie-detail-banner">

                            <img src={`https://image.tmdb.org/t/p/w342${moveInfo.poster_path || moveInfo.backdrop_path}`} alt={moveInfo.name} />

                            <button className="play-btn">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </button>

                        </figure>

                        <div className="movie-detail-content">

                            <p className="detail-subtitle">New Episodes</p>

                            <h1 className="h1 detail-title">
                                {moveInfo.name}
                            </h1>

                            <div className="meta-wrapper">

                                <div className="badge-wrapper">
                                    <div className="badge badge-fill">PG 13</div>

                                    <div className="badge badge-outline">HD</div>
                                </div>

                                <div className="ganre-wrapper">


                                    {moveInfo.genres && moveInfo.genres.length > 0

                                        ? moveInfo.genres.map((genres, i) => {

                                            return (
                                                <span key={i}>{genres.name}</span>

                                            )
                                        })



                                        :
                                        <></>
                                    }

                                </div>

                                <div className="date-time">

                                    <div>
                                        <ion-icon name="calendar-outline"></ion-icon>

                                        <time dateTime="2021">{date}</time>
                                    </div>

                                    <div>
                                        <ion-icon name="time-outline"></ion-icon>

                                        <time dateTime="PT115M">{moveInfo.episode_run_time} min</time>
                                    </div>

                                </div>

                            </div>

                            <p className="storyline">
                                {moveInfo.overview}
                            </p>

                            <div className="details-actions">

                                <button className="share">
                                    <ion-icon name="share-social"></ion-icon>

                                    <span>Share</span>
                                </button>

                                <div className="title-wrapper">
                                    <p className="title">Prime Video</p>

                                    <p className="text">Streaming Channels</p>
                                </div>

                                <button className="btn btn-primary">
                                    <ion-icon name="play"></ion-icon>

                                    <span>Watch Now</span>
                                </button>

                            </div>



                        </div>

                    </div>


                </section>






            </article>









            <div className="move-container" id="page-player">
                <div className="box-player" id="box-player">
                    <div id="player">


                        <div id="player-area">

                            {infomove[1] == "movie" ?
                                <>

                                    <iframe style={{ 'width': "100%", 'height': "82%" }} src={`https://www.2embed.to/embed/tmdb/movie?id=${infomove[0]}&autoplay=1`}
                                        frameBorder="0" scrolling="no" allowFullScreen="" allow="autoplay"></iframe>

                                    <div className="film-notes" style={{ "marginBottom": "20px", "border": "1px solid #B8B612", "padding": "5px" }}>Phim Xem
                                        tốt nhất trên trình duyệt Safari,FireFox hoặc Chrome. Đừng tiếc 1 comment bên dưới để đánh giá
                                        phim hoặc báo lỗi. Đổi server nếu lỗi, lag</div>

                                </>
                                :

                                <>
                                    <iframe style={{ 'width': "100%", 'height': "65%" }} src={`https://www.2embed.to/embed/tmdb/tv?id=${infomove[0]}&s=${section}&e=${esp}`}
                                        frameBorder="0" scrolling="no" allowFullScreen="" allow="autoplay"></iframe>



                                    <div className="film-note" style={{ "marginBottom": "20px", "border": "1px solid #B8B612", "padding": "5px" }}>Phim Xem
                                        tốt nhất trên trình duyệt Safari,FireFox hoặc Chrome. Đừng tiếc 1 comment bên dưới để đánh giá
                                        phim hoặc báo lỗi. Đổi server nếu lỗi, lag</div>

                                    <div className="list-server" id="list-server">


                                        <div className="server-group clearfix">
                                            <span><i className="fa fa-database"></i> Danh sách tập Vietsub #1</span>
                                            <ul className="episodes">


                                                {


                                                    detailsection && detailsection.length > 0
                                                        ? detailsection.map((epi, index) => {

                                                            return (
                                                                <>

                                                                    <li
                                                                        onClick={() => setesp(epi.episode_number)}><a
                                                                            title="Xem phim Cậu Út Nhà Tài Phiệt Tập 16" className="">{epi.episode_number}</a></li>




                                                                </>
                                                            )
                                                        })

                                                        :

                                                        <></>
                                                }





                                            </ul>
                                        </div>
                                    </div>



                                </>


                            }

















                        </div>
                    </div>

                </div>


            </div>








        </>


    )
}
export default Detailmove