import { useEffect, useState } from "react"
import { GetGene } from "../../apiservice/api"
import {  useNavigate } from "react-router-dom"
import Genresmove from "./ListMovie"


const MoveSection = (props) => {

  const { infomove, setinfomove } = props


  const naviga = useNavigate()
  const [Genres, setgenres] = useState([])
  const [GenresId, setGenresId] = useState("28")

  const [typemove, settypemove] = useState("popularity.desc")
  const [Move, setmove] = useState([])

  const time = new Date()
  console.log("time:", time.getFullYear())
  const [year, setyear] = useState(`${time.getFullYear()}`)



  useEffect(() => {

    Getgenerslist()

  }, [GenresId])
  console.log("GenresId:", GenresId);



  const Getgenerslist = async () => {
    let res = await GetGene()
    setgenres(res.data.genres)
  }





  return (


    <section className="movies">

      {/* <!--
        - filter bar
      --> */}
      <div className="filter-bar">

        <div className="filter-dropdowns">

          <select name="genre" className="genre" onChange={(event) => { setGenresId(event.target.value) }}>
            {/* <option value="all genres">All genres</option> */}

            {Genres && Genres.length > 0


              ? Genres.map((value, index) => {


                return (

                  <option value={value.id} key={value.id}>
                    {value.name}


                  </option>

                )
              })
              :
              <></>


            }

          </select>

          <select name="year" className="year" onChange={(event) => { setyear(event.target.value) }}>

            <option value={time.getFullYear()}>Time - {time.getFullYear()}</option>
            <option value={time.getFullYear() - 1}>Time - {time.getFullYear() - 1}</option>
            <option value={time.getFullYear() - 2}>Time - {time.getFullYear() - 2}</option>
            <option value={time.getFullYear() - 3}>Time - {time.getFullYear() - 3}</option>
            <option value={time.getFullYear() - 4}>Time - {time.getFullYear() - 4}</option>
          </select>

        </div>

        <div className="filter-radios">


          <input type="radio" name="grade" id="popular"
            value="popularity.desc"
            onChange={(e) => { settypemove(e.target.value) }}
            defaultChecked
          />
          <label htmlFor="popular"


          >Popular</label>

          <input type="radio" name="grade" id="featured"


            value="vote_average.desc"
            onChange={(e) => { settypemove(e.target.value) }}

          />
          <label htmlFor="featured"


          >Rating</label>



          <input type="radio" name="grade" id="newest" value="release_date.desc"
            onChange={(e) => { settypemove(e.target.value) }} />
          <label htmlFor="newest"



          >Upcoming</label>

          <div className="checked-radio-bg"></div>

        </div>

      </div>



      {/* <Outlet /> */}

      <Genresmove
        GenresId={GenresId}
        typemove={typemove}
        year={year}
        Move={Move}
        setmove={setmove}


        infomove={infomove}
        setinfomove={setinfomove}




      />


    </section>
  )
}
export default MoveSection;