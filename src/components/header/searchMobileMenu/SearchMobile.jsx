import './searchMobile.scss'
import search from "../../../assets/magnifying-glass-search.svg";
function SearchMobile() {

    const toggleBtn = () => {
        const input = document.querySelector('.inputMob')
        input.classList.toggle('active')
    }

    return (
        <>
            <div className="search">
                <input className='inputMob' type="text" placeholder="Search..."/>
                <button onClick={toggleBtn} className="search-btn">
                    <img className="search__img" src={search} alt="Searh glass"/>
                </button>
            </div>
        </>
    )
}

export default SearchMobile