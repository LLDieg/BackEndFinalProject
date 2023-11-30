import React from 'react'
import "../style/productsPageStyle.css";


export default function Products() {

  return (
    <> 
    {/* Side Options */}
    <div className="Side-Panel">
        <div className="Side-Option">
          <p>Open Now</p>
          {/* First Slider */}
          <label className="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
        </div>
        <div className="Side-Option">
          <p>Free Delivery</p>
          {/* Second Slider */}
          <label className="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
        </div>
        <div>
          <p>Min-Rating</p>
        </div>
      </div>

      {/* Searchbox Part */}
      <div className="search">
        <input type="text" id="searchbox" name="searchbox" placeholder="Search for a restaurant"/>
      </div>
    </>
  )
}
