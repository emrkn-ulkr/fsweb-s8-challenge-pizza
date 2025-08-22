import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderForm() {
    return (
        <div>
            <header>
                <div className='header-from'>

                    <h1>Teknolojik yemekler</h1>
                    <nav>
                        <Link>Anasayfa</Link>-
                        <Link>Seçenekler</Link>-
                        <Link>Sipariş Oluştur</Link>
                    </nav>
                </div>
            </header>

            <main>
                <div className='body-form'>
                    <h2>
                        Position Absolute Acı Pizza <span className='order-point'>4.9</span> <span className='order-comment'>(200)</span>
                    </h2>
                    <p>
                        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış , daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen , genellikle yuvarlak , düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir.. Küçük pizzaya bazen pizzetta denir.
                    </p>

                    <div className='body-options-radio-input-pizza'>
                        <h3>Boyut Seç<span style={{ color: "red" }}>*</span></h3>
                        <label><input name="radio" type='radio' value="kucuk" />Küçük</label>
                        <label><input name="radio" type='radio' value="orta" />Orta</label>
                        <label><input name="radio" type='radio' value="buyuk" />Büyük</label>
                    </div>

                    <div className='body-options-select-pizza'>
                        <h3>Hamur seç<span style={{ color: "red" }}>*</span></h3>
                        <select defaultValue="">
                            <option value="" disabled hidden>Hamur Kalınlığı</option>
                            <option value="ince">İnce</option>
                            <option value="orta">Orta</option>
                            <option value="kalin">Kalın</option>
                        </select>
                    </div>

                    <div className='body-checkbox-pizza-food-selector'>
                        <h3>Ek Malzemeler</h3>
                        <p>En Fazla 10 malzeme seçebilirsiniz.(adet:5₺)</p>
                        <label><input type='checkbox' />Pepperoni</label>
                        <label><input type='checkbox' />Domates</label>
                        <label><input type='checkbox' />Biber</label>
                        <label><input type='checkbox' />Sosis</label>
                        <label><input type='checkbox' />Mısır</label>
                        <label><input type='checkbox' />Sucuk</label>
                        <label><input type='checkbox' />Kanada Jambonu</label>
                        <label><input type='checkbox' />Sucuk</label>
                        <label><input type='checkbox' />Ananas</label>
                        <label><input type='checkbox' />Tavuk Izgara</label>
                        <label><input type='checkbox' />Jalepeno</label>
                        <label><input type='checkbox' />Kabak</label>
                        <label><input type='checkbox' />Soğan</label>
                        <label><input type='checkbox' />Sarımsak</label>
                    </div>
                </div>
            </main>

            <footer>
                <div>
                    <h3>Sipariş Notu</h3>
                    <label style={{ width: "100%" }}>
                        <textarea style={{ width: "500px" }} rows={"1"} placeholder='Siparişine eklemek istediğin bir not var mı?' ></textarea>
                    </label>
                </div>

                <hr style={{ width: "500px", margin: "20px auto" }} />

                <div className='body-buttons-count'>
                    <ButtonGroup>
                        <Button color="warning">-</Button>
                        <Button color='white'>1</Button>
                        <Button color="warning">+</Button>
                    </ButtonGroup>
                </div>

                <div>
                    <h3>Sipariş Toplamı</h3>
                    <p>Seçimler <span>25.00₺</span></p>
                    <p style={{ color: "red" }}>Toplam <span>110.00₺</span></p>
                    <Button color="warning">Sipariş ver</Button>
                </div>
            </footer>

        </div >
    )
}

export default OrderForm
