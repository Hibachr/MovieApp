/* eslint-disable no-unused-vars */
import React from 'react';
import "../Movies-body/Mbody.css";
import "../Homepage-body/Body.css";

function Mbody (){
    return(
        <div className="Mbody-container">
        <div>
            <h1>Movies</h1>
           <div id='search-inp'>
             <input type="text" name="Search Movies or TV Shows" id='search'  placeholder="Search Movies or TV Shows"  />
        </div>
        <p><a href="all" id='label'>120 items</a></p>
        </div>
        <div className='cards-div'>
            <div className='card' id='c1'><div className='title'>Black Widow</div></div>
            <div className='card' id='c2'><div className='title'>Shang Chi</div></div>
            <div className='card' id='c3'><div className='title'>Loki</div></div>
            <div className='card' id='c4'><div className='title'>How I Met Your Mother</div></div>
            <div className='card' id='c5'><div className='title'>Money Heist</div></div>
            <div className='card' id='c6'><div className='title'>Friends</div></div>
            <div className='card' id='c7'><div className='title'>The Big Bang Theory</div></div>
            <div className='card' id='c8'><div className='title'>Two And a Half Men</div></div>
        </div>
       
    </div>
    )
}
export default Mbody;