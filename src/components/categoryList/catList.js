import React, { useState } from 'react';
import movies from '../../data/movies';
import "./catList.css";


function CatList(props) {
    const categorylist = new Set();
    for (var i = 0; i < props.movies.length; i++) {
        categorylist.add(props.movies[i].category)
    }
    // const filtrFunction = props.filtCat;
    return (
        <div>
            <div class="list-group"> 
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox">
                       
                        </input>
                        {categorylist}</label>
            </div>

        </div>
    );
}

export default CatList;


