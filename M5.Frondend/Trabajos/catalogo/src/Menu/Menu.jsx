import './Menu.css'

export default function Menu(){
    return (
    <header>
        <nav>
            <div className='nav-logo-colum'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/763/186/original/valorant-logo-transparent-free-png.png" alt="" width="100px" />
            </div>
            <div className='nav-options-colum'>
                <span>About</span>
                <span>Contacto</span>
                <span>Mas informacion</span>
            </div>
        </nav>
    </header>
    )
}