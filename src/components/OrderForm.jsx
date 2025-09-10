import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "reactstrap"
import { useState } from 'react';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function OrderForm() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [check, setCheck] = useState(false);
    const [hamur, setHamur] = useState("");

    const handleChange = (event) => {
        const { name, value, checked } = event.target;

        // Hamur seçimi için
        if (name === "hamur") {
            setHamur(value);
            return;
        }

        if (checked) {
            // İşaretleme: maksimum 10 kontrolü
            if (checkedItems.length < 10) {
                const newItems = [...checkedItems, name];
                // @ts-ignore
                setCheckedItems(newItems);
                console.log("Seçilenler:", newItems);
            } else {
                alert("Maksimum 10 adet ek malzeme seçebilirsiniz ");
            }
        } else {
            // İşaret kaldırma
            const newItems = checkedItems.filter(item => item !== name);
            // @ts-ignore
            setCheckedItems(newItems);
            console.log("Seçilenler:", newItems);
        }


    };

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
                                <MenuItem value={"ince"}>İnce</MenuItem>
                                <MenuItem value={"orta"}>Orta</MenuItem>
                                <MenuItem value={"kalın"}>Kalın</MenuItem>
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
                            control={<Checkbox name="Sosis" disabled={check} checked={checkedItems.includes("Sosis")} onChange={handleChange} />}
                            label="Sosis" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Kanada-Jambonu" disabled={check} checked={checkedItems.includes("Kanada-Jambonu")} onChange={handleChange} />}
                            label="Kanada-Jambonu" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Tavuk-Izgara" disabled={check} checked={checkedItems.includes("Tavuk-Izgara")} onChange={handleChange} />}
                            label="Tavuk-Izgara" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Soğan" disabled={check} checked={checkedItems.includes("Soğan")} onChange={handleChange} />}
                            label="Soğan" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Domates" disabled={check} checked={checkedItems.includes("Domates")} onChange={handleChange} />}
                            label="Domates" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Mısır" disabled={check} checked={checkedItems.includes("Mısır")} onChange={handleChange} />}
                            label="Mısır" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Sucuk" disabled={check} checked={checkedItems.includes("Sucuk")} onChange={handleChange} />}
                            label="Sucuk" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Jalepeno" disabled={check} checked={checkedItems.includes("Jalepeno")} onChange={handleChange} />}
                            label="Jalepeno" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Sarımsak" disabled={check} checked={checkedItems.includes("Sarımsak")} onChange={handleChange} />}
                            label="Sarımsak" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Biber" disabled={check} checked={checkedItems.includes("Biber")} onChange={handleChange} />}
                            label="Biber" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Ananas" disabled={check} checked={checkedItems.includes("Ananas")} onChange={handleChange} />}
                            label="Ananas" />

                        <FormControlLabel
                            // @ts-ignore
                            control={<Checkbox name="Kabak" disabled={check} checked={checkedItems.includes("Kabak")} onChange={handleChange} />}
                            label="Kabak" />
                    </div>
                </main>

            </main>

        </div>
    )
}

