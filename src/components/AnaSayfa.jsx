import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Badge, Button } from 'reactstrap'
import homeBanners from "/images/iteration-1-images/Homesss.png";

function AnaSayfa() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/orderFormSonuc")
    }
    return (
        <div>

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
                    style={{ fontSize: "25px", padding: "10px 30px", marginTop: "5px", marginBottom: "175px", width: "250px", borderRadius: "15px" }}
                >
                    ACIKTIM
                </Button>
            </div>
            <div className='homePage-buttons'>
                <div>
                    <Badge style={{ height: "45px", width: "140px", color: "black" }}
                        color="white"
                        pill
                        id="YeniKore"
                    >
                        Yeni Kore
                    </Badge>

                    <Badge style={{ height: "45px", width: "140px", color: "black" }}
                        color="white"
                        pill
                        id="Pizza">
                        Pizza
                    </Badge>

                    <Badge style={{ height: "45px", width: "140px", color: "black" }}
                        color="white"
                        pill
                        id="Burger"
                    >
                        Burger
                    </Badge>

                    <Badge style={{ height: "45px", width: "140px", color: "black" }}
                        color="white"
                        pill
                        id="Kızartmalar"
                    >
                        Kızartmalar
                    </Badge>

                    <Badge style={{ height: "45px", width: "140px", color: "black" }}
                        color="white"
                        pill
                        id="FastFood"
                    >
                        Fast food
                    </Badge>

                    <Badge style={{ height: "45px", width: "140px", color: "black" }}
                        color="white"
                        pill
                        id="Gazlıİçecek"
                    >
                        Gazlı İçecek
                    </Badge>
                </div>
            </div>
        </div>

    )
}

export default AnaSayfa
