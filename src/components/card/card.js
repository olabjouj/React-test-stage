import React, { useState } from 'react';
import "./cardStyle.css";


const Card = (props) => {

    const movie = props.movie;
    const deleteFunction = props.delete;

    const [Likes, setLikesState] = useState(movie.likes);
    const [dislikes, setDesLikesState] = useState(movie.dislikes);

    const like = () => {
        const likesDone = Likes + 1;
        setLikesState(likesDone);
    }

    const desLike = () => {
        const dislikesDone = dislikes + 1;
        setDesLikesState(dislikesDone);
    }

    return (
        <div className="card mb-2 mt-2">
            <div className="card-header">
                <div className="row">
                    <div className="col-10">
                        <h2>{movie.title}</h2>
                    </div>
                    <div className="col-2 text-center">
                        <i className="far fa-trash-alt fa-lg delete-icon" onClick={() => deleteFunction(movie.id)}></i>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Ctégorie : {movie.category}</h5>
                <br></br>
                <div id='like'>
                    <p className="card-text">{Likes} Likes</p>
                    <p className="card-text">{dislikes} Dislikes</p>
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button onClick={() => like()} type="button" className="btn btn-danger">Like</button>
                <button onClick={() => desLike()} type="button" className="btn btn-success">DesLike</button>
            </div>
        </div>
    );
}


export default Card;