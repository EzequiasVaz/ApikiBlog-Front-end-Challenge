import { Link } from "react-router-dom";
import './index.css'
import './mediaqueries.css'
export function Header() {
    return (
        <header>
            <nav>
                <Link to='/'><img loading="lazy" src="/src/assets/apikiBlogHeader.svg" alt="Logo da Apiki Blog" /></Link>
                <button className="button-newsletter">Cadastrar email</button>
                <button className="menu-mobile hidden"><img src="/src/assets/List-menu-mobile.svg" alt="menu" /></button>
            </nav>
        </header>
    )
}