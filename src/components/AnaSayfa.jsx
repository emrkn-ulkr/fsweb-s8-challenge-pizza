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
            <header>


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
            </header>
            <div className='home-Icons-buttons'>
                <Badge style={{ height: "45px", width: "140px", color: "black", marginRight: "25px" }}
                    color="white"
                    pill
                    id="YeniKore"
                >
                    <img src="../images/iteration-2-images/icons/1.svg" alt="makarna" style={{ marginRight: "15px" }} />
                    Yeni Kore
                </Badge>

                <Badge style={{ height: "45px", width: "140px", color: "black", marginRight: "25px" }}
                    color="white"
                    pill
                    id="Pizza">
                    <img src="../images/iteration-2-images/icons/2.svg" alt="makarna" style={{ marginRight: "15px" }} />
                    Pizza
                </Badge>

                <Badge style={{ height: "45px", width: "140px", color: "black", marginRight: "25px" }}
                    color="white"
                    pill
                    id="Burger"
                >
                    <img src="../images/iteration-2-images/icons/3.svg" alt="makarna" style={{ marginRight: "15px" }} />
                    Burger
                </Badge>

                <Badge style={{ height: "45px", width: "140px", color: "black", marginRight: "25px" }}
                    color="white"
                    pill
                    id="Kızartmalar"
                >
                    <img src="../images/iteration-2-images/icons/4.svg" alt="makarna" style={{ marginRight: "15px" }} />
                    Kızartmalar
                </Badge>

                <Badge style={{ height: "45px", width: "140px", color: "black", marginRight: "25px" }}
                    color="white"
                    pill
                    id="FastFood"
                >
                    <img src="../images/iteration-2-images/icons/5.svg" alt="makarna" style={{ marginRight: "15px" }} />
                    Fast food
                </Badge>

                <Badge style={{ height: "45px", width: "140px", color: "black", marginRight: "25px" }}
                    color="white"
                    pill
                    id="Gazlıİçecek"
                >
                    <img src="../images/iteration-2-images/icons/6.svg" alt="makarna" style={{ marginRight: "15px" }} />
                    Gazlı İçecek
                </Badge>
            </div>

        </div>

    )
}

export default AnaSayfa
