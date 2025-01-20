import './header.scss'
import Link from "./link/Link.jsx";
import SearchBtn from "./searche/SearchBtn.jsx";
import LinkModal from "./linkModal/LinkModal.jsx";
import BurgerBtn from "./mobileMenu/BurgerBtn.jsx";
import SearchMobile from "./searchMobileMenu/SearchMobile.jsx";
import LinkMobileModal from "./linkMobileModal/LinkMobileModal.jsx";
function Header() {
    return (
        <header className="header">
                <nav className="menu">
                    <div className="menu__logo">
                        <Link text='Logo'/>
                    </div>

                    <div className="menu__user">
                            <Link text='Home'/>
                            <LinkModal text='About' a1='Team' a2='History' a3='Careers'/>
                            <LinkModal text='Services' a1='Web Design' a2='SEO' a3='Marketing'/>
                            <Link text='Contact'/>
                            <Link text='Blog'/>
                            <Link text='Portfolio'/>
                            <Link text='Support'/>
                            <Link text='FAQ'/>
                            <Link text='Pricing'/>
                            <SearchBtn/>
                    </div>
                </nav>

                <nav className="mobile-menu__logo">
                    <Link text='Logo'/>
                    <BurgerBtn/>
                </nav>
                <div className="mobile-menu hidden">
                            <div className="menu-user">
                                <Link text='Home'/>
                                <LinkMobileModal text='About' a1='Team' a2='History' a3='Careers'/>
                                <LinkMobileModal text='Services' a1='Web Design' a2='SEO' a3='Marketing'/>
                                <Link text='Contact'/>
                                <Link text='Blog'/>
                                <Link text='Portfolio'/>
                                <Link text='Support'/>
                                <Link text='FAQ'/>
                                <Link text='Pricing'/>
                                <SearchMobile/>
                            </div>
                </div>
        </header>
    )
}

export default Header