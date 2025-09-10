import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "reactstrap"
import { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function OrderForm() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [hamur, setHamur] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [not, setNot] = useState("");
    const [count, setCount] = useState(1);


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
            const updated = checkedItems.filter(item => item !== name);
            // @ts-ignore
            setCheckedItems(updated);
            setTotalPrice(updated.length * 5);
        }
    };

    useEffect(() => {
        console.log("Ek Malzeme Ücret Toplamı:", totalPrice);
    });

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev > 1 ? prev - 1 : prev = 1)
    }
    return (
        <div>

            <header className='orderForm-header'>

                <header>
                    <h1 className='orderForm-header-h1'>Teknolojik Yemekler</h1>
                    <img className='orderForm-header-img' src='../images/iteration-2-images/pictures/form-banner.png' />

                    <nav className='orderForm-header-nav'>
                        <Link className="orderForm-header-link">Anasayfa -</Link>
                        <Link className="orderForm-header-link"> Seçenekler -</Link>
                        <Link className="red"> Sipariş Oluştur</Link>
                    </nav>
                    <br />
                    <br />
                    <br />

                    <h3 className="orderForm-header-h3">Position Absolute Acı Pizza</h3>
                </header>

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
                        <Button className="beige" color="beige">
                            S
                        </Button>

                        <Button className="beige" color="beige">
                            M
                        </Button>

                        <Button className="beige rightPush" color="beige">
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
                                <MenuItem value={"ince"}>İnce Hamur</MenuItem>
                                <MenuItem value={"orta"}>Orta Hamur</MenuItem>
                                <MenuItem value={"kalın"}>Kalın Hamur</MenuItem>
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

                            </div>

                        </div>
                    </footer>
                </main>

            </main>

        </div>
    )
}

