import React from 'react';
import './style.css';

const Recipetile = ({recipe}) => {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (

      <div className='recipeTile'>

          {/* <h1>Recipe tile</h1> */}
          <img className='recipeTile__image' 
               src={recipe["recipe"]["image"]} 
               alt='tile-image'
               onClick={()=> window.open(recipe["recipe"]["url"])}
          />
          <p className='recipeTile__name'>{recipe["recipe"]["label"]}</p>

      </div>)
  );
}

export default Recipetile;


