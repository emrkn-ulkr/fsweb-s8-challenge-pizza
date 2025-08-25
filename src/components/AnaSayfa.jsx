import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button } from 'reactstrap'
import homeBanners from "/images/iteration-1-images/Homesss.png";

function AnaSayfa() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/orderFormSonuc")
    }
    return (
        <div className='AnaSayfa-div'
            style={{
                backgroundImage: `url(${homeBanners})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",          // 100vw yerine 100%
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center"
            }}
        >
            <Button
                onClick={handleClick}
                color="warning"
                style={{ fontSize: "20px", padding: "10px 30px", marginTop: "20px", marginBottom: "175px", width: "250px", borderRadius: "15px" }}
            >
                ACIKTIM
            </Button>
        </div>
    )
}

export default AnaSayfa
