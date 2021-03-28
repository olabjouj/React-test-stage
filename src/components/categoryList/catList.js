import React, { useState } from 'react';
// import movies from "./data/movies";
import "./catList.css";
import { Multiselect } from 'multiselect-react-dropdown';


function CatList(props) {
    const applyFilter = props.filter;
    const categorylist = new Set();

    for (var i = 0; i < props.movies.length; i++) {
        categorylist.add(props.movies[i].category)
    }

    const categorymap = [];
    categorylist.forEach(category => categorymap.push({ "category": category }))


    const filter = (selectedList) => {
        applyFilter(selectedList.map((elem) => elem.category));
    }
    return (
        <div>
            <Multiselect options={categorymap}
                displayValue='category'
                onSelect={filter}
                onRemove={filter}
                placeholder="Selectionnez vos catégories préférées" />
        </div>
    );
}

export default CatList;


