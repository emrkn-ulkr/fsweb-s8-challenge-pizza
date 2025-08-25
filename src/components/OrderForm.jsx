import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, ButtonGroup, FormFeedback, FormGroup, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function OrderForm() {

    const [selected, setSelected] = useState([]);
    const [valid, setValid] = useState([]);
    const [formData, setFormData] = useState({
        dough: "",
        check: false,
        size: "",
        name: "",
        quantity: 1
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://reqres.in/api/pizza",
                {
                    ...formData,
                    toppings: selected
                },
                {
                    headers: {
                        "x-api-key": "reqres-free-v1"
                    }
                }
            );

            console.log("✅ Sipariş Özeti:", response.data);
        } catch (error) {
            console.error("❌ Sipariş gönderilemedi:", error);
        }
    };



    const foodsOption = [
        "Pepperoni", "Domates", "Biber", "Sosis", "Mısır",
        "Sucuk", "Kanada Jambonu", "Ananas", "Tavuk Izgara",
        "Jalepeno", "Kabak", "Soğan", "Sarımsak"
    ];

    const handleChange = (foodsOp) => {
        if (selected.includes(foodsOp)) {
            setSelected(selected.filter((item) => item !== foodsOp));
        } else {
            if (selected.length < 10) {
                setSelected([...selected, foodsOp]);
            } else {
                alert("En fazla 10 adet seçim yapabilirsiniz.");
                setValid(false);
            }
        }
    };

    return (

        <div>
            <form onSubmit={handleSubmit}>

                <header>
                    <div>
                        <h1>Teknolojik yemekler</h1>
                        <nav>
                            <Link>Anasayfa</Link>-
                            <Link>Seçenekler</Link>-
                            <Link>Sipariş Oluştur</Link>
                        </nav>
                    </div>
                </header>

                <main>
                    <div>
                        <h2>
                            Position Absolute Acı Pizza <span>4.9</span> <span>(200)</span>
                        </h2>
                        <p>
                            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış , daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen , genellikle yuvarlak , düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir.. Küçük pizzaya bazen pizzetta denir.
                        </p>

                        <div>
                            <h3>Boyut Seç<span style={{ color: "red" }}>*</span></h3>

                            <label>
                                <input
                                    type="radio"
                                    name="radio"
                                    value="kucuk"
                                    checked={formData.size === "kucuk"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, size: e.target.value })
                                    }
                                />
                                Küçük
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="radio"
                                    value="orta"
                                    checked={formData.size === "orta"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, size: e.target.value })
                                    }
                                />
                                Orta
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="radio"
                                    value="buyuk"
                                    checked={formData.size === "buyuk"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, size: e.target.value })
                                    }
                                />
                                Büyük
                            </label>

                            {/* Hata mesajı */}
                            {formData.size === "" && (
                                <div style={{ color: "red", marginTop: 5 }}>
                                    Lütfen bir boyut seçin.
                                </div>
                            )}
                        </div>

                        <div>
                            <h3>Hamur seç<span style={{ color: "red" }}>*</span></h3>
                            <select
                                value={formData.dough}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setFormData({
                                        ...formData,
                                        dough: value,
                                        check: value !== ""
                                    });
                                }}
                            >
                                <option value="" disabled hidden>Hamur Kalınlığı</option>
                                <option value="ince">İnce</option>
                                <option value="orta">Orta</option>
                                <option value="kalin">Kalın</option>
                            </select>
                        </div>
                        <FormGroup>
                            <Label>Ek Malzemeler (4-10 seçin)</Label>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "10px",
                                }}
                            >
                                {foodsOption.map((foodsOp) => (
                                    <label
                                        key={foodsOp}
                                        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selected.includes(foodsOp)}
                                            onChange={() => handleChange(foodsOp)}
                                        />
                                        <span style={{ marginLeft: 8 }}>{foodsOp}</span>
                                    </label>
                                ))}
                            </div>

                            {selected.length < 4 || selected.length > 10 && (
                                <div style={{ color: "red", marginTop: 5 }}>
                                    Lütfen en az 4 ve en fazla 10 malzeme seçin. Şu anda: {selected.length}
                                </div>
                            )}
                        </FormGroup>
                    </div>
                </main>

                <article>
                    <h3>İsminiz</h3>
                    <label>
                        <input
                            type='text'
                            placeholder='İsminizi Giriniz'
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </label>

                    {/* Hata mesajı */}
                    {formData.name.trim().length < 3 && (
                        <div style={{ color: "red", marginTop: 5 }}>
                            Lütfen en az 3 karakter giriniz.
                        </div>
                    )}
                </article>

                <footer>
                    <div>
                        <h3>Sipariş Notu</h3>
                        <label style={{ width: "100%" }}>
                            <textarea style={{ width: "500px" }} rows={"1"} placeholder='Siparişine eklemek istediğin bir not var mı?' ></textarea>
                        </label>
                    </div>

                    <hr style={{ width: "500px", margin: "20px auto" }} />

                    <div>
                        <Button
                            color="warning"
                            onClick={() =>
                                setFormData(prev => ({
                                    ...prev,
                                    quantity: prev.quantity > 0 ? prev.quantity - 1 : 0
                                }))
                            }
                        >
                            -
                        </Button>

                        <Button color='white'>{formData.quantity}</Button>

                        <Button
                            color="warning"
                            onClick={() =>
                                setFormData(prev => ({
                                    ...prev,
                                    quantity: prev.quantity + 1
                                }))
                            }
                        >
                            +
                        </Button>
                    </div>

                    <div>
                        <h3>Sipariş Toplamı</h3>
                        <p>Seçimler <span>25.00₺</span></p>
                        <p style={{ color: "red" }}>Toplam <span>110.00₺</span></p>
                        <Button
                            type='submit'
                            color="warning"
                            disabled={
                                formData.size === "" ||
                                !formData.check ||
                                selected.length < 4 ||
                                selected.length > 10 ||
                                formData.name.trim().length < 3 ||
                                formData.quantity < 1
                            }
                        >
                            Sipariş ver
                        </Button>
                    </div>
                </footer>
            </form>
        </div >
    )
}

export default OrderForm
