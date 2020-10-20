import React from 'react';

function Artikel(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h5>{props.subtitle}</h5>
            <img src={props.foto} height="200px" alt="Gambar Artikel" style={{marginBottom: "10px"}}/>
            <p>{props.desc}</p>
        </div>
    );
}

export default Artikel;