import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div>
            <header>
                <div className='navBar'>
                    <Link to={`Inicio`} className='navItem'>INICIO</Link>
                    <Link to={`Sobre`} className='navItem'>SOBRE</Link>
                    <Link to={`Contato`} className='navItem'>CONTATO</Link>
                </div>
            </header>
            <body>
                <Outlet />
            </body>
        </div>
    )
}






                    // <span className='navItem' href='#'>HOME</span>
                    // <span className='navItem' href='/Sobre'>SOBRE</span>
                    // <span className='navItem' href='#'>CONTATO</span>