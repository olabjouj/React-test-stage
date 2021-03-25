import React, { useState } from 'react';
import movies from "./data/movies";
import CatList from "./components/categoryList/catList";
import Card from "./components/card/card";

function App() {

  const [moviesState, setMoviesState] = useState(movies);
  const [catmovieState, setcatmovieState] = useState(movies);
  
  const deleteCard = (id) => {
  const deleteItem = moviesState.filter(movie => movie.id !== id);
    setMoviesState(deleteItem);
  }
  // const filtCat = (category) => {
  //   const filtItem = catmovieState.filter(movie =>{
  //     return movie.category.indexOf(setcatmovieState)>= 0
  //   } );
  //   setcatmovieState(filtItem);
  //   }
  return (

    <div className="App">
      <div className='container'>
        <div>
          <div><CatList movies={movies}  /></div>
        </div>
        <div className="row row-cols-1 row row-cols-lg-2">
          {moviesState.map((movie) => (
            <Card key={movie.id} movie={movie} delete={deleteCard}  />
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
