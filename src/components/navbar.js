import { NavLink } from "react-router-dom"

export default function NavBar(){
    return (
        <header>
            <div>
                <nav>
                    <NavLink to='/'>
                        Belito
                    </NavLink>
                    <NavLink to="/post">
                        Posts
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}