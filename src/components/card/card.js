import React, { useState } from 'react';
import "./cardStyle.css";


const Card = (props) => {

    const [moviesState, setMoviesState] = useState(props.movies);
    
    const [Likes, setLikesState] = useState();
    // const [desLikes, setDesLikesState] = useState(moviesState.deslikes);

    // console.log('DesLike', desLikes);
    
    const deleteCard = (id) => {
        
        const deleteItem = moviesState.filter(movie => movie.id !== id);
        setMoviesState(deleteItem);
    }

    const like = (movie) => {
   
        // console.log('je suis like' , moviesState)

        moviesState.map((move)=>{
            console.log('je suis  le movie like' , move.likes);
            if(move.id === movie.id)  {
                setMoviesState()
            }
        })

        movie.likes= movie.likes + 1;
    }

    const desLike = (movie) => {

       movie.deslikes =movie.deslikes + 1;
    }

    return (
        <div className='container'>
            <div className="row row-cols-1 row row-cols-lg-2 " >
                {moviesState.map((movie) => (
                   
                    <div id="card1" className="card text-white bg-dark mb-3">
                        <button type="button" className="btn-close" aria-label="Close" 
                        onClick={() => deleteCard(movie.id)}>X</button>
                        <div className="card-header"><h1>{movie.title}</h1></div>
                        <div className="card-body">
                            <h5 className="card-title">Ctégorie : {movie.category}</h5>
                            <br></br>
                            <div id='like'>
                            <p className="card-text">{movie.likes} Likes</p>
                            <p className="card-text">{movie.dislikes} Dislikes</p>
                            </div>
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button onClick={() => like(movie)} type="button" className="btn btn-danger">Like</button>
                            <button onClick={() => desLike(movie)} type="button" className="btn btn-success">DesLike</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="ui labeled button" tabindex="0">
                <div className="ui red button">
                    <i className="heart icon"></i>
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;"> Aimer</font>
                    </font>
                </div>
                <a className="ui basic red left pointing label">
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        1 048</font>
                    </font>
                </a>
            </div> */}

        </div>

    );
}


export default Card;