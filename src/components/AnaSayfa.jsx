import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Badge, Button } from 'reactstrap'
import homeBanners from "/images/iteration-1-images/Homesss.png";
import { pointer } from '@testing-library/user-event/dist/cjs/pointer/index.js';

function AnaSayfa() {
    const [yemekler, setYemekler] = useState([
        { isim: "Ramen", siparis: 12, icon: "../images/iteration-2-images/icons/1.svg" },
        { isim: "Pizza", siparis: 15, icon: "../images/iteration-2-images/icons/2.svg" },
        { isim: "Burger", siparis: 20, icon: "../images/iteration-2-images/icons/3.svg" },
        { isim: "Kızartmalar", siparis: 10, icon: "../images/iteration-2-images/icons/4.svg" },
        { isim: "Fast Food", siparis: 5, icon: "../images/iteration-2-images/icons/5.svg" },
        { isim: "Gazlı İçecek", siparis: 18, icon: "../images/iteration-2-images/icons/6.svg" },
    ]);
    const siraliYemekler = [...yemekler].sort((a, b) => b.siparis - a.siparis);
    const history = useHistory();
    const handleClick = () => {
        history.push("/orderFormSonuc")
    }
    return (
        <div>
            <header>
                <div className='AnaSayfa-div'
                    style={{
                        backgroundImage: `url(${homeBanners})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100vh",
                        width: "100%",          // 100vw yerine 100%
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        textAlign: "center"
                    }}>
                    <Button
                        onClick={handleClick}
                        color="warning"
                        style={{ fontSize: "25px", padding: "10px 30px", marginTop: "5px", marginBottom: "175px", width: "250px", borderRadius: "15px" }}>
                        ACIKTIM
                    </Button>
                </div>
            </header>
            <br />
            <br />
            <main style={{ backgroundColor: "#fffff9" }}>
                <nav>
                    <div className='home-Icons-buttons'>
                        <button className='badge-button'
                            color="white"
                            pill
                            id="YeniKore">
                            <img src="../images/iteration-2-images/icons/1.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Yeni Kore
                        </button>

                        <button className='badge-button'
                            color="white"
                            pill
                            id="Pizza">
                            <img src="../images/iteration-2-images/icons/2.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Pizza
                        </button>

                        <button className='badge-button'
                            color="white"
                            pill
                            id="Burger">
                            <img src="../images/iteration-2-images/icons/3.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Burger
                        </button>

                        <button className='badge-button'
                            color="white"
                            pill
                            id="Kızartmalar">
                            <img src="../images/iteration-2-images/icons/4.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Kızartmalar
                        </button>

                        <button className='badge-button'
                            color="white"
                            pill
                            id="FastFood">
                            <img src="../images/iteration-2-images/icons/5.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Fast food
                        </button>

                        <button className='badge-button'
                            color="white"
                            pill
                            id="Gazlıİçecek">
                            <img src="../images/iteration-2-images/icons/6.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Gazlı İçecek
                        </button>
                    </div>

                </nav>
                <br />
                <br />
                <section className="menu-container-card">
                    <article className="menu-left">
                        <h2>Özel<br /> Lezzetus</h2>
                        <p>Position: Absolute Acı Burger</p>
                        <button className='menu-button'>SİPARİŞ VER</button>
                    </article>
                    <article style={{ display: "flex", flexDirection: "column" }}>
                        <article className="menu-right-top">
                            <h4>Hackathlon<br /> Burger Menü</h4>
                            <button className='menu-button'>SİPARİŞ VER</button>
                        </article>
                        <br />
                        <article className="menu-right-bottom">
                            <h4><span style={{ color: "red" }}>Çoooook</span> hızlı<br /> npm gibi kurye</h4>
                            <button className='menu-button'>SİPARİŞ VER</button>
                        </article>
                    </article>
                </section>
                <br />
                <br />
                <br />
                <br />
                <section className='menu-container-second'>
                    <header>
                        <h4 style={{
                            fontFamily: "'Dancing Script', cursive",
                            fontStyle: 'italic',
                            fontWeight: 400, fontStyle: "italic", textAlign: "center", color: "red"
                        }}>en çok paketlenen menüler</h4><br />
                        <h3 style={{ textAlign: "center" }}>Acıktıran Kodlara Doyuran Lezzetler</h3>

                        <br />

                        <div className='container-2-navbar'>
                            {siraliYemekler.map((yemek) => (
                                <button className='container-2-button' key={yemek.isim} style={{ margin: "5px", padding: "10px" }}>
                                    <img src={yemek.icon} alt={yemek.isim} style={{ marginRight: "15px" }} />{yemek.isim}
                                </button>
                            ))}
                        </div>

                    </header>

                    <br />

                </section>
            </main>


        </div >

    )
}

export default AnaSayfa
