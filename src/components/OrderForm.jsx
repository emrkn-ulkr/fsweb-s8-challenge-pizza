import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function OrderForm() {
    return (
        <div>

            <div className='header-from'>
                <header>
                    <h1>Teknolojik yemekler</h1>
                    <nav>
                        <Link>Anasayfa</Link>-
                        <Link>Seçenekler</Link>-
                        <Link>Sipariş Oluştur</Link>
                    </nav>
                </header>
            </div>

            <div className='body-form'>

            </div>

        </div>
    )
}

export default OrderForm
