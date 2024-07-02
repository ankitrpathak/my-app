import React, { useState } from 'react'

export default function About() {

    const toogleMode= () => {
        if(styles.color === "black"){
            newStyles({
                color: "white",
                backgroundColor: "black",
                border: "black solid 1px"
            })
            newMode("Light")
            
        }
        else{
            newStyles({
                color: "black",
                backgroundColor: "white"
            })
            newMode("Dark")
        }
    }

    const [mode, newMode] =useState("Dark");

    const [styles, newStyles] =useState({
        backgroundColor: "white",
        color: "black"
    });

    return (
    <>
        <div className='container'>
            <h1>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={styles}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={styles} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        What is TextUtility?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <strong>This is my first react webapp.</strong> The <strong>TextUtility</strong> is a website to analyze and play with your text. Though I am creating this as a fun way to start my journey with react, yet I will try to plan and make this fun website helpful for the real-life user.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <button className="btn btn-primary" onClick={toogleMode}>
                Turn on {mode} Mode
            </button>
        </div>
    </>
    )
}
