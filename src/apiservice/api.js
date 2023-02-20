
import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e"


const GetGene = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US`)
}

const GetTVSHowpopular = () => {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${Api_key}&language=en-US&page=2`)
}


const Getsearch = (page, keyword) => {

    return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${Api_key}&language=en-US&page=${page}&include_adult=false&query=${keyword}`)
}
const Getgenres = () => {

    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US`)
}

const GetDiscovery = (GenresId, typemove, year) => {

    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=en-US&sort_by=${typemove}&include_adult=false&include_video=false&page=1&with_genres=${GenresId}&primary_release_year=${year}`)
}


const GetMoveDetail = (id) => {


    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a8a6fa2f944128e9712135bc3ca000b1`)
}

const GetpageDetail = (id, media_type) => {
    return axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${Api_key}`)

}

const Getsesion = (id, ss) => {

    return axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${ss}?api_key=${Api_key}&language=en-US`)
}

export {


    GetGene, GetTVSHowpopular, Getsearch,
    Getgenres, GetDiscovery, GetMoveDetail,
    GetpageDetail, Getsesion
}

