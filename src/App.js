import './App.css';
import './assets/css/main.css'
import './assets/css/variable.css'
import './assets/css/media_query.css'
import './assets/css/reset.css'
import './assets/css/notfoud.css'
import './assets/css/detail.css'

import MoveSection from "./compenent/Main/MovieSection"
import Header from './compenent/Header/Header'
import BannerSection from './compenent/Main/BannerSection';
import LiveSection from './compenent/Main/LiveSection';
import Footer from './compenent/Footer/Footer';

import { Route, Router, Routes } from 'react-router-dom';
import Search from './compenent/Main/Search';
import NotFound from './compenent/Main/NotFound';
import Detailmove from './compenent/Main/Detail-movie/Detailmovie';
import { useState } from 'react';



const App = () => {

  const [infomove, setinfomove] = useState([])



  return (
    <div className="App container">

      <Header />

      {/* //............MAIN................ */}
      <main>

        <Routes>

          <Route path='/' element={<BannerSection />} />
          <Route path='/detail-move' element={<Detailmove infomove={infomove} />} />
        </Routes>




        <Routes>

          <Route path='/' element={
            <MoveSection infomove={infomove} setinfomove={setinfomove} />}
          />
          <Route path='/search' element={<Search setinfomove={setinfomove} />} />

          <Route path='search/notfound' element={<NotFound />} />


        </Routes>


        {/* <!-- #CATEGORY SECTIOn --> */}
        <Routes>

          {/* <Route path='/' element={<CategorySection />} /> */}

        </Routes>
        {/* <!--- #LIVE SECTION --> */}
        <LiveSection setinfomove={setinfomove} />
      </main>


      {/* <!--- FOOTER SECTION--> */}
      <Footer />


    </div>
  );
}

export default App;
