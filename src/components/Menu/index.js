import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Objetiflix logo"/> 
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

// Anotação: Para conseguir importar este arquivo em outros lugares, precisamos primeiro exporta-lo!
export default Menu;