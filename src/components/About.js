import React, { memo, useState } from 'react'

export default memo(function About() {

    


  return (
    <div className="container">
        <h1 className="my-3">About TextUtils</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Remove Extra Spaces
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    TextUtils provides a convenient option to eliminate unnecessary spaces within the text. Users can easily clean up excessive spaces, making the text more readable and organized.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Convert to Uppercase and Lowercase
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    Users can effortlessly transform text to uppercase or lowercase according to their preference. This feature ensures easy and quick modification of text cases without the need for manual adjustments.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Copy to Clipboard
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    This functionality enables users to copy the modified or original text to the clipboard with a simple click. It simplifies the process of transferring text to other applications or locations without the hassle of manual copying.
                </div>
                </div>
            </div>
        </div>
        <br/>
        <div class="contact-box my-3">
            <h2>Developer Contact</h2>
            <br/>
            <p>E-Mail: <a href="mailto:bharadwaja1.618@gmail.com">bharadwaja1.618@gmail.com</a></p>
            <p>Instagram: <a href="https://www.instagram.com/mynortherncompass_" target="_blank">mynortherncompass_</a></p>
        </div>
    </div>
  )
})
