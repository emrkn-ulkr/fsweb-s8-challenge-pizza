import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button } from 'reactstrap'
import homeBanners from "/images/iteration-1-images/Homesss.png";
import { useState } from 'react';
import { CiTwitter } from "react-icons/ci";

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
                        textAlign: "center",
                    }}>
                    <h2 style={{
                        fontFamily: "'Dancing Script', cursive",
                        fontStyle: 'italic',
                        fontWeight: 400, fontStyle: "italic", textAlign: "center", color: "yellow", marginBottom: "50px"
                    }}>fırsatı kaçırma</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        onClick={handleClick}
                        color="warning"
                        style={{ fontSize: "25px", padding: "10px 30px", marginTop: "5px", marginBottom: "430px", width: "250px", borderRadius: "15px", height: "60px" }}>
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
                            <img src="../images/iteration-2-images/icons/6.svg" alt="makarna" />
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
                    <br />
                    <footer style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px" }}>
                        <div className='container-2-card'>
                            <img src="../images/iteration-2-images/pictures/food-1.png" />
                            <h6 style={{ marginRight: "155px" }}>Terminal Pizza</h6>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", fontSize: "15px" }}>
                                <span>4.9</span> <span>(200)</span> <span style={{ fontWeight: "bold" }}>60₺</span>
                            </div>
                        </div>

                        <div className='container-2-card'>
                            <img src="../images/iteration-2-images/pictures/food-2.png" />
                            <h6 style={{ marginRight: "75px" }}>Position Absolue Acı Pizza</h6>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", fontSize: "15px" }}>
                                <span>4.9</span> <span>(928)</span> <span style={{ fontWeight: "bold" }}>85₺</span>
                            </div>
                        </div>

                        <div className='container-2-card'>
                            <img src="../images/iteration-2-images/pictures/food-3.png" />
                            <h6 style={{ marginRight: "85px" }}>useEffect Tavuklu Burger</h6>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", fontSize: "15px" }}>
                                <span>4.9</span> <span>(462)</span> <span style={{ fontWeight: "bold" }}>75₺</span>
                            </div>
                        </div>
                    </footer>
                    <br />
                    <br />
                    <br />
                    <br />
                </section>
            </main>
            <footer
                style={{
                    width: "100%",
                    height: "450px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    textAlign: "left",
                    padding: "40px",
                    boxSizing: "border-box"
                }}>
                <div>
                    <h2>Teknolojik <br /> Yemekler</h2>
                    <p>
                        <img
                            src="../images/iteration-2-images/footer/icons/icon-1.png"
                            style={{ marginRight: "10px" }}
                        />
                        341 Londonderr Road, <br /> Istanbul Türkiye
                    </p>

                    <p>
                        <img
                            src="../images/iteration-2-images/footer/icons/icon-2.png"
                            style={{ marginRight: "10px" }}
                        />
                        aciktim@teknolojikyemekler.com
                    </p>
                    <p> <img
                        src="../images/iteration-2-images/footer/icons/icon-3.png"
                        style={{ marginRight: "10px" }} />
                        +90 216 123 45 67</p>
                </div>


                <div style={{ marginLeft: "-455px" }}>
                    <h4 style={{ marginBottom: "45px", marginTop: "35px" }}>Sıccacık Menüler</h4>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackhatlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>


                <div>
                    <h5>Instagram</h5>
                    <br />
                    <div style={{
                        display: "grid",           // grid düzeni
                        gridTemplateColumns: "repeat(3, 1fr)", // 3 sütun
                        gap: "20px",               // aralarındaki boşluk
                    }}>
                        <img src="../images/iteration-2-images/footer/insta/li-0.png" />
                        <img src="../images/iteration-2-images/footer/insta/li-1.png" />
                        <img src="../images/iteration-2-images/footer/insta/li-2.png" />
                        <img src="../images/iteration-2-images/footer/insta/li-3.png" />
                        <img src="../images/iteration-2-images/footer/insta/li-4.png" />
                        <img src="../images/iteration-2-images/footer/insta/li-5.png" />
                    </div>
                </div>

            </footer>
            <hr style={{ margin: "0 auto", border: "0", height: "1px" }} />

            <div style={{ backgroundColor: "#1a1a1a", color: "white" }}>
                <small style={{ marginLeft: "400px" }}>©2023 Teknolojik Yemekler</small> <CiTwitter style={{ marginTop: "-25px", marginLeft: "1500px", fontSize: "30px" }} />

            </div>
        </div >

    )
}

export default AnaSayfa
