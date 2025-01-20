import './searchBtn.scss'
import searchGlass from "../../../assets/magnifying-glass-search.svg";
import {useState} from "react";

function SearchBtn() {
    const toggleBtn = () => {
        const input = document.querySelector('.input')
        input.classList.toggle('active')
    }

    return (
            <div className="wrapper">
                <input className='input' type="text" placeholder='Searche...'/>
                <button onClick={toggleBtn}  className="search__btn">
                    <img src={searchGlass} alt="Magnifying Glass"/>
                </button>
            </div>
    )
}

export default SearchBtn