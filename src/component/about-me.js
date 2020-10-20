import React from 'react';
import FotoProfil from '../assets/profil.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <img src={FotoProfil} height="200px" alt="Foto Irfaul" style={{marginBottom: "10px"}}/>
                <p>Nama Saya adalah Irfaul, peserta pelatihan IT Perbankan Thematic Academy Front End UI DTS 2020</p>
            </div>
        );
    }
}

export default AboutMe;