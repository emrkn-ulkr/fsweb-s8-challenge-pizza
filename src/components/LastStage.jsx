import React from 'react'
import success from "/images/iteration-1-images/Success.png";


function LastStage() {
    return (
        <div className='Success-div'
            style={{
                backgroundImage: `url(${success})`,
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

        </div>
    )
}

export default LastStage
