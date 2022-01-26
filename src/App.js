import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Recipetile from './recipe-tile/Recipetile';

function App() {

  const YOUR_APP_ID = "7184cf21";
  const YOUR_APP_KEY = "a9337d6a73353c7c9921eb69850b411c";
  const [query, setQuery] = useState('');
  const [healthLabel, setHealthLabel] = useState('vegetarian');
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  // const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading
    getRecipeInfo();
  };

  return (
    <div className='app'>

      <h1 onClick={getRecipeInfo}><u>Food recipe hub</u>🍱</h1>

      <form className='app__searchForm' onSubmit={onSubmit}>
      
        <input type='text'
               placeholder='Type the ingredient'
               autoComplete='Off'
               className='app__input'
               value={query}
               onChange={(e) => {setQuery(e.target.value)}}
             />

        <select className='app__healthLabels'>
          <option value='vegan'
           onClick={ ()=>{setHealthLabel('vegan')} }>Vegan</option>
          <option value='vegetarian'
           onClick={ ()=>{setHealthLabel('vegetarian')} }>Vegetarian</option>
          <option value='low-sugar' 
          onClick={ ()=>{setHealthLabel('low-sugar')} }>low-sugar</option>
          <option value='dairy-free' 
          onClick={ ()=>{setHealthLabel('dairy-free')} }>dairy-free</option>
          <option value='imuno-supportive' 
          onClick={ ()=>{setHealthLabel('imuno-supportive')} }>imuno-supportive</option>
          <option value='wheat-free' 
          onClick={ ()=>{setHealthLabel('wheat-free')} }>wheat-free</option>
        </select>

        <input type='submit' value='Get recipe' className='app__submit'/>

      </form>  {/* className='app__searchForm' */}

      <div className='app__recipes'>
        {recipes.map((recipe) => {
          return <Recipetile recipe={recipe}/>
        })}
      </div>

    </div> // className='app'
  );
}

export default App;
