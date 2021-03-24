import { Multiselect } from 'multiselect-react-dropdown';
import movies from '../../data/movies';

import React, { useState } from 'react';
import "./catList.css";

function CatList() {


    return (
        <div className="CatList">
            <select class="selectpicker" multiple data-live-search="true">
                <option>Mustard</option>
                <option>Ketchup</option>
                <option>Relish</option>
            </select>
        </div>
    );
}

export default CatList;