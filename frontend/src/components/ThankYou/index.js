import React from 'react';

import "./thankyou.css";

function Info() {
    return (
        <div id="thankyou-footer">
            <div id="thankyou-content">
                <div id="thankyou-title">Thanks for listening!</div>
                <div id="thankyou-dev-title">Want to more about the developer? Check out these links below</div>
                <div id="thankyou-dev-img" />
                <div id="thankyou-dev-links">
                    <a href="https://github.com/da5idf" id='github-link' className='button wT-bB-button'>GitHub</a>
                    <a href="https://www.linkedin.com/in/david-forster-70b44673/" id="linkedin-link" className='button wT-bB-button'>LinkedIn</a>
                </div>
            </div>

        </div>
    )
}

export default Info;