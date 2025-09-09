import React from 'react'
import success from "/images/iteration-1-images/Success.png";


function LastStage() {
    return (
        <div className='lastStage-all-div'>
            <header>
                <h3 className='lastStage-header-h3'>Teknolojik Yemekler</h3>
                <h2 className='lastStage-header-h2'>lezzetin yolda</h2>
                <h1 className='lastStage-header-h1'>SİPARİŞ ALINDI</h1>
            </header>

            <hr className='lastStage-1-hr' />

            <main>
                <h5 className='lastStage-main-h5'>Position Absolute Acı Pizza</h5>
                <ul className='lastStage-main-card-ul' >
                    <li className='lastStage-main-card-div-li'>
                        <span className='lastStage-text-color-low'>Boyut:</span> <strong>L</strong>
                    </li>

                    <li>
                        <span className='lastStage-text-color-low'>Hamur:</span> <strong>Süpper İnce</strong>
                    </li>

                    <li>
                        <span className='lastStage-text-color-low'>Ek Malzemeler:</span> <strong>Pepperoni, <br /> Sosis, Mısır, Ananas,<br /> Jalepono</strong>
                    </li>
                </ul>
            </main>

            <footer>

                <ul className='lastStage-footer-ul'>
                    <li className='lastStage-footer-li'>Sipariş Toplamı</li>
                    <li>Seçimler: <span className='lastStage-footer-span'>25.00₺</span></li>
                    <li>Toplam: <span className='lastStage-footer-span'>110.50₺</span></li>
                </ul>

            </footer>

        </div>
    )
}

export default LastStage
