import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';
import './Menu.css';

import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Objetiflix logo"/> 
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

// Anotação: Para conseguir importar este arquivo em outros lugares, precisamos primeiro exporta-lo!
export default Menu;