import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "reactstrap"
import { useState } from 'react';
import Link from '@mui/material/Link';

export default function OrderForm() {


    const [hamur, setHamur] = useState("");

    const handleChange = (event) => {

        const { name, value } = event.target;
        console.log("İncele:", event.target);
        if (name == "hamur") {
            setHamur(value);
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
                    <p>Forntent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.</p>
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

                </main>

            </main>

        </div>
    )
}

