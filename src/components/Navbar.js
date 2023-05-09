import Images from "./Images"
import Logo from '../images/ironhack-logo-xs.png'
import Menu from '../images/menu-top-xs.png'

const Navbar= () => {

    return (
   
        <nav>
            <Images source={Logo} specificClass="nav"/>
            <Images source={Menu} specificClass="nav"/>
        </nav>
     
    )
}

export default Navbar