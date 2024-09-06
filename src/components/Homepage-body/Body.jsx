/* eslint-disable no-unused-vars */
import React from 'react';
import "../Homepage-body/Body.css";
import { useNavigate } from 'react-router-dom';


function Body () {
    const navigate = useNavigate();

  const goToMovies = () => {
    navigate('/movies'); 
  };
  const goToTvShows = () => {
    navigate('/tvshows'); 
  };
    return (
        <div className="body-container">
            <div>
                <h1>MaileHereko</h1>
                <p className='desc'>List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉</p>
               <div id='search-div'>
                 <input type="text" name="Search Movies or TV Shows" id='search'  placeholder="Search Movies or TV Shows"  />
            </div>
            <div className='categories'>
                <button id='all' className='btn' >All</button>
                <button className='btn' onClick={goToMovies}>Movies</button>
                <button className='btn'onClick={goToTvShows}>TV Shows</button>
            </div>
            <h3><a href="all" id='all-label'>All <span>(120)</span></a></h3>
            </div>
            <div className='cards'>
                <div className='card' id='c1'><div className='title'>Black Widow</div></div>
                <div className='card' id='c2'><div className='title'>Money Heist</div></div>
                <div className='card' id='c3'><div className='title'>Shang Chi</div></div>
                <div className='card' id='c4'><div className='title'>Friends</div></div>
                <div className='card' id='c5'><div className='title'>Loki</div></div>
                <div className='card' id='c6'><div className='title'>The Big Bang Theory</div></div>
                <div className='card' id='c7'><div className='title'>How i met your mother</div></div>
                <div className='card' id='c8'><div className='title'>Two And a Half Men</div></div>
            </div>
        </div>
    )
}
export default Body;