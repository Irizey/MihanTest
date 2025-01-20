import './footer.scss'
import Link from "../header/link/Link.jsx";
function Footer() {
    return (
        <>
            <footer className="footer">
                <p className='copyright'>© 2024 Your Website |</p>
                <Link text='Privacy Policy'/>
            </footer>
        </>
    )
}

export default Footer