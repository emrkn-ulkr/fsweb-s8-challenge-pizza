import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "reactstrap"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CiTwitter } from 'react-icons/ci';
import { useNavigate } from "react-router-dom";


export default function OrderForm() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [hamur, setHamur] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [not, setNot] = useState("");
    const [count, setCount] = useState(1);
    const [size, setSize] = useState("M");
    const [allTotal, setAllTotal] = useState(0);
    const [pizzaAdetFiyat, setPizzaAdetFiyat] = useState(110.50);
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Tüm alanların doldurulup doldurulmadığını kontrol et
        if (!size) {
            alert("Lütfen pizza boyutunu seçin!");
            return;
        }

        if (!hamur) {
            alert("Lütfen hamur türünü seçin!");
            return;
        }

        if (checkedItems.length === 0) {
            alert("Lütfen en az bir ek malzeme seçin!");
            return;
        }

        // Eğer tüm alanlar doldurulduysa yönlendir
        navigate("/lastStage", {
            state: {
                pizzaSize: size,
                checkedItems: checkedItems,
                hamur: hamur,
                ekMalzemeUcretToplamı: totalPrice,
                allTotal: allTotal,
                not: not
            }
        });
    };


    // @ts-ignore
    const handleChange = (event) => {
        const { name, value, checked } = event.target;

        // Hamur seçimi için
        if (name === "hamur") {
            setHamur(value);
            return;
        }

        if (checked) {
            if (checkedItems.length < 10) {
                const updated = [...checkedItems, name];
                // @ts-ignore
                setCheckedItems(updated);
                setTotalPrice(updated.length * 5);
            } else {
                alert("Maksimum 10 adet ek malzeme seçebilirsiniz ⚠️");
            }
        } else {
            // @ts-ignore
            const updated = checkedItems.filter(item => item !== name);
            // @ts-ignore
            setCheckedItems(updated);
            setTotalPrice(updated.length * 5);
        }
    };

    useEffect(() => {
        setAllTotal(count * pizzaAdetFiyat + totalPrice);
    }, [count, totalPrice, pizzaAdetFiyat]);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev > 1 ? prev - 1 : 1)
    }


    return (
        <div>

            <header className='orderForm-header'>

                <div>
                    <h1 className='orderForm-header-h1'>Teknolojik Yemekler</h1>
                    <img className='orderForm-header-img' src='../images/iteration-2-images/pictures/form-banner.png' />

                    <nav className='orderForm-header-nav'>
                        <Link to="/" className="orderForm-header-link">Anasayfa -</Link>
                        <Link to="/orderFormSonuc" className="orderForm-header-link"> Seçenekler -</Link>
                        <Link to="/lastStage" className="red"> Sipariş Oluştur</Link>

                    </nav>
                    <br />
                    <br />
                    <br />

                    <h3 className="orderForm-header-h3">Position Absolute Acı Pizza</h3>
                </div>

                <main>
                    <div className="orderForm-header-main-div">
                        <span className="orderForm-hM-left-span">85.50₺</span>
                        <span className="orderForm-hM-weakText">4.9</span>
                        <span className="orderForm-hM-right-span orderForm-hM-weakText">(200)</span>
                    </div>
                </main>

                <footer className="orderForm-header-footer">
                    <p className='orderForm-header-footer-p'>Forntent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.</p>
                </footer>
            </header>

            <main className="orderForm-main">

                <header className="orderForm-main-header">

                    <div className="orderForm-main-header-div">
                        <h3 className='bottomPush'>Boyut Seç<span className="star-red">*</span> </h3>
                        <h3 className='bottomPush'>Hamur Seç<span className="star-red">*</span> </h3>
                    </div>

                    <div className="orderForm-main-header-div-2">
                        <Button style={{ backgroundColor: size === "S" ? "green" : "beige" }} className="beige" color="beige" onClick={() => setSize("S")}>
                            S
                        </Button>

                        <Button style={{ backgroundColor: size === "M" ? "green" : "beige" }} className="beige" color="beige" onClick={() => setSize("M")}>
                            M
                        </Button>

                        <Button style={{ backgroundColor: size === "L" ? "green" : "beige" }} className="beige rightPush" color="beige" onClick={() => setSize("L")}>
                            L
                        </Button>
                        {
                            // hamur türü
                        }
                        <FormControl className='orderForm-main-header-formcontrol'>
                            <InputLabel id="demo-simple-select-label">Hamur Seçiniz</InputLabel>
                            <Select
                                name='hamur'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={hamur}
                                label="Hamur Seçiniz"
                                onChange={handleChange}>
                                <MenuItem value={"İp ince hamur"}>İnce Hamur</MenuItem>
                                <MenuItem value={"Orta hamur"}>Orta Hamur</MenuItem>
                                <MenuItem value={"Kalın"}>Kalın Hamur</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </header>

                <main>
                    <div className='orderForm-main-main-header-div'>
                        <h3 className='rightPush2'>Ek Malzemeler</h3>
                        <p className='rightPush3'>En fazla 10 malzeme seçebilirsiniz. Adet: 5₺</p>
                    </div>

                    <div className='orderForm-main-main-div' >
                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Sosis" checked={checkedItems.includes("Sosis")} onChange={handleChange} />}
                            label="Sosis" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Kanada-Jambonu" checked={checkedItems.includes("Kanada-Jambonu")} onChange={handleChange} />}
                            label="Kanada-Jambonu" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Tavuk-Izgara" checked={checkedItems.includes("Tavuk-Izgara")} onChange={handleChange} />}
                            label="Tavuk-Izgara" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Soğan" checked={checkedItems.includes("Soğan")} onChange={handleChange} />}
                            label="Soğan" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Domates" checked={checkedItems.includes("Domates")} onChange={handleChange} />}
                            label="Domates" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Mısır" checked={checkedItems.includes("Mısır")} onChange={handleChange} />}
                            label="Mısır" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Sucuk" checked={checkedItems.includes("Sucuk")} onChange={handleChange} />}
                            label="Sucuk" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Jalepeno" checked={checkedItems.includes("Jalepeno")} onChange={handleChange} />}
                            label="Jalepeno" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Sarımsak" checked={checkedItems.includes("Sarımsak")} onChange={handleChange} />}
                            label="Sarımsak" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Biber" checked={checkedItems.includes("Biber")} onChange={handleChange} />}
                            label="Biber" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Ananas" checked={checkedItems.includes("Ananas")} onChange={handleChange} />}
                            label="Ananas" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Kabak" checked={checkedItems.includes("Kabak")} onChange={handleChange} />}
                            label="Kabak" />
                    </div>
                    <footer>
                        <div>
                            <h3 className='orderForm-main-footer-h3'>Sipariş Notu</h3>
                            <textarea
                                className='orderForm-main-footer-textarea'
                                rows={2}
                                cols={65}
                                value={not}
                                placeholder='Siparişine eklemek istediğin bir not var mı ?'
                                onChange={(e) => setNot(e.target.value)} />
                        </div>

                        <br />
                        <br />
                        <hr className='orderForm-hr' />
                        <br />
                        <br />

                        <div className='orderForm-main-footer-general-div'>
                            <div className='orderForm-main-footer-buttons-div'>
                                <Button onClick={decrement} className='orderForm-main-footer-button'>-</Button>
                                <Button className='orderForm-main-footer-button'>{count}</Button>
                                <Button onClick={increment} className='orderForm-main-footer-button'>+</Button>
                            </div>

                            <div className='orderForm-main-footer-div-2'>
                                <h4 className='pushTop colorBlack'>Sipariş Toplamı</h4>
                                <p className='pushTop font-Weak '>Seçimler <span className='pushLeft'>25.00₺</span></p>
                                <p className='pushTop colorRedBold' >Toplam <span className='pushLeft'>110.50₺</span></p>
                            </div>
                        </div>

                        <div>
                            <button onClick={handleSubmit} className='orderForm-main-footer-div-button'>Sipariş Ver</button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </footer>
                </main>
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

        </div>

    )
}

