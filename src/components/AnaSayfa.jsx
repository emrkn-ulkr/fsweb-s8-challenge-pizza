import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button } from 'reactstrap'

function AnaSayfa() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/siparis-olustur")
    }
    return (
        <div className='AnaSayfa-div'>

            <img src='.images/logo.svg' />
            <h2>KOD ACIKTIRIR</h2>
            <h2>PİZZA, DOYURUR</h2>
            <Button
                onClick={handleClick}
                color='warning'>ACIKTIM</Button>
        </div>
    )
}

export default AnaSayfa
