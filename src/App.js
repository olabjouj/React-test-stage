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
        <div className="mt-4 mb-3">
          <CatList key="catList" movies={moviesState} filter={applyFilter} />
        </div>
        <div className="row">
          <div className="row col-md-10 offset-md-1">
            {showedMovies.map((movie) => (
              <div className="col-md-6" key={`card-${movie.id}`}>
                <Card key={movie.id} movie={movie} delete={deleteCard} />
              </div>
            ))}
          </div>
        </div>
        <Pagination key="pagination"
          movies={filtredMovies}
          apply={applyPagination} />
      </div>
    </div >
  );
}

export default App;
