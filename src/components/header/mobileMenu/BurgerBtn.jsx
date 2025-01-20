import './burgerBtn.scss'
import burger from "../../../assets/burger.svg";

function BurgerBtn() {
    const toggleBtnMenu = () => {
        const menuMob = document.querySelector('.mobile-menu')
        menuMob.classList.toggle('hidden')
    }

    return (
        <>
            <button onClick={toggleBtnMenu} className="burgerBtn" type='button'>☰</button>
        </>
    )
}

export default BurgerBtn