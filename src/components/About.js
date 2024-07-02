import React, { useState } from 'react'

export default function About(props) {

    return (
    <>
        <div className='container'>
            <h1 style={{color: props.mode==='dark'?'white':'#042743'}} className='my-3'>About Us</h1>

            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        What is TextUtils?
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
    </>
    )
}
