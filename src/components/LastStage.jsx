import { useLocation } from "react-router-dom";

function LastStage() {
    const location = useLocation();
    const { pizzaSize, checkedItems, hamur, ekMalzemeUcretToplamı, allTotal, not } = location.state || {};
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
                        <span className='lastStage-text-color-low'>Boyut:</span> <strong>{pizzaSize}</strong>
                    </li>

                    <li>
                        <span className='lastStage-text-color-low'>Hamur:</span> <strong>{hamur}</strong>
                    </li>

                    <li>
                        <span className='lastStage-text-color-low'>Ek Malzemeler:</span> <strong>{checkedItems && checkedItems.length > 0 && (
                            <>
                                {/* İlk malzeme */}
                                {checkedItems[0]}
                                <br />
                                {/* Kalan malzemeler 3'er 3'er */}
                                {checkedItems.slice(1).map((item, index) => (
                                    <span key={index}>
                                        {item}
                                        {((index + 1) % 3 === 0 || index === checkedItems.slice(1).length - 1) ? <br /> : ", "}
                                    </span>
                                ))}
                            </>
                        )}</strong>
                    </li>
                </ul>
            </main>

            <footer>

                <ul className='lastStage-footer-ul'>
                    <li> {not.length > 0 ? `Sipariş notu: ${not}` : ""}</li>
                    <li className='lastStage-footer-li'>Sipariş Toplamı</li>
                    <li>Seçimler: <span className='lastStage-footer-span'>{ekMalzemeUcretToplamı}₺</span></li>
                    <li>Toplam: <span className='lastStage-footer-span'>{allTotal}₺</span></li>
                </ul>

            </footer>

        </div>
    )
}

export default LastStage
