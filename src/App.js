import React, { useState, useEffect } from 'react';
import movies from "./data/movies";
import CatList from "./components/categoryList/catList";
import Card from "./components/card/card";
import Pagination from "./components/pagination";


function App() {
  // const filtrcat = props.filter;
  const [moviesState, setMoviesState] = useState(movies);
  const [showedMovies, setShowedMovies] = useState(moviesState);
  const [filtredMovies, setFiltredMovies] = useState(moviesState);
  const [filterCategoryList, setFilterCategoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nbElement, setNbElement] = useState(4);


  useEffect(() => {
    applyFilter(filterCategoryList);
  }, [moviesState]);

  useEffect(() => {
    applyPagination(currentPage, nbElement);
  }, [filtredMovies]);


  const deleteCard = (id) => {
    const newMovies = moviesState.filter(movie => movie.id !== id);
    setMoviesState(newMovies);
  }

  const applyFilter = (categoryList) => {
    console.log('apply filter -- filtred');
    setFilterCategoryList(categoryList);
    setCurrentPage(1);
    if (categoryList.length > 0) {
      setFiltredMovies(moviesState.filter(movie => categoryList.includes(movie.category)));
    } else {
      setFiltredMovies(moviesState);
    }
  }

  const applyPagination = (currentPage, nbElement) => {
    setCurrentPage(currentPage);
    setNbElement(nbElement);
    const movieInCurrentPage = filtredMovies.slice((currentPage * nbElement) - nbElement, currentPage * nbElement);
    console.log('apply pagination -- showed', movieInCurrentPage, currentPage, nbElement);
    setShowedMovies(movieInCurrentPage);
  }

  return (

    <div className="App">

      <div className='container'>
        <div><CatList movies={moviesState} filter={applyFilter} /></div>
        <div className="row row-cols-1 row row-cols-lg-2">
          {showedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} delete={deleteCard} />
          ))}
        </div>
        <Pagination key="pagination"
          movies={filtredMovies}
          apply={applyPagination}/>


      </div>
    </div >
  );
}

export default App;
