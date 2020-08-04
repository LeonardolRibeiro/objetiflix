import React from 'react';

function ButtonLink(props) {
    // props => {className: "classe que será passada", href="/"}

    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;