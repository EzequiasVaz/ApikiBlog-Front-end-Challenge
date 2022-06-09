import { Link } from "react-router-dom";
import './index.css'
import './mediaqueries.css'
export function Header() {
    return (
        <header>
            <nav>
                <Link to='/'><img loading="lazy" src="https://raw.githubusercontent.com/EzequiasVaz/ApikiBlog/4c299e02025bc050aa111f7b710719ccbb3af675/src/assets/apikiBlogHeader.svg?token=ANAGLU2HYLNZGM3WLKWHVCTCUGKFW" alt="Logo da Apiki Blog" /></Link>
                <button className="button-newsletter">Cadastrar email</button>
                <button className="menu-mobile hidden"><img src="https://raw.githubusercontent.com/EzequiasVaz/ApikiBlog/4c299e02025bc050aa111f7b710719ccbb3af675/src/assets/List-menu-mobile.svg?token=ANAGLU2DU4QHZBQDFHMQYEDCUGKOK" alt="menu" /></button>
            </nav>
        </header>
    )
}