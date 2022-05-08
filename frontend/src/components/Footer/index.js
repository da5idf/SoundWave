import React from "react";

import './footer.css'

function Footer() {
    return (
        <div id="footer">
            <div className="footer-label">JavaScript</div>
            <div className="footer-label">React</div>
            <div className="footer-label">Redux</div>
            <div className="footer-label">Sequelize</div>
            <div className="footer-label">Postgres</div>
        </div>
    )
}

export default Footer;