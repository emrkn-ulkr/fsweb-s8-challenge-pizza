import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap'
// @ts-ignore
import homeBanners from "../../images/iteration-1-images/Homesss.png";
import { useState } from 'react';
import { CiTwitter } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';

function AnaSayfa() {

    const [selectedKategori, setSelectedKategori] = useState("Ramen");
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/orderFormSonuc");
    }
    const hazirYemekVeri = {
        "Ramen": [
            { img: "../images/ramen/3.jpg", isim: "Ramen-Bol-Soslu", puan: 4.9, yorum: 400, fiyat: "110₺" },
            { img: "../images/ramen/1.jpg", isim: "Ramen-Sade", puan: 4.2, yorum: 628, fiyat: "135₺" },
            { img: "../images/ramen/2.png", isim: "Ramen-Extra", puan: 4.9, yorum: 122, fiyat: "145₺" }
        ],
        "Pizza": [
            { img: "../images/pizza/1.webp", isim: "Pizza-Mantarsız-Kaşarlı", puan: 4.8, yorum: 600, fiyat: "140₺" },
            { img: "../images/pizza/111.jpg", isim: "Pizza-Süperos", puan: 4.4, yorum: 500, fiyat: "135₺" },
            { img: "../images/pizza/3.jpg", isim: "Pizza-Bol-Sucuk-Sever", puan: 4.6, yorum: 150, fiyat: "120₺" }
        ],
        "Burger": [
            { img: "../images/burger/1.webp", isim: "Burger King", puan: 3.1, yorum: 400, fiyat: "180₺" },
            { img: "../images/burger/chese.webp", isim: "Cheese Burger", puan: 2.8, yorum: 320, fiyat: "175₺" },
            { img: "../images/burger/3.webp", isim: "Chedar Burger", puan: 4.7, yorum: 250, fiyat: "150₺" }
        ],
        "French-fries": [
            { img: "../images/patato/1.png", isim: "Küçük Patates", puan: 4.1, yorum: 210, fiyat: "45₺" },
            { img: "../images/patato/3.png", isim: "Orta Patates", puan: 4.0, yorum: 320, fiyat: "115₺" },
            { img: "../images/patato/0.jpg", isim: "Büyük Patates", puan: 3.7, yorum: 270, fiyat: "120₺" }
        ],
        "Fast-Food": [
            { img: "../images/fastfood/11.jpg", isim: "Tekno Special", puan: 2.1, yorum: 2110, fiyat: "35₺" },
            { img: "../images/fastfood/22.jpg ", isim: "Tekno Mega Special", puan: 4.0, yorum: 1220, fiyat: "45₺" },
            { img: "../images/fastfood/33.jpg", isim: "Tekno Elit Special", puan: 5.7, yorum: 2330, fiyat: "25₺" }],
        "Soft-drinks": [
            { img: "../images/drinks/15.jpg", isim: "Soft-Drinks", puan: 3.1, yorum: 210, fiyat: "25₺" },
            { img: "../images/drinks/16.jpg", isim: "Ultra-Soft-Drinks", puan: 2.0, yorum: 120, fiyat: "35₺" },
            { img: "../images/drinks/17.webp", isim: "Mega-Soft-Drinks", puan: 3.7, yorum: 330, fiyat: "15₺" }
        ]

    };
    return (
        <>
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
                        fontWeight: 400, textAlign: "center", color: "yellow", marginBottom: "50px"
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
                        style={{ fontSize: "25px", padding: "10px 30px", marginTop: "10px", marginBottom: "430px", width: "250px", borderRadius: "15px", height: "60px" }}>
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
                            id="YeniKore">
                            <img src="../images/iteration-2-images/icons/1.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Yeni Kore
                        </button>

                        <button className='badge-button'
                            color="white"
                            id="Pizza">
                            <img src="../images/iteration-2-images/icons/2.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Pizza
                        </button>

                        <button className='badge-button'
                            color="white"
                            id="Burger">
                            <img src="../images/iteration-2-images/icons/3.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Burger
                        </button>

                        <button className='badge-button'
                            color="white"
                            id="Kızartmalar">
                            <img src="../images/iteration-2-images/icons/4.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Kızartmalar
                        </button>

                        <button className='badge-button'
                            color="white"
                            id="FastFood">
                            <img src="../images/iteration-2-images/icons/5.svg" alt="makarna" style={{ marginRight: "15px" }} />
                            Fast food
                        </button>

                        <button className='badge-button'
                            color="white"
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
                        <button className='menu-button' onClick={handleClick}>SİPARİŞ VER</button>
                    </article>
                    <article style={{ display: "flex", flexDirection: "column" }}>
                        <article className="menu-right-top">
                            <h4>Hackathlon<br /> Burger Menü</h4>
                            <button className='menu-button' onClick={handleClick}>SİPARİŞ VER</button>
                        </article>
                        <br />
                        <article className="menu-right-bottom">
                            <h4><span style={{ color: "red" }}>Çoooook</span> hızlı<br /> npm gibi kurye</h4>
                            <button className='menu-button' onClick={handleClick}>SİPARİŞ VER</button>
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
                            fontWeight: 400, textAlign: "center", color: "red"
                        }}>en çok paketlenen menüler</h4><br />
                        <h3 style={{ textAlign: "center" }}>Acıktıran Kodlara Doyuran Lezzetler</h3>

                        <br />

                        {/* 2. navbar buttonları burada */}
                        <div className='container-2-navbar'>
                            <button
                                onClick={() => setSelectedKategori("Ramen")}
                                className='container-2-button'
                                style={{ margin: "5px", padding: "10px", backgroundColor: selectedKategori === "Ramen" ? "rgb(255 230 184)" : "white" }}
                            >
                                <img src="../images/iteration-2-images/icons/1.svg" alt="makarna" style={{ marginRight: "15px" }} />
                                Ramen
                            </button>

                            <button
                                onClick={() => setSelectedKategori("Pizza")}
                                className='container-2-button'
                                style={{ margin: "5px", padding: "10px", backgroundColor: selectedKategori === "Pizza" ? "rgb(255 230 184)" : "white" }}
                            >
                                <img src="../images/iteration-2-images/icons/2.svg" alt="makarna" style={{ marginRight: "15px" }} />

                                Pizza
                            </button>

                            <button
                                onClick={() => setSelectedKategori("Burger")}
                                className='container-2-button'
                                style={{ margin: "5px", padding: "10px", backgroundColor: selectedKategori === "Burger" ? "rgb(255 230 184)" : "white" }}
                            >
                                <img src="../images/iteration-2-images/icons/3.svg" alt="makarna" style={{ marginRight: "15px" }} />

                                Burger
                            </button>

                            <button
                                onClick={() => setSelectedKategori("French-fries")}
                                className='container-2-button'
                                style={{ margin: "5px", padding: "10px", backgroundColor: selectedKategori === "French-fries" ? "rgb(255 230 184)" : "white" }}
                            >
                                <img src="../images/iteration-2-images/icons/4.svg" alt="makarna" style={{ marginRight: "15px" }} />

                                French fries
                            </button>

                            <button
                                onClick={() => setSelectedKategori("Fast-Food")}
                                className='container-2-button'
                                style={{ margin: "5px", padding: "10px", backgroundColor: selectedKategori === "Fast-Food" ? "rgb(255 230 184)" : "white" }}
                            >
                                <img src="../images/iteration-2-images/icons/5.svg" alt="makarna" style={{ marginRight: "15px" }} />
                                Fast Food
                            </button>

                            <button
                                onClick={() => setSelectedKategori("Soft-drinks")}
                                className='container-2-button'
                                style={{ margin: "5px", padding: "10px", backgroundColor: selectedKategori === "Soft-drinks" ? "rgb(255 230 184)" : "white" }}
                            >
                                <img src="../images/iteration-2-images/icons/6.svg" alt="makarna" />
                                Soft drinks
                            </button>
                        </div>
                    </header>
                    <br />
                    <br />
                    <footer style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px" }}>
                        {
                            // @ts-ignore
                            hazirYemekVeri[selectedKategori].map((yemek, index) => (
                                <div className='container-2-card' key={index}>
                                    <img src={yemek.img} alt={yemek.isim} style={{ maxWidth: "100%", maxHeight: "150px", objectFit: "cover" }} />
                                    <h6>{yemek.isim}</h6>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", fontSize: "15px" }}>
                                        <span>{yemek.puan}</span>
                                        <span>({yemek.yorum})</span>
                                        <span style={{ fontWeight: "bold" }}>{yemek.fiyat}</span>
                                    </div>
                                </div>
                            ))}
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
                    height: "auto", // yükseklik sabitleme
                    display: "flex",
                    flexDirection: "column", // dikey yön
                    justifyContent: "space-between",
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    textAlign: "left",
                    padding: "40px",
                    boxSizing: "border-box",
                }}
            >
                {/* Üst içerik (3 kolon) */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-around",
                        marginBottom: "40px",
                    }}
                >
                    <div>
                        <h2>Teknolojik <br /> Yemekler</h2>
                        <p className="cursor">
                            <img
                                src="../images/iteration-2-images/footer/icons/icon-1.png"
                                style={{ marginRight: "10px" }}
                            />
                            341 Londonderr Road, <br /> Istanbul Türkiye
                        </p>

                        <p className="cursor">
                            <img
                                src="../images/iteration-2-images/footer/icons/icon-2.png"
                                style={{ marginRight: "10px" }}
                            />
                            aciktim@teknolojikyemekler.com
                        </p>
                        <p className="cursor">
                            <img
                                src="../images/iteration-2-images/footer/icons/icon-3.png"
                                style={{ marginRight: "10px" }}
                            />
                            +90 216 123 45 67
                        </p>
                    </div>

                    <div style={{ marginLeft: "-350px" }}>
                        <h4 style={{ marginBottom: "45px", marginTop: "35px" }}>
                            Sıccacık Menüler
                        </h4>
                        <p className="cursor">Terminal Pizza</p>
                        <p className="cursor">5 Kişilik Hackhatlon Pizza</p>
                        <p className="cursor">useEffect Tavuklu Pizza</p>
                        <p className="cursor">Beyaz Console Frosty</p>
                        <p className="cursor">Testler Geçti Mutlu Burger</p>
                        <p className="cursor">Position Absolute Acı Burger</p>
                    </div>

                    <div>
                        <h5 className="cursor">Instagram</h5>
                        <br />
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "20px",
                            }}
                        >
                            <img
                                className="cursor"
                                src="../images/iteration-2-images/footer/insta/li-0.png"
                            />
                            <img
                                className="cursor"
                                src="../images/iteration-2-images/footer/insta/li-1.png"
                            />
                            <img
                                className="cursor"
                                src="../images/iteration-2-images/footer/insta/li-2.png"
                            />
                            <img
                                className="cursor"
                                src="../images/iteration-2-images/footer/insta/li-3.png"
                            />
                            <img
                                className="cursor"
                                src="../images/iteration-2-images/footer/insta/li-4.png"
                            />
                            <img
                                className="cursor"
                                src="../images/iteration-2-images/footer/insta/li-5.png"
                            />
                        </div>
                    </div>
                </div>

                {/* Alt satır */}
                <hr
                    style={{
                        margin: "0 auto",
                        border: "0",
                        borderTop: "1px solid #444", // görünür çizgi
                        width: "100%",
                    }}
                />

                <div
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <small style={{ marginLeft: "195px" }}>©2023 Teknolojik Yemekler</small>
                    <CiTwitter
                        onClick={() => window.open("https://x.com/xturkiye", "_blank")}
                        style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                </div>
            </footer>
        </ >

    )
}

export default AnaSayfa
