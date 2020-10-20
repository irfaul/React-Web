import React from 'react';
import './App.css';
import gpenanggungan from './assets/gunung1.jpg';
import gsumbing from './assets/gunung2.jpg';

import Jumbotron from './component/jumbotron';
import NavBar from './component/navbar';
import AboutMe from './component/about-me';
import Links from './component/links';
import Artikel from './component/artikel';
import Footer from './component/footer';

class App extends React.Component {
  render() {
    const deskripsi = {
      penanggungan : "Saya melakukan pendakian gunung penanggungan dengan ketinggian 1700 mdpl tahun lalu dengan seorang teman saya. pendakian dimulai pada pagi hari pukul 9 pagi dengan estimasi perjalanan sampai puncak adalah 3,5 jam. sampai dipuncak pada pukul 12.30 WIB istirahat 1 jam kemudian dilanjutkan perjalanan turun sekitar 2 jam. sore hari pukul 4 sore sudah berada di basecamp lagi.",
      sumbing : "Saya melakukan pendakian gunung sumbing dengan ketinggian 3300 mdpl 5 tahun lalu bersama 3 teman saya. jalur yang kami lewati yaitu jalur mangli kaliangkrik magelang. jalur ini masih baru sehingga suasana masih asri karena jarang dilewati pendaki. saat di pos 4 kami memutuskan untuk mendirikan tenda dan saat pagi hari melihat sunrise yang sangat indah dan lautan awan didepan tenda."
    }
    return (
      <div className="App">
        <Jumbotron/>
        <NavBar/>
        <div className="container" style={{marginTop: "30px"}}>
          <div className="row">
            <div className="col-sm-4">
              <AboutMe/>
              <Links/>
            </div>
            <div class="col-sm-8">
              <Artikel 
                title="Mendaki Gunung Penanggungan" 
                subtitle="Mojokerto, 20 Juli 2019"
                foto={gpenanggungan}
                desc={deskripsi.penanggungan}/>
              <br/>
              <Artikel 
                title="Mendaki Gunung Sumbing" 
                subtitle="Magelang, 5 Agustus 2015"
                foto={gsumbing}
                desc={deskripsi.sumbing}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
