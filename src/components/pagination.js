import React, { useState, useEffect } from 'react';

function Pagination(props) {
    const apply = props.apply;
    const [elementParPage, setElelementParPage] = useState(props.nbElement | 4);
    const [selectedPage, setSelectedPage] = useState(props.currentPage | 1);

    console.log('--', props.resetPage)
    if (props.resetPage) {

        setSelectedPage(1);
    }

    useEffect(() => {
        apply(selectedPage, elementParPage);
    }, [selectedPage, elementParPage]);


    const calculatPages = (movies) => {
        const p = [];
        for (let i = 1; i <= Math.ceil(movies.length / elementParPage); i++) {
            p.push(i);
        }
        return p;
    }

    const movies = props.movies;

    const pages = calculatPages(movies);


    const handleChange = (event) => {
        setElelementParPage(event.target.value);
        setSelectedPage(1);
    }
    const goToNext = (event) => {
        if (selectedPage < pages.length) {
            setSelectedPage(selectedPage + 1);
        }
    }
    const goToPres = (event) => {
        if (selectedPage > 1) {
            setSelectedPage(selectedPage - 1);
        }
    }

    return (
        <div className="row mt-3">
            <div className="col-md-6 offset-2 ">
                <ul className="pagination">
                    <li className={`page-item ${selectedPage === 1 ? "disabled" : ""}`}
                        onClick={goToPres} key="prev">
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    {pages.map((p) => (
                        <li className={`page-item ${selectedPage === p ? "active" : ""}`}
                            key={p}>
                            <a className="page-link" href="#">{p}</a>
                        </li>
                    ))}
                    <li className={`page-item ${selectedPage === pages.length ? "disabled" : ""}`}
                        onClick={goToNext} key='next' >
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-2 form-group">
                <select className="form-control" value={elementParPage} onChange={handleChange}>
                    <option value='4'>4</option>
                    <option value='8'>8</option>
                    <option value='12'>12</option>
                </select>
            </div>
        </div>

    );
}
export default Pagination;

